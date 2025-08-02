import { ImageResponse } from "next/og";

// Image metadata
export const alt = "Korrect - Building AI that helps humanity flourish";
export const size = {
  width: 1200,
  height: 600, // Twitter prefers 2:1 aspect ratio
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: "black",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 25,
        }}
      >
        {/* Korrect Logo Text */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            background: "linear-gradient(to bottom right, #ffffff, #888888)",
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
            fontSize: 42,
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
            fontSize: 22,
            color: "#ccc",
            textAlign: "center",
            maxWidth: "70%",
            lineHeight: 1.4,
          }}
        >
          AI alignment research for human flourishing. Robin, Labs, Founders.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
