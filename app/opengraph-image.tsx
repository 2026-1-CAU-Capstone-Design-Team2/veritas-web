import { ImageResponse } from "next/og";
import { MARK_DATA_URI } from "@/lib/logo-mark";

export const alt =
  "VERITAS — Local-first AI research & writing assistant";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #081A2D 0%, #0B2239 55%, #102A45 100%)",
          padding: "84px",
          color: "#EAF2FB",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={MARK_DATA_URI} width={128} height={128} alt="" />
          <div
            style={{
              display: "flex",
              fontSize: "104px",
              fontStyle: "italic",
              fontWeight: 800,
              letterSpacing: "-3px",
            }}
          >
            VERITAS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            height: "6px",
            width: "320px",
            marginTop: "44px",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #2563EB 0%, #38BDF8 100%)",
          }}
        />

        <div
          style={{
            display: "flex",
            marginTop: "34px",
            fontSize: "30px",
            letterSpacing: "6px",
            color: "#38BDF8",
          }}
        >
          LOCAL-FIRST AI RESEARCH & WRITING ASSISTANT
        </div>

        <div
          style={{
            display: "flex",
            marginTop: "22px",
            fontSize: "34px",
            color: "#9FB3C8",
            maxWidth: "920px",
          }}
        >
          Research, verify, and write — entirely on your own PC.
        </div>
      </div>
    ),
    { ...size },
  );
}
