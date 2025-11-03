import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";
import { PRODUCT_NAME, PRICE_PLN } from "@/lib/constants";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || PRODUCT_NAME;
    const description = searchParams.get("description") || "Praktyczny poradnik";

    return new ImageResponse(
      (
        <div
          style={{
            background: "linear-gradient(135deg, #0B0B0B 0%, #1F2937 100%)",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-50%",
              width: "600px",
              height: "600px",
              borderRadius: "50%",
              background: "rgba(242, 209, 107, 0.1)",
              filter: "blur(100px)",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "8px",
              background: "linear-gradient(90deg, #F2D16B 0%, #B8860B 100%)",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 10,
              textAlign: "center",
              color: "white",
              maxWidth: "800px",
            }}
          >
            <div
              style={{
                fontSize: "80px",
                marginBottom: "20px",
              }}
            >
              💰
            </div>

            <h1
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                margin: "0 0 20px 0",
                lineHeight: "1.2",
                background: "linear-gradient(135deg, #F2D16B, #FFFFFF)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h1>

            <p
              style={{
                fontSize: "32px",
                color: "#D1D5DB",
                margin: "0 0 30px 0",
                lineHeight: "1.4",
              }}
            >
              {description}
            </p>

            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #F2D16B 0%, #B8860B 100%)",
                color: "#000",
                padding: "12px 24px",
                borderRadius: "8px",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {PRICE_PLN.toFixed(2).replace(".", ",")} zł
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              bottom: "30px",
              color: "#9CA3AF",
              fontSize: "16px",
            }}
          >
            zlotoodzera.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          "Content-Type": "image/png",
          "Cache-Control": "public, max-age=3600",
        },
      },
    );
  } catch (error) {
    console.error("[OG Image] Error:", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}

