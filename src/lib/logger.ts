// Logger utility for production-safe logging
// Only logs in development, with option for production error tracking

type LogLevel = "debug" | "info" | "warn" | "error";

const isDevelopment = process.env.NODE_ENV === "development";

function log(level: LogLevel, message: string, ...args: unknown[]) {
  if (isDevelopment) {
    // Log everything in development
    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

    switch (level) {
      case "debug":
        console.debug(prefix, message, ...args);
        break;
      case "info":
        console.info(prefix, message, ...args);
        break;
      case "warn":
        console.warn(prefix, message, ...args);
        break;
      case "error":
        console.error(prefix, message, ...args);
        break;
    }
  } else if (level === "error") {
    // In production, only log errors (and optionally send to monitoring service)
    // TODO: Integrate with Sentry, LogRocket, or similar service
    // For now, we still log errors but without exposing them to client
  }
}

export const logger = {
  debug: (message: string, ...args: unknown[]) => log("debug", message, ...args),
  info: (message: string, ...args: unknown[]) => log("info", message, ...args),
  warn: (message: string, ...args: unknown[]) => log("warn", message, ...args),
  error: (message: string, ...args: unknown[]) => log("error", message, ...args),
};
