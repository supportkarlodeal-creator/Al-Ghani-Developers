import { NextRequest, NextResponse } from "next/server";

import {
  decryptFlowRequest,
  encryptFlowResponse,
} from "@/lib/whatsapp-flow-crypto";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();

    if (
      !payload ||
      typeof payload.encrypted_aes_key !== "string" ||
      typeof payload.encrypted_flow_data !== "string" ||
      typeof payload.initial_vector !== "string"
    ) {
      return NextResponse.json(
        {
          error: "Invalid WhatsApp Flow request",
          required: [
            "encrypted_aes_key",
            "encrypted_flow_data",
            "initial_vector",
          ],
        },
        { status: 400 },
      );
    }

    const { body, aesKey, initialVector } =
      decryptFlowRequest(payload);

    console.log("WhatsApp Flow request:", body);

    // ---------------------------------------------------------
    // WhatsApp Flow Health Check
    // ---------------------------------------------------------

    if (body.action === "ping") {
      const response = {
        data: {
          status: "active",
        },
      };

      const encryptedResponse = encryptFlowResponse(
        response,
        aesKey,
        initialVector,
      );

      return new NextResponse(encryptedResponse, {
        status: 200,
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    // ---------------------------------------------------------
    // Temporary response for other Flow requests
    // ---------------------------------------------------------

    const response = {
      version: "3.0",
      screen: "WELCOME_SCREEN",
      data: {},
    };

    const encryptedResponse = encryptFlowResponse(
      response,
      aesKey,
      initialVector,
    );

    return new NextResponse(encryptedResponse, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error(
      "WhatsApp Flow endpoint error:",
      error,
    );

    return NextResponse.json(
      {
        error: "Unable to process WhatsApp Flow request",
      },
      { status: 500 },
    );
  }
}