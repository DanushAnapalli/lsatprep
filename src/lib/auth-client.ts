// Client-side authentication helpers
// Used to get ID tokens and make authenticated API calls

import { auth } from "./firebase";

// Get current user's Firebase ID token for API calls
export async function getAuthToken(): Promise<string | null> {
  const user = auth.currentUser;
  if (!user) return null;

  try {
    // Force refresh if token is expired
    return await user.getIdToken(true);
  } catch (error) {
    return null;
  }
}

// Create authenticated fetch wrapper that adds Authorization header
export async function authenticatedFetch(
  url: string,
  options: RequestInit = {}
): Promise<Response> {
  const token = await getAuthToken();

  const headers = new Headers(options.headers);
  headers.set("Content-Type", "application/json");

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  return fetch(url, {
    ...options,
    headers,
  });
}
