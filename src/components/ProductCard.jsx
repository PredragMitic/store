import { useState } from "react";
import { colors, catCardBg } from "../data";
import { Stars } from "./Stars";
import { Highlight } from "./Highlights";

export function ProductCard({
  product,
  query,
  onAdd,
  isAdded,
  onWishlist,
  isWishlisted,
  onClick,
  locale,
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#e9f0e9",
        borderRadius: 2.4,
        border: `1px solid ${hovered ? colors.accent3 : colors.border}`,
        overflow: "hidden",
        cursor: "pointer",
        transition:
          "transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered
          ? "0 18px 40px rgba(15, 56, 33, 0.2)"
          : "0 6px 20px rgba(15, 56, 33, 0.1)",
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 48,
          background: catCardBg[product.cat] || colors.bg3,
          borderBottom: `1px solid ${colors.border}`,
          position: "relative",
        }}
      >
        {product.badge === "new" && (
          <span
            style={{
              position: "absolute",
              top: 9,
              left: 9,
              fontSize: 9,
              fontWeight: 600,
              padding: "3px 9px",
              borderRadius: 99.9,
              textTransform: "uppercase",
              background: colors.mint3,
              color: "#fff",
              border: `1px solid ${colors.mint2}`,
            }}
          >
            {locale.product.badge.new}
          </span>
        )}
        {product.badge === "sale" && (
          <span
            style={{
              position: "absolute",
              top: 9,
              left: 9,
              fontSize: 9,
              fontWeight: 600,
              padding: "3px 9px",
              borderRadius: 99.9,
              textTransform: "uppercase",
              background: colors.rose,
              color: "#fff",
              border: `1px solid ${colors.rose2}`,
            }}
          >
            {locale.product.badge.sale}
          </span>
        )}
        <span>{product.emoji}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onWishlist(product.id);
          }}
          style={{
            position: "absolute",
            top: 9,
            right: 9,
            background: "rgba(255,255,255,0.9)",
            border: `1px solid ${colors.border}`,
            borderRadius: 99.9,
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: 14,
            transition: "all 0.15s",
          }}
        >
          {isWishlisted ? "♥" : "♡"}
        </button>
      </div>
      <div style={{ padding: 18 }}>
        <div
          style={{
            fontSize: 11,
            color: colors.text3,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 6,
          }}
        >
          {locale.search.categories[product.cat]}
        </div>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 17,
            fontWeight: 500,
            color: colors.text,
            marginBottom: 5,
            lineHeight: 1.3,
          }}
        >
          <Highlight text={product.name} query={query} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <Stars rating={product.rating} />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span style={{ fontSize: 15, fontWeight: 500, color: colors.text }}>
              ${product.price}
            </span>
            {product.oldPrice && (
              <span
                style={{
                  fontSize: 11,
                  color: colors.text3,
                  textDecoration: "line-through",
                  marginLeft: 5,
                }}
              >
                ${product.oldPrice}
              </span>
            )}
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product.id);
            }}
            style={{
              fontSize: 12,
              fontWeight: 600,
              padding: "9px 16px",
              borderRadius: 99.9,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.18s ease",
              background: isAdded ? colors.mint : "#f7f2ee",
              color: isAdded ? "#ffffff" : colors.text,
              border: `1px solid ${isAdded ? colors.mint : colors.border2}`,
              minWidth: 110,
            }}
          >
            {isAdded ? locale.product.addedButton : locale.product.addButton}
          </button>
        </div>
      </div>
    </div>
  );
}
