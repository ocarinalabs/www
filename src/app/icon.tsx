import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon(props: {
  params?: object;
  searchParams?: { size?: string };
}) {
  const iconSize = props.searchParams?.size
    ? parseInt(props.searchParams.size)
    : 32;
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width={iconSize * 0.6}
          height={iconSize * 0.6}
          viewBox="0 0 197 197"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.300001 197V0.799987H21.6V53.3H196.5V74.6H21.6V123.2H196.5V144.5H21.6V197H0.300001Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    {
      width: iconSize,
      height: iconSize,
    }
  );
}
