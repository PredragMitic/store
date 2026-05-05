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
        background: "#fff",
        borderRadius: 16,
        border: `1px solid ${hovered ? colors.accent3 : colors.border}`,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.18s, box-shadow 0.18s, border-color 0.18s",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? "0 6px 24px rgba(200,140,100,0.13)" : "none",
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
              borderRadius: 999,
              textTransform: "uppercase",
              background: colors.mint3,
              color: "#1a7a60",
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
              borderRadius: 999,
              textTransform: "uppercase",
              background: colors.rose3,
              color: "#a03060",
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
            borderRadius: 999,
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
      <div style={{ padding: 13 }}>
        <div
          style={{
            fontSize: 10,
            color: colors.text3,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 3,
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
              fontSize: 11,
              fontWeight: 500,
              padding: "6px 12px",
              borderRadius: 999,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.15s",
              background: isAdded ? colors.mint3 : "#fff",
              color: isAdded ? "#1a7a60" : colors.text2,
              border: `1px solid ${isAdded ? colors.mint2 : colors.border2}`,
            }}
          >
            {isAdded ? locale.product.addedButton : locale.product.addButton}
          </button>
        </div>
      </div>
    </div>
  );
}
