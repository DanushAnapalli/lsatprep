// Firebase Admin SDK for server-side operations
// This is used for verifying ID tokens and accessing Firestore from API routes

import { initializeApp, getApps, cert, App } from "firebase-admin/app";
import { getAuth, Auth } from "firebase-admin/auth";
import { getFirestore, Firestore } from "firebase-admin/firestore";

let adminApp: App;
let adminAuth: Auth;
let adminDb: Firestore;

function getFirebaseAdmin() {
  if (getApps().length === 0) {
    // Use service account credentials from environment variables
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error(
        "Missing Firebase Admin credentials. Please set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables."
      );
    }

    adminApp = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  } else {
    adminApp = getApps()[0];
  }

  if (!adminAuth) {
    adminAuth = getAuth(adminApp);
  }

  if (!adminDb) {
    adminDb = getFirestore(adminApp);
  }

  return { adminApp, adminAuth, adminDb };
}

// Get Firebase Admin Auth instance
export function getAdminAuth(): Auth {
  return getFirebaseAdmin().adminAuth;
}

// Get Firebase Admin Firestore instance
export function getAdminDb(): Firestore {
  return getFirebaseAdmin().adminDb;
}

// Verify a Firebase ID token and return the decoded token
export async function verifyIdToken(idToken: string): Promise<{
  valid: boolean;
  uid: string | null;
  email: string | null;
  error?: string;
}> {
  try {
    const auth = getAdminAuth();
    const decodedToken = await auth.verifyIdToken(idToken);
    return {
      valid: true,
      uid: decodedToken.uid,
      email: decodedToken.email || null,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return {
      valid: false,
      uid: null,
      email: null,
      error: `Token verification failed: ${errorMessage}`,
    };
  }
}
