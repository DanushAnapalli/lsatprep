# Juris AI Chatbot Setup Guide

Your AI chatbot is now fully implemented and deployed! Here's how to activate it.

## ✅ What's Already Done

1. **JurisChatbot Component** - Fully functional chat UI
2. **API Route** - Connected to Claude Sonnet 4 (`/api/chat`)
3. **Floating Widget** - Appears as a circular button in bottom-right corner
4. **Authentication** - Only shows for logged-in users
5. **Rate Limiting** - Prevents API abuse
6. **User Context** - Juris knows your practice test progress

## 🔑 Step 1: Get Your Anthropic API Key

1. Go to https://console.anthropic.com/
2. Sign up or log in
3. Navigate to "API Keys" in the dashboard
4. Click "Create Key"
5. Copy your API key (starts with `sk-ant-api03-...`)

## 🌐 Step 2: Add API Key to Vercel

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your LSATprep project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `ANTHROPIC_API_KEY`
   - **Value:** Your API key from Step 1
   - **Environment:** Production, Preview, Development (check all)
5. Click "Save"
6. Redeploy your app (go to Deployments → ... → Redeploy)

## 🧪 Step 3: Test Locally (Optional)

If you want to test before deploying:

1. Create a `.env.local` file in your project root
2. Add:
   ```
   ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
   ```
3. Run `npm run dev`
4. Log in to your app
5. Look for the blue chat button in the bottom-right corner

## 💰 Pricing

Claude Sonnet 4 costs approximately:
- **Input:** $3 per million tokens (~750k words)
- **Output:** $15 per million tokens (~750k words)

For a typical chat session:
- Average question: ~100 tokens
- Average response: ~300 tokens
- **Cost per message:** ~$0.005 (half a cent)

## 🎨 How It Works

### User Experience:
1. User logs into LSATprep
2. Sees a floating blue/amber chat button (bottom-right)
3. Clicks to open the chat window
4. Can ask Juris about:
   - Specific LSAT questions (by ID or description)
   - LSAT strategy and techniques
   - Law school admissions
   - Legal concepts
5. Juris provides detailed explanations with markdown formatting

### Technical Flow:
1. User sends message → `JurisChatbot` component
2. Component calls → `/api/chat` route
3. API authenticates user and checks rate limits
4. Sends message to Claude Sonnet 4 with:
   - System prompt (Juris personality + LSAT database)
   - User's progress data
   - Conversation history
5. Claude responds with helpful explanation
6. UI formats response with markdown

## 📊 Features

- **Context-Aware:** Knows user's test performance
- **Question Database:** Access to all 105 LSAT questions
- **Markdown Support:** Bold, italics, lists, code blocks
- **Suggested Questions:** Quick-start prompts
- **Minimizable:** Doesn't block the UI
- **Mobile-Friendly:** Responsive design
- **Rate Limited:** 20 messages per 15 minutes per user

## 🔒 Security

- ✅ Authentication required
- ✅ Rate limiting enabled
- ✅ API key server-side only (never exposed to client)
- ✅ Firebase Auth integration
- ✅ Error handling for API failures

## 🐛 Troubleshooting

### "API configuration error"
- Check that `ANTHROPIC_API_KEY` is set in Vercel
- Verify the key starts with `sk-ant-api03-`
- Redeploy after adding the environment variable

### "Too many requests"
- User hit rate limit (20 messages per 15 minutes)
- Wait 15 minutes or adjust limit in `src/lib/rate-limiter.ts`

### "API quota exceeded"
- You've used up your Anthropic credits
- Add billing info at https://console.anthropic.com/settings/billing

### Chat button doesn't appear
- Make sure you're logged in
- Check browser console for errors
- Verify `FloatingChatWidget` is in layout.tsx

## 🚀 Next Steps

### Optional Enhancements:

1. **Add to specific pages:**
   - Import `JurisChatbot` directly in practice/review pages
   - Provide question context automatically

2. **Enhance prompts:**
   - Edit `SYSTEM_PROMPT` in `src/app/api/chat/route.ts`
   - Add more question context
   - Customize Juris's personality

3. **Add features:**
   - Save chat history to localStorage
   - Export conversations
   - Voice input/output
   - Image support for diagrams

4. **Analytics:**
   - Track most asked questions
   - Monitor API usage
   - Measure user engagement

## 📝 Current Implementation

The chatbot is now live at:
- **Location:** Bottom-right floating button
- **Availability:** All pages (when logged in)
- **Model:** Claude Sonnet 4 (latest)
- **Max tokens:** 1024 per response
- **Rate limit:** 20 messages / 15 min / user

---

**Ready to go!** Just add your API key to Vercel and redeploy. The chat button will appear automatically for all logged-in users.
