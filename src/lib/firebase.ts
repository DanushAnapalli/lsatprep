import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  sendEmailVerification,
  User,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if it hasn't been initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Auth functions
export async function signInWithEmail(email: string, password: string) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signUpWithEmail(email: string, password: string) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  // Send verification email on signup
  if (result.user) {
    await sendEmailVerification(result.user);
  }
  return result;
}

export async function signInWithGoogle() {
  return signInWithPopup(auth, googleProvider);
}

export async function logOut() {
  return signOut(auth);
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

// Password reset
export async function resetPassword(email: string) {
  return sendPasswordResetEmail(auth, email);
}

// Resend email verification
export async function resendVerificationEmail(user: User) {
  return sendEmailVerification(user);
}

// ============================================
// FIRESTORE USER PROGRESS SYNC
// ============================================

export interface FirestoreUserProgress {
  completedTests: string; // JSON stringified
  wrongAnswers: string; // JSON stringified
  seenQuestionIds: string[]; // Array of strings
  improvementTestsTaken: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  averageScore: number;
  highestScore: number;
  lastActiveAt: Timestamp;
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

// Save user progress to Firestore
export async function saveProgressToFirestore(
  userId: string,
  progress: {
    completedTests: unknown[];
    wrongAnswers: unknown[];
    seenQuestionIds: string[];
    improvementTestsTaken: number;
    totalQuestionsAnswered: number;
    totalCorrect: number;
    averageScore: number;
    highestScore: number;
    lastActiveAt: Date;
    createdAt: Date;
  }
): Promise<void> {
  if (!userId) return;

  try {
    const userProgressRef = doc(db, "userProgress", userId);
    const existingDoc = await getDoc(userProgressRef);

    const data = {
      completedTests: JSON.stringify(progress.completedTests),
      wrongAnswers: JSON.stringify(progress.wrongAnswers),
      seenQuestionIds: progress.seenQuestionIds,
      improvementTestsTaken: progress.improvementTestsTaken,
      totalQuestionsAnswered: progress.totalQuestionsAnswered,
      totalCorrect: progress.totalCorrect,
      averageScore: progress.averageScore,
      highestScore: progress.highestScore,
      lastActiveAt: Timestamp.fromDate(progress.lastActiveAt),
      updatedAt: serverTimestamp(),
    };

    if (existingDoc.exists()) {
      await updateDoc(userProgressRef, data);
    } else {
      await setDoc(userProgressRef, {
        ...data,
        createdAt: serverTimestamp(),
      });
    }
  } catch (error) {
    // Silently fail - localStorage is primary, Firestore is backup
  }
}

// Load user progress from Firestore
export async function loadProgressFromFirestore(
  userId: string
): Promise<{
  completedTests: unknown[];
  wrongAnswers: unknown[];
  seenQuestionIds: string[];
  improvementTestsTaken: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  averageScore: number;
  highestScore: number;
  lastActiveAt: Date;
  createdAt: Date;
} | null> {
  if (!userId) return null;

  try {
    const userProgressRef = doc(db, "userProgress", userId);
    const docSnap = await getDoc(userProgressRef);

    if (!docSnap.exists()) {
      return null;
    }

    const data = docSnap.data() as FirestoreUserProgress;

    return {
      completedTests: JSON.parse(data.completedTests || "[]"),
      wrongAnswers: JSON.parse(data.wrongAnswers || "[]"),
      seenQuestionIds: data.seenQuestionIds || [],
      improvementTestsTaken: data.improvementTestsTaken || 0,
      totalQuestionsAnswered: data.totalQuestionsAnswered || 0,
      totalCorrect: data.totalCorrect || 0,
      averageScore: data.averageScore || 0,
      highestScore: data.highestScore || 0,
      lastActiveAt: data.lastActiveAt?.toDate() || new Date(),
      createdAt: data.createdAt?.toDate() || new Date(),
    };
  } catch (error) {
    return null;
  }
}

export { auth, db };
export type { User };
