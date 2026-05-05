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
              background: "rgba(240,170,120,0.35)",
              color: colors.accent,
              borderRadius: 3,
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
