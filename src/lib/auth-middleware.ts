// Authentication middleware for API routes
// Verifies Firebase ID tokens from Authorization header

import { NextRequest, NextResponse } from "next/server";
import { verifyIdToken } from "./firebase-admin";

export interface AuthenticatedUser {
  uid: string;
  email: string | null;
}

export interface AuthResult {
  authenticated: boolean;
  user: AuthenticatedUser | null;
  error?: string;
}

// Extract and verify the Firebase ID token from request
export async function authenticateRequest(
  request: NextRequest
): Promise<AuthResult> {
  // Get token from Authorization header (Bearer token)
  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return {
      authenticated: false,
      user: null,
      error: "Missing or invalid Authorization header",
    };
  }

  const idToken = authHeader.substring(7); // Remove "Bearer "

  if (!idToken) {
    return {
      authenticated: false,
      user: null,
      error: "Empty token",
    };
  }

  try {
    const result = await verifyIdToken(idToken);

    if (!result.valid || !result.uid) {
      return {
        authenticated: false,
        user: null,
        error: result.error || "Invalid token",
      };
    }

    return {
      authenticated: true,
      user: {
        uid: result.uid,
        email: result.email,
      },
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return {
      authenticated: false,
      user: null,
      error: `Token verification failed: ${errorMessage}`,
    };
  }
}

// Helper to create unauthorized response
export function unauthorizedResponse(message = "Unauthorized") {
  return NextResponse.json({ error: message }, { status: 401 });
}

// Helper to create forbidden response
export function forbiddenResponse(message = "Forbidden") {
  return NextResponse.json({ error: message }, { status: 403 });
}
