# 🚀 Amarpreet Bhatia - Professional AI Portfolio

A cutting-edge, professional portfolio website that showcases **Amarpreet Bhatia's** expertise in **Enterprise AI, Cloud-Native Architecture, and Modern Software Engineering**. 

The site features an **intelligent AI-powered chatbot** that answers questions about professional background, experience, and capabilities—perfect for recruiters and hiring managers exploring potential collaboration opportunities.

## ✨ Highlights

### 🎨 Professional Design
- **Responsive** and **modern** UI with Tailwind CSS
- **Hero section** with key metrics and achievements
- **Detailed profile** with experience timeline
- **Skills showcase** with 25+ competencies
- **Certifications** and credentials display
- **Sticky navigation** with smooth scrolling

### 🤖 Intelligent AI Chatbot
- **Powered by OpenRouter** with multiple LLM options
- **RAG (Retrieval-Augmented Generation)** for context-aware responses
- **Trained on professional profile** and experience documents
- **Floating widget** that's always accessible
- **Real-time streaming** responses with typing indicators
- **Smart system prompt** to ensure professional, relevant answers

### 🌐 Production-Ready
- **Next.js 14** with TypeScript
- **Optimized for Vercel** deployment
- **Environment-based configuration**
- **Fast refresh** and **incremental static regeneration**

## 🎯 Key Features

| Feature | Description |
|---------|-------------|
| **AI Chat** | Intelligent chatbot trained on professional profile |
| **Profile Display** | Complete professional information with timeline |
| **Responsive Design** | Mobile-first, works on all devices |
| **Fast Loading** | Optimized with Next.js and Vercel |
| **Easy Customization** | Component-based architecture |
| **Production Deployment** | Ready to deploy on Vercel |

## 📦 What's Included

- ✅ Professional portfolio landing page
- ✅ AI-powered chatbot integration
- ✅ Document-based RAG system with LlamaIndex
- ✅ OpenRouter API integration
- ✅ Responsive design with Tailwind CSS
- ✅ Complete setup and deployment guides
- ✅ Environment configuration templates

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
cd chatwithamarpreet
npm install
```

### 2. Generate Vector Store
```bash
npm run generate
```
This creates the AI knowledge base from profile documents.

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Test the Chatbot
Click the chat widget in the bottom-right corner and ask questions like:
- "Tell me about Amarpreet's AI experience"
- "What are the key skills in cloud-native architecture?"
- "What leadership experience does Amarpreet have?"

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Lucide Icons |
| **AI/ML** | LlamaIndex, OpenRouter API |
| **Backend** | Node.js API routes |
| **Deployment** | Vercel |
| **UI Components** | Radix UI, Custom Components |

## 🧠 How the AI Works

1. **Document Processing**: Profile markdown is indexed using LlamaIndex
2. **Semantic Search**: When user asks a question, relevant sections are retrieved
3. **Context Enhancement**: Retrieved information is provided to the LLM
4. **Response Generation**: LLM generates intelligent, contextual responses
5. **Streaming**: Responses stream in real-time to the user

This approach ensures the chatbot:
- Stays accurate and on-topic
- Provides professional responses
- Answers based on actual profile content
- Adapts to new information quickly

## 📁 Project Structure

```
chatwithamarpreet/
├── app/
│   ├── api/chat/           # AI Chat API endpoints
│   ├── components/         # React components
│   │   ├── profile/        # Profile-specific components
│   │   ├── ui/chat/        # Chat UI components
│   │   ├── floating-chat-widget.tsx
│   │   ├── professional-header.tsx
│   │   └── footer.tsx
│   ├── page.tsx            # Main portfolio page
│   └── layout.tsx
├── data/                   # Document storage
│   └── amarpreet_profile.md
├── cache/                  # AI index cache
├── .env.local             # Configuration
├── SETUP_GUIDE.md         # Detailed setup instructions
└── package.json
```

## ⚙️ Configuration

The portfolio uses environment variables for configuration:

```env
# OpenRouter API
MODEL_PROVIDER=openrouter
OPENROUTER_API_KEY=your_key_here
MODEL=openai/gpt-3.5-turbo

# LLM Settings
EMBEDDING_MODEL=sentence-transformers/all-MiniLM-L6-v2
LLM_MAX_TOKENS=4096

# RAG Configuration
TOP_K=3
SYSTEM_PROMPT=...
```

See `.env.example` for complete configuration template.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# Ensure everything builds
npm run build

# Deploy
vercel deploy
```

Vercel automatically:
- Deploys from your GitHub repo
- Manages environment variables
- Provides CDN for static assets
- Handles SSL certificates

**See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed deployment instructions.**

## 🎓 Learning the System

### Understand the AI Architecture
1. Read [AI Chat Integration Guide](./SETUP_GUIDE.md#-ai-chat-configuration)
2. Review `app/api/chat/engine/` for LLM setup
3. Check `app/api/chat/llamaindex/` for RAG implementation

### Customize the Portfolio
1. Edit `app/components/profile/portfolio-content.tsx` for profile info
2. Update `app/components/professional-header.tsx` for navigation
3. Modify `app/components/floating-chat-widget.tsx` for chat behavior

### Extend with More Documents
1. Add `.md`, `.txt`, or `.pdf` files to `./data/`
2. Run `npm run generate` to update the AI knowledge base
3. Chatbot will automatically learn from new documents

## 📖 Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Complete setup and deployment guide
- **[.env.example](./.env.example)** - Environment variable templates
- **LlamaIndex Docs** - [docs.llamaindex.ai](https://docs.llamaindex.ai/)
- **OpenRouter Docs** - [openrouter.ai/docs](https://openrouter.ai/docs)

## 🔐 Security

- API keys are managed through Vercel environment variables
- `.env.local` is in `.gitignore` and never committed
- All API communication uses HTTPS
- Rate limiting and monitoring recommended

## 🎯 Use Cases

Perfect for:
- ✅ Professional portfolio presentation
- ✅ Recruitment and job searching
- ✅ Showcasing AI/ML expertise
- ✅ Building thought leadership
- ✅ Making hiring manager conversations easier
- ✅ Demonstrating AI integration skills

## 🚀 Next Steps

1. **Generate the AI index**: `npm run generate`
2. **Start developing**: `npm run dev`
3. **Customize content**: Edit components in `app/components/profile/`
4. **Test the chatbot**: Click the widget and ask questions
5. **Deploy**: Push to GitHub and connect with Vercel

## 🆘 Troubleshooting

**Vector store index not found?**
```bash
npm run generate
```

**Build fails on Vercel?**
- Ensure `npm run generate` runs before build
- Check Vercel build logs for errors

**Chat not responding?**
- Verify API key is correct
- Check network in browser developer tools
- Review Vercel function logs

**More help?** See [SETUP_GUIDE.md#-troubleshooting](./SETUP_GUIDE.md#-troubleshooting)

## 📊 Project Stats

- ⚛️ Built with **Next.js 14**
- 🤖 Powered by **LlamaIndex** & **OpenRouter**
- 📱 **100% Responsive** design
- 🚀 **Production-ready** code
- 📖 **Fully documented**

## 🙋 Support & Questions

For issues or improvements:
1. Check the [SETUP_GUIDE.md](./SETUP_GUIDE.md)
2. Review the `.env.example` configuration
3. Consult LlamaIndex and OpenRouter documentation

## 📄 License

This project is part of the Amarpreet Bhatia professional portfolio.

---

### Built with ❤️ using:
- **Next.js** - React framework
- **LlamaIndex** - AI indexing and retrieval
- **OpenRouter** - Multiple AI models access
- **Tailwind CSS** - Modern styling
- **Vercel** - Deployment platform

**Ready to make an impression? Let's go! 🚀**

