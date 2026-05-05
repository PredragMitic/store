import { useState } from "react";
import { colors } from "../data";

// ── Hero Section ───────────────────────────────────────────────────────────
function ContactHero({ title, subtitle }) {
  return (
    <div
      style={{
        background: `linear-gradient(120deg, ${colors.mint3} 0%, ${colors.lavender3} 50%, ${colors.bg2} 100%)`,
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
        {title}
      </h1>
      <p
        style={{
          fontSize: 15,
          color: colors.text2,
          lineHeight: 1.7,
          maxWidth: 480,
          margin: "0 auto",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

// ── Info Cards ───────────────────────────────────────────────────────────
function ContactInfo({ info }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 16,
        marginBottom: "2.5rem",
      }}
    >
      {info.map((item, i) => (
        <div
          key={i}
          style={{
            textAlign: "center",
            padding: "1.25rem 1rem",
            background: "#fff",
            borderRadius: 12,
            border: `1px solid ${colors.border}`,
          }}
        >
          <div style={{ fontSize: 24, marginBottom: 8 }}>{item.emoji}</div>
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: colors.text3,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              marginBottom: 4,
            }}
          >
            {item.label}
          </div>
          <div style={{ fontSize: 13, color: colors.text2, lineHeight: 1.5 }}>
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Form ───────────────────────────────────────────────────────────────────
function ContactForm({ locale, onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const inputStyle = {
    width: "100%",
    padding: "10px 14px",
    fontSize: 14,
    fontFamily: "inherit",
    border: `1px solid ${colors.border2}`,
    borderRadius: 8,
    outline: "none",
    background: colors.bg2,
    color: colors.text,
    boxSizing: "border-box",
  };

  const labelStyle = {
    display: "block",
    fontSize: 12,
    fontWeight: 500,
    color: colors.text2,
    marginBottom: 6,
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>{locale.formName}</label>
        <input
          type="text"
          value={form.name}
          onChange={handleChange("name")}
          required
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: 16 }}>
        <label style={labelStyle}>{locale.formEmail}</label>
        <input
          type="email"
          value={form.email}
          onChange={handleChange("email")}
          required
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: 20 }}>
        <label style={labelStyle}>{locale.formMessage}</label>
        <textarea
          value={form.message}
          onChange={handleChange("message")}
          required
          rows={5}
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>
      <button
        type="submit"
        style={{
          width: "100%",
          fontSize: 14,
          fontWeight: 500,
          padding: "12px 24px",
          borderRadius: 8,
          cursor: "pointer",
          fontFamily: "inherit",
          background: colors.accent,
          color: "#fff",
          border: "none",
        }}
      >
        {locale.submitButton}
      </button>
    </form>
  );
}

// ── Success State ──────────────────────────────────────────────────────────
function ContactSuccess({ title, text, buttonText, onBack }) {
  return (
    <div
      style={{
        maxWidth: 500,
        margin: "0 auto",
        padding: "4rem 2rem",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 48, marginBottom: 16 }}>✉️</div>
      <h1
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 32,
          fontWeight: 500,
          marginBottom: 12,
          color: colors.text,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontSize: 14,
          color: colors.text2,
          lineHeight: 1.7,
          marginBottom: 24,
        }}
      >
        {text}
      </p>
      <button
        onClick={onBack}
        style={{
          fontSize: 13,
          fontWeight: 500,
          padding: "10px 24px",
          borderRadius: 999,
          cursor: "pointer",
          fontFamily: "inherit",
          background: colors.accent,
          color: "#fff",
          border: "none",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

// ── Contact Page ───────────────────────────────────────────────────────────
export default function ContactPage({ onNavigate, locale }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (form) => {
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  const pageStyle = {
    fontFamily: "'DM Sans', sans-serif",
    background: colors.bg,
    color: colors.text,
    minHeight: "100vh",
    fontSize: 14,
  };

  if (submitted) {
    return (
      <div style={pageStyle}>
        <ContactSuccess
          title={locale.contact.successTitle}
          text={locale.contact.successText}
          buttonText={locale.contact.backToShop}
          onBack={() => onNavigate("store")}
        />
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <ContactHero
        title={locale.contact.title}
        subtitle={locale.contact.subtitle}
      />
      <div
        style={{
          maxWidth: 600,
          margin: "0 auto",
          padding: "3rem 2rem",
        }}
      >
        <ContactInfo info={locale.contact.info} />
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            padding: "2rem",
            border: `1px solid ${colors.border}`,
          }}
        >
          <ContactForm locale={locale.contact} onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}
