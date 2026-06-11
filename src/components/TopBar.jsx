import { useState } from "react";
import { colors } from "../data";

export function Topbar({
  cartCount,
  onLogoClick,
  onCollectionsClick,
  onAboutClick,
  onContactClick,
  onCartClick,
  locale,
  currentLang,
  onLanguageChange,
  availableLangs,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (i) => {
    setMenuOpen(false);
    if (i === 0) return onLogoClick();
    if (i === 1) return onCollectionsClick();
    if (i === 2) return onAboutClick();
    if (i === 3) return onContactClick();
  };

  return (
    <header
      style={{
        background: "#1452AE",
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: "0 18px 45px rgba(20, 82, 174, 0.2)",
        padding: "0 1rem",
        minHeight: 56,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 10,
        position: "relative",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          minWidth: 0,
          flex: "1 1 auto",
        }}
      >
        <button
          type="button"
          className="topbar-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          style={{
            border: "none",
            background: "transparent",
            color: "#fff",
            cursor: "pointer",
            fontSize: 24,
            padding: "8px",
          }}
        >
          ☰
        </button>
        <nav
          className={`topbar-nav${menuOpen ? " open" : ""}`}
          style={{
            gap: 12,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            flex: "1 1 auto",
            minWidth: 0,
          }}
        >
          {locale.nav.map((item, i) => (
            <button
              key={item}
              onClick={() => handleNavClick(i)}
              style={{
                fontSize: 12,
                fontWeight: 500,
                color: "#fff",
                cursor: "pointer",
                letterSpacing: "0.03em",
                textDecoration: "none",
                background: "transparent",
                border: "none",
                padding: 0,
                transition: "color 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = colors.accent3)
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
            >
              {item}
            </button>
          ))}
          <div
            className="topbar-lang-group"
            style={{
              display: "flex",
              gap: 6,
              alignItems: "center",
              marginLeft: 12,
            }}
          >
            {availableLangs.map((lang) => (
              <button
                key={lang}
                onClick={() => {
                  setMenuOpen(false);
                  onLanguageChange(lang);
                }}
                style={{
                  fontSize: 10,
                  fontWeight: currentLang === lang ? 700 : 500,
                  padding: "4px 8px",
                  borderRadius: 999,
                  border:
                    currentLang === lang
                      ? `1px solid ${colors.accent}`
                      : "1px solid rgba(255,255,255,0.35)",
                  background:
                    currentLang === lang ? "#fff" : "rgba(255,255,255,0.18)",
                  color: currentLang === lang ? colors.accent : "#fff",
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {lang}
              </button>
            ))}
          </div>
        </nav>
      </div>
      <div
        className="topbar-logo"
        onClick={onLogoClick}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 10,
          minWidth: 0,
        }}
      >
        <img
          src="/domio.png"
          alt="Premi Store logo"
          style={{
            height: 35,
            width: "auto",
            display: "block",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          flex: "1 1 auto",
          minWidth: 0,
          gap: 10,
        }}
      >
        <button
          onClick={onCartClick}
          aria-label={locale.topbar.cartButton}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: colors.accent,
            color: "#fff",
            border: "none",
            padding: "10px 12px",
            borderRadius: 20,
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            minWidth: 44,
            minHeight: 44,
          }}
        >
          <span style={{ fontSize: 18, lineHeight: 1, paddingRight: 6 }}>
            🛒
          </span>
          <span
            style={{
              background: "#fff",
              color: colors.accent,
              borderRadius: "50%",
              width: 20,
              height: 20,
              fontSize: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
            }}
          >
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}
