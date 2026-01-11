// Simple in-memory rate limiter for API routes
// For production multi-server deployments, consider using Redis or Upstash

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

interface RateLimitConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Max requests per window
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
}

// Check if a request is within rate limits
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);

  // Clean up expired entries periodically (when store gets large)
  if (rateLimitStore.size > 10000) {
    cleanupExpiredEntries(now);
  }

  if (!entry || now > entry.resetTime) {
    // New window - create fresh entry
    rateLimitStore.set(identifier, {
      count: 1,
      resetTime: now + config.windowMs,
    });
    return {
      allowed: true,
      remaining: config.maxRequests - 1,
      resetTime: now + config.windowMs,
    };
  }

  if (entry.count >= config.maxRequests) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Increment counter
  entry.count++;
  return {
    allowed: true,
    remaining: config.maxRequests - entry.count,
    resetTime: entry.resetTime,
  };
}

function cleanupExpiredEntries(now: number) {
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}

// Preset rate limit configurations
export const RATE_LIMITS = {
  // Chat API - protect Anthropic costs
  chat: { windowMs: 60000, maxRequests: 20 }, // 20 requests per minute

  // Subscription checks - prevent abuse
  subscription: { windowMs: 60000, maxRequests: 10 }, // 10 per minute

  // General API calls
  general: { windowMs: 60000, maxRequests: 60 }, // 60 per minute
};
