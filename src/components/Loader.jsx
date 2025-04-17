import { Html } from "@react-three/drei";

const Loader = () => (
  <Html center>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "black",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid rgba(0, 0, 0, 0.2)",
          borderTop: "4px solid #000000",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
          marginBottom: "10px",
        }}
      />
      <p
        style={{
          fontSize: "14px",
          opacity: 0.8,
          whiteSpace: "nowrap",
          textAlign: "center",
        }}
      >
        Loading model...
      </p>

      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  </Html>
);

export default Loader;
