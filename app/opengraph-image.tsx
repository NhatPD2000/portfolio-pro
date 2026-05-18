import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Phan Dinh Nhat — Business Analyst";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#F7F9FC",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "5px",
            background: "#4F46E5",
          }}
        />

        {/* Left teal side accent */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "5px",
            bottom: 0,
            width: "4px",
            background: "linear-gradient(to bottom, #4F46E5, transparent)",
          }}
        />

        {/* BA label */}
        <div
          style={{
            fontSize: "13px",
            color: "#E8960C",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          BUSINESS ANALYST
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: "76px",
            fontWeight: 800,
            color: "#0D1B2E",
            lineHeight: 1.0,
            marginBottom: "20px",
          }}
        >
          Phan Dinh Nhat
        </div>

        {/* Teal divider + specialization */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "32px",
          }}
        >
          <div style={{ width: "24px", height: "2px", background: "#4F46E5" }} />
          <div
            style={{
              fontSize: "15px",
              color: "#4F46E5",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              fontFamily: "Arial, sans-serif",
              fontWeight: 600,
            }}
          >
            Manufacturing Intelligence
          </div>
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "20px",
            color: "#4A5E7A",
            marginBottom: "48px",
            fontFamily: "Arial, sans-serif",
            maxWidth: "620px",
            lineHeight: 1.5,
          }}
        >
          Turning complex factory operations into clear digital systems.
          MES · MOM · ERP · BPMN · Agile
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { v: "3+", l: "Years" },
            { v: "2",  l: "Companies" },
            { v: "5+", l: "Projects" },
            { v: "3",  l: "Languages" },
          ].map((s) => (
            <div key={s.l} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span
                style={{
                  fontSize: "36px",
                  fontWeight: 800,
                  color: "#0D1B2E",
                  lineHeight: 1,
                }}
              >
                {s.v}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  color: "#8999BB",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {s.l}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "80px",
            fontSize: "14px",
            color: "#4F46E5",
            fontWeight: 600,
            fontFamily: "Arial, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          nhatphan2000.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
