import { colors } from "../data";

export function Highlight({ text, query }) {
  if (!query) return <>{text}</>;
  const re = new RegExp(
    `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi",
  );
  const parts = text.split(re);
  return (
    <>
      {parts.map((p, i) =>
        re.test(p) ? (
          <mark
            key={i}
            style={{
              background: "rgba(235, 205, 119, 0.3)",
              color: colors.text,
              borderRadius: 0.3,
              padding: "0 2px",
            }}
          >
            {p}
          </mark>
        ) : (
          p
        ),
      )}
    </>
  );
}
