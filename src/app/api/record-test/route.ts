import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest, unauthorizedResponse } from "@/lib/auth-middleware";
import { incrementTestCount } from "@/lib/limits-server";

export async function POST(request: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await authenticateRequest(request);

    if (!authResult.authenticated || !authResult.user) {
      return unauthorizedResponse("Authentication required");
    }

    const userEmail = authResult.user.email;

    if (!userEmail) {
      return NextResponse.json(
        { error: "User email not found" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const testType = body.testType;

    // Validate test type
    const validTestTypes = ["lr", "rc", "full"];
    if (!validTestTypes.includes(testType)) {
      return NextResponse.json(
        { error: "Invalid test type. Must be 'lr', 'rc', or 'full'" },
        { status: 400 }
      );
    }

    // Record the completed test
    const success = await incrementTestCount(userEmail, testType);

    if (success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: "Failed to record test completion" },
        { status: 500 }
      );
    }
  } catch {
    return NextResponse.json(
      { error: "Failed to record test" },
      { status: 500 }
    );
  }
}
