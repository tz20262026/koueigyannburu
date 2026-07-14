import type { MetadataRoute } from "next";

const BASE_URL = "https://koueigyannburu.vercel.app";

/**
 * AI検索（GEO）対策：主要なAIクローラーを名指しで許可する。
 * ChatGPT・Claude・Perplexity・Google AI Overview・Bing Copilot などが
 * 記事を引用・参照できるようにするため、明示的に Allow を出しておく。
 */
const AI_CRAWLERS = [
  "GPTBot", // OpenAI（学習・ChatGPT検索の基盤）
  "OAI-SearchBot", // ChatGPT Search のインデックス用
  "ChatGPT-User", // ChatGPTがユーザー要求で直接閲覧する時
  "ClaudeBot", // Anthropic（Claude）
  "Claude-User", // Claudeがユーザー要求で直接閲覧する時
  "anthropic-ai", // Anthropic 旧UA
  "PerplexityBot", // Perplexity のインデックス用
  "Perplexity-User", // Perplexityがユーザー要求で直接閲覧する時
  "Google-Extended", // Google AI Overview / Gemini の引用可否を制御するUA
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl（多くのLLMの学習元）
  "meta-externalagent", // Meta AI
  "DuckAssistBot", // DuckDuckGo AI
  "cohere-ai", // Cohere
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 通常の検索エンジン（既存ルールを維持）
      { userAgent: "*", allow: "/" },
      // Bing：Copilot経由の流入があるため明示的に許可
      { userAgent: "Bingbot", allow: "/" },
      // AIクローラーを名指しで許可（GEO対策）
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
