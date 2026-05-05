import { colors } from "../data";

// ── About Page ───────────────────────────────────────────────────────────────
export default function AboutPage({ onNavigate, locale }) {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        fontSize: 14,
      }}
    >
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(120deg, ${colors.lavender3} 0%, ${colors.mint3} 50%, ${colors.bg2} 100%)`,
          borderBottom: `1px solid ${colors.border}`,
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 48,
            fontWeight: 500,
            lineHeight: 1.15,
            color: colors.text,
            marginBottom: 16,
          }}
        >
          {locale.about.title}
        </h1>
        <p
          style={{
            fontSize: 15,
            color: colors.text2,
            lineHeight: 1.7,
            maxWidth: 560,
            margin: "0 auto",
          }}
        >
          {locale.about.subtitle}
        </p>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "3rem 2rem" }}>
        {/* Story Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 500,
              marginBottom: 12,
              color: colors.text,
            }}
          >
            {locale.about.storyTitle}
          </h2>
          <p
            style={{
              fontSize: 14,
              color: colors.text2,
              lineHeight: 1.8,
            }}
          >
            {locale.about.storyText}
          </p>
        </section>

        {/* Values Section */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 28,
              fontWeight: 500,
              marginBottom: 16,
              color: colors.text,
            }}
          >
            {locale.about.valuesTitle}
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: 20,
            }}
          >
            {locale.about.values.map((value, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  padding: 20,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>
                  {value.emoji}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 18,
                    fontWeight: 500,
                    marginBottom: 6,
                    color: colors.text,
                  }}
                >
                  {value.title}
                </div>
                <div
                  style={{
                    fontSize: 13,
                    color: colors.text2,
                    lineHeight: 1.6,
                  }}
                >
                  {value.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section
          style={{
            background: colors.mint3,
            borderRadius: 16,
            padding: "2rem",
            textAlign: "center",
            border: `1px solid ${colors.mint2}`,
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 24,
              fontWeight: 500,
              marginBottom: 8,
              color: "#1a6a55",
            }}
          >
            {locale.about.contactTitle}
          </h2>
          <p
            style={{
              fontSize: 14,
              color: "#2a7a68",
              marginBottom: 16,
            }}
          >
            {locale.about.contactText}
          </p>
          <button
            onClick={() => onNavigate("contact")}
            style={{
              fontSize: 13,
              fontWeight: 500,
              padding: "10px 24px",
              borderRadius: 999,
              cursor: "pointer",
              fontFamily: "inherit",
              background: "#1a6a55",
              color: "#fff",
              border: "none",
            }}
          >
            {locale.about.contactButton}
          </button>
        </section>
      </div>
    </div>
  );
}
