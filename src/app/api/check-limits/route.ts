import { NextRequest, NextResponse } from "next/server";
import { authenticateRequest, unauthorizedResponse } from "@/lib/auth-middleware";
import { checkUserLimits } from "@/lib/limits-server";

export async function POST(request: NextRequest) {
  try {
    // Authenticate the request
    const authResult = await authenticateRequest(request);

    if (!authResult.authenticated || !authResult.user) {
      return unauthorizedResponse("Authentication required");
    }

    const body = await request.json();
    const testType = body.testType || "full";

    // Validate test type
    const validTestTypes = ["lr-only", "rc-only", "full", "improvement", "targeted", "custom"];
    if (!validTestTypes.includes(testType)) {
      return NextResponse.json(
        { error: "Invalid test type" },
        { status: 400 }
      );
    }

    // Check user limits
    const result = await checkUserLimits(authResult.user.email, testType);

    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: "Failed to check limits" },
      { status: 500 }
    );
  }
}
