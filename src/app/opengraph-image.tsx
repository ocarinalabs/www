import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Korrect - Building AI that helps humanity flourish";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
        }}
      >
        {/* Korrect Logo Text */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            background: "linear-gradient(to bottom right, #000000, #434343)",
            backgroundClip: "text",
            color: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          Korrect
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 300,
            textAlign: "center",
            maxWidth: "80%",
            lineHeight: 1.2,
          }}
        >
          Building AI that helps humanity flourish, not merely survive
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 24,
            color: "#666",
            textAlign: "center",
            maxWidth: "70%",
            lineHeight: 1.4,
          }}
        >
          AI alignment and safety research. Creating Robin, Labs, and Founders
          to ensure AI enhances human potential.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
