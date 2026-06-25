# Amarpreet Bhatia - AI Professional Portfolio

A modern, professional portfolio website featuring an intelligent AI chatbot powered by OpenRouter and LlamaIndex. Built with Next.js and deployed on Vercel.

## 🌟 Features

✨ **Professional Portfolio Design**
- Responsive, modern UI built with Tailwind CSS
- Hero section showcasing key achievements
- Complete professional profile display
- Experience and skills sections
- Certifications showcase

🤖 **Intelligent AI Chatbot**
- Powered by OpenRouter API (supports multiple LLMs)
- RAG (Retrieval-Augmented Generation) enabled
- Trained on professional profile documents
- Floating widget integration
- Real-time streaming responses

🚀 **Production-Ready**
- Next.js 14 with TypeScript
- Optimized for Vercel deployment
- Environment configuration management
- Fast refresh during development

## 📋 Prerequisites

- Node.js 18+ and npm
- OpenRouter API key (provided)
- Vercel account (for deployment)

## 🚀 Quick Start

### 1. Clone & Install

```bash
cd chatwithamarpreet
npm install
```

### 2. Configure Environment Variables

The `.env.local` file is already configured with:
- OpenRouter API key
- Recommended LLM model (gpt-3.5-turbo)
- System prompt for the chatbot

**Important**: Keep your API key secure and never commit `.env.local` to version control.

### 3. Generate Vector Store Index

Before running the app, generate the vector store from documents:

```bash
npm run generate
```

This creates embeddings for semantic search using the profile document in `./data/`.

### 4. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see your portfolio!

## 📁 Project Structure

```
chatwithamarpreet/
├── app/
│   ├── api/
│   │   └── chat/
│   │       ├── engine/
│   │       │   ├── openrouter.ts      # OpenRouter LLM integration
│   │       │   ├── settings.ts        # LLM configuration
│   │       │   ├── chat.ts           # Chat engine setup
│   │       │   ├── loader.ts         # Document loader
│   │       │   └── generate.ts       # Index generation
│   │       └── route.ts              # Chat API endpoint
│   ├── components/
│   │   ├── professional-header.tsx   # Navigation header
│   │   ├── floating-chat-widget.tsx  # Chat widget
│   │   ├── footer.tsx                # Footer with links
│   │   └── profile/
│   │       ├── profile-hero.tsx      # Hero section
│   │       ├── profile-components.tsx # Reusable components
│   │       └── portfolio-content.tsx # Main profile content
│   ├── page.tsx                      # Main page
│   └── layout.tsx                    # App layout
├── data/
│   └── amarpreet_profile.md         # Profile document
├── cache/                           # Vector store cache
├── .env.local                       # Environment variables
└── package.json

```

## 🔧 Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **AI/ML**: LlamaIndex, OpenRouter API
- **UI Components**: Radix UI, Lucide Icons
- **Styling**: Tailwind CSS, PostCSS
- **Deployment**: Vercel

## 🤖 AI Chat Configuration

### Supported Models via OpenRouter

The chatbot can use any model available on OpenRouter:

**LLMs**:
- `openai/gpt-4` (most capable)
- `openai/gpt-3.5-turbo` (recommended, fast & affordable)
- `anthropic/claude-3-opus` (excellent reasoning)
- `google/gemini-pro` (multimodal)
- And many more...

**Embeddings**:
- `sentence-transformers/all-MiniLM-L6-v2` (recommended, fast)
- `sentence-transformers/all-mpnet-base-v2` (better quality)

### Customizing the Chatbot

Edit `.env.local` to change:

```env
# Use a more capable model
MODEL=openai/gpt-4

# Get more context from documents
TOP_K=5

# Customize the system prompt
SYSTEM_PROMPT=Your custom instructions here...
```

## 📄 Adding More Documents

Add any `.md`, `.txt`, or `.pdf` files to the `./data/` directory, then regenerate:

```bash
npm run generate
```

The chatbot will automatically be trained on new documents!

## 🚀 Deployment to Vercel

### Step 1: Prepare for Deployment

```bash
# Ensure everything builds correctly
npm run build

# Test the build
npm run start
```

### Step 2: Set Up Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Settings → Environment Variables:

```
MODEL_PROVIDER=openrouter
OPENROUTER_API_KEY=your_key_here
MODEL=openai/gpt-3.5-turbo
EMBEDDING_MODEL=sentence-transformers/all-MiniLM-L6-v2
LLM_MAX_TOKENS=4096
TOP_K=3
SYSTEM_PROMPT=your_prompt_here
```

### Step 3: Generate Index for Production

Add a build command in `vercel.json`:

```json
{
  "buildCommand": "npm run generate && npm run build"
}
```

Or in package.json scripts:

```json
{
  "scripts": {
    "build": "npm run generate && next build"
  }
}
```

### Step 4: Deploy

```bash
vercel deploy
```

Your portfolio will be live at `https://your-domain.vercel.app`

## 🔐 Security Notes

1. **Never commit `.env.local`** - Add to `.gitignore`:
   ```
   .env.local
   ```

2. **API Key Safety**:
   - The OpenRouter API key is sensitive
   - In production, use Vercel's encrypted environment variables
   - Consider rotating keys periodically

3. **Rate Limiting**:
   - Monitor API usage to avoid unexpected costs
   - Set up usage alerts in OpenRouter dashboard

## 🐛 Troubleshooting

### Vector Store Index Error

**Problem**: "StorageContext is empty"

**Solution**:
```bash
npm run generate
```

### Chat Not Responding

**Problem**: Chat widget appears but responses timeout

**Checklist**:
- [ ] `OPENROUTER_API_KEY` is set correctly
- [ ] `MODEL_PROVIDER` is set to `openrouter`
- [ ] Network is working (check browser console)
- [ ] API quota not exceeded

### Build Fails on Vercel

**Common Cause**: Vector store not generated

**Solution**:
- Ensure `npm run generate` runs before build
- Check build logs in Vercel dashboard

## 📊 Performance Tips

1. **Use faster models** for production (e.g., gpt-3.5-turbo)
2. **Cache responses** using edge caching
3. **Monitor API costs** - set usage alerts in OpenRouter
4. **Optimize documents** - keep relevant, remove noise
5. **Use CDN** for static assets (Vercel does this automatically)

## 📝 Customization Guide

### Change the Hero Section
Edit `app/components/profile/profile-hero.tsx` to update:
- Contact information
- Social links
- Statistics cards

### Modify Portfolio Content
Edit `app/components/profile/portfolio-content.tsx` to update:
- Experience entries
- Skills list
- Certifications
- Call-to-action

### Update Navigation
Edit `app/components/professional-header.tsx` to add/remove nav items

### Customize Chat Behavior
Edit `app/components/floating-chat-widget.tsx` to:
- Change colors and styling
- Adjust widget position
- Modify chat placeholder text

## 📚 Additional Resources

- [OpenRouter Docs](https://openrouter.ai/docs)
- [LlamaIndex Docs](https://docs.llamaindex.ai/)
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com)

## 🎯 Next Steps

1. ✅ Generate vector store: `npm run generate`
2. ✅ Start development: `npm run dev`
3. ✅ Customize content and styling
4. ✅ Test chat functionality
5. ✅ Deploy to Vercel

## 📞 Support

For issues or questions:
- Check the `.env.example` for configuration templates
- Review Vercel logs for deployment issues
- Consult LlamaIndex/OpenRouter documentation

---

Built with ❤️ using Next.js, LlamaIndex, and OpenRouter AI
