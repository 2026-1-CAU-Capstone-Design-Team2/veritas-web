import { ImageResponse } from "next/og";
import { MARK_DATA_URI } from "@/lib/logo-mark";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0B2239 0%, #102A45 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={MARK_DATA_URI} width={116} height={116} alt="" />
      </div>
    ),
    { ...size },
  );
}
