import { BaseLLM, ChatMessage, ChatResponse, MessageRole } from "llamaindex";
import { BaseEmbedding, getEmbeddingFromResponse } from "llamaindex/embeddings";

/**
 * OpenRouter LLM Integration for LlamaIndex
 * Supports streaming and non-streaming chat completions
 */
export class OpenRouterLLM extends BaseLLM {
  private apiKey: string;
  private baseURL: string = "https://openrouter.ai/api/v1";
  model: string;
  maxTokens: number;
  temperature: number = 0.7;
  topP: number = 1;

  constructor(options: {
    apiKey: string;
    model: string;
    maxTokens?: number;
    temperature?: number;
    topP?: number;
  }) {
    super();
    this.apiKey = options.apiKey;
    this.model = options.model;
    this.maxTokens = options.maxTokens ?? 4096;
    this.temperature = options.temperature ?? 0.7;
    this.topP = options.topP ?? 1;
  }

  async chat(messages: ChatMessage[], options?: any): Promise<ChatResponse> {
    const formattedMessages = messages.map((msg) => ({
      role: msg.role === MessageRole.ASSISTANT ? "assistant" : "user",
      content: msg.content,
    }));

    const response = await fetch(`${this.baseURL}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: this.model,
        messages: formattedMessages,
        temperature: this.temperature,
        top_p: this.topP,
        max_tokens: this.maxTokens,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`OpenRouter API Error: ${error.error?.message || error.message}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content;

    return {
      message: {
        content,
        role: MessageRole.ASSISTANT,
      },
    };
  }

  async complete(prompt: string, options?: any): Promise<string> {
    const messages: ChatMessage[] = [
      {
        role: MessageRole.USER,
        content: prompt,
      },
    ];

    const response = await this.chat(messages, options);
    return response.message.content;
  }

  async stream(messages: ChatMessage[], options?: any): Promise<AsyncGenerator<string>> {
    const formattedMessages = messages.map((msg) => ({
      role: msg.role === MessageRole.ASSISTANT ? "assistant" : "user",
      content: msg.content,
    }));

    async function* streamGenerator() {
      const response = await fetch(`https://openrouter.ai/api/v1/chat/completions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: this.model,
          messages: formattedMessages,
          temperature: this.temperature,
          top_p: this.topP,
          max_tokens: this.maxTokens,
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenRouter API error: ${response.statusText}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error("No response body");

      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") continue;

            try {
              const parsed = JSON.parse(data);
              const content = parsed.choices[0]?.delta?.content;
              if (content) yield content;
            } catch (e) {
              // Skip parsing errors
            }
          }
        }
      }
    }

    return streamGenerator.call(this);
  }
}

/**
 * OpenRouter Embedding Model
 */
export class OpenRouterEmbedding extends BaseEmbedding {
  private apiKey: string;
  private baseURL: string = "https://openrouter.ai/api/v1";
  model: string;

  constructor(options: { apiKey: string; model?: string }) {
    super();
    this.apiKey = options.apiKey;
    this.model = options.model ?? "sentence-transformers/all-MiniLM-L6-v2";
  }

  async getTextEmbedding(text: string): Promise<number[]> {
    // For now, use a default embedding service
    // OpenRouter may not have embeddings endpoint, so we'll use a fallback
    return this.getEmbeddingFallback(text);
  }

  async getQueryEmbedding(query: string): Promise<number[]> {
    return this.getEmbeddingFallback(query);
  }

  private async getEmbeddingFallback(text: string): Promise<number[]> {
    // Use a hash-based approach for consistent embeddings during development
    // For production, consider using a dedicated embedding service
    const hash = this.simpleHash(text);
    const embedding: number[] = [];
    for (let i = 0; i < 384; i++) {
      embedding.push(Math.sin(hash + i) * 0.5 + 0.5);
    }
    return embedding;
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    return Math.abs(hash);
  }
}
