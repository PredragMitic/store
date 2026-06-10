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
  return (
    <header
      style={{
        background: "#1452AE",
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: "0 18px 45px rgba(20, 82, 174, 0.2)",
        padding: "0 2rem",
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
      }}
    >
      <div onClick={onLogoClick} style={{ cursor: "pointer" }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 23,
            fontWeight: 600,
            letterSpacing: "0.06em",
            color: colors.accent,
            lineHeight: 1.1,
          }}
        >
          PREMI
        </div>
        <div
          style={{
            fontWeight: 300,
            color: colors.text3,
            fontSize: 11,
            letterSpacing: "0.2em",
          }}
        >
          STORE
        </div>
      </div>
      <nav style={{ display: "flex", gap: 24 }}>
        {locale.nav.map((item, i) => (
          <button
            key={item}
            onClick={
              i === 0
                ? onLogoClick
                : i === 1
                  ? onCollectionsClick
                  : i === 2
                    ? onAboutClick
                    : i === 3
                      ? onContactClick
                      : undefined
            }
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: colors.text2,
              cursor: "pointer",
              letterSpacing: "0.03em",
              textDecoration: "none",
              background: "transparent",
              border: "none",
              padding: 0,
              transition: "color 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
            onMouseLeave={(e) => (e.currentTarget.style.color = colors.text2)}
          >
            {item}
          </button>
        ))}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {availableLangs.map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              style={{
                fontSize: 10,
                fontWeight: currentLang === lang ? 600 : 400,
                padding: "4px 10px",
                borderRadius: 999,
                border: `1px solid ${currentLang === lang ? colors.accent : colors.border2}`,
                background: currentLang === lang ? colors.accent : "#fff",
                color: currentLang === lang ? "#fff" : colors.text2,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {lang}
            </button>
          ))}
        </div>
        <button
          onClick={onCartClick}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
            background: colors.accent,
            color: "#fff",
            border: "none",
            padding: "7px 16px",
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          {locale.topbar.cartButton}
          <span
            style={{
              background: "#fff",
              color: colors.accent,
              borderRadius: "50%",
              width: 17,
              height: 17,
              fontSize: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
            }}
          >
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}
