import { useState, useEffect } from "react";
import { colors } from "../data";
import { fetchProducts } from "../api";

// ── Cart Item ──────────────────────────────────────────────────────────────
function CartItem({ product, onRemove, locale }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 16,
        padding: 16,
        background: "#fff",
        borderRadius: 12,
        border: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: 8,
          background: colors.bg3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 32,
          flexShrink: 0,
        }}
      >
        {product.emoji}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 16,
            fontWeight: 500,
            color: colors.text,
            marginBottom: 4,
          }}
        >
          {product.name}
        </div>
        <div style={{ fontSize: 12, color: colors.text3, marginBottom: 8 }}>
          {locale.search.categories[product.cat]}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontSize: 14, fontWeight: 500, color: colors.text }}>
            ${product.price}
          </span>
          <button
            onClick={onRemove}
            style={{
              fontSize: 12,
              color: colors.rose,
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px 8px",
            }}
          >
            {locale.cart.remove}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Cart Summary ──────────────────────────────────────────────────────────
function CartSummary({ items, locale }) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const shipping = subtotal >= 75 ? 0 : 8;
  const total = subtotal + shipping;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 12,
        border: `1px solid ${colors.border}`,
        padding: 20,
      }}
    >
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 18,
          fontWeight: 500,
          marginBottom: 16,
          color: colors.text,
        }}
      >
        {locale.cart.summary}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
          }}
        >
          <span style={{ color: colors.text2 }}>{locale.cart.subtotal}</span>
          <span style={{ color: colors.text }}>${subtotal}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
          }}
        >
          <span style={{ color: colors.text2 }}>{locale.cart.shipping}</span>
          <span style={{ color: shipping === 0 ? colors.mint : colors.text }}>
            {shipping === 0 ? locale.cart.free : `$${shipping}`}
          </span>
        </div>
        {shipping > 0 && (
          <div style={{ fontSize: 11, color: colors.text3 }}>
            {locale.cart.freeShippingNote}
          </div>
        )}
        <div
          style={{
            borderTop: `1px solid ${colors.border}`,
            paddingTop: 12,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ fontWeight: 500, color: colors.text }}>
            {locale.cart.total}
          </span>
          <span style={{ fontSize: 18, fontWeight: 500, color: colors.text }}>
            ${total}
          </span>
        </div>
      </div>
      <button
        style={{
          width: "100%",
          marginTop: 16,
          padding: "12px 24px",
          fontSize: 13,
          fontWeight: 500,
          background: colors.accent,
          color: "#fff",
          border: "none",
          borderRadius: 8,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        {locale.cart.checkout}
      </button>
    </div>
  );
}

// ── Empty Cart ─────────────────────────────────────────────────────────────
function EmptyCart({ onContinue, locale }) {
  return (
    <div style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>🛒</div>
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 24,
          fontWeight: 500,
          marginBottom: 8,
          color: colors.text,
        }}
      >
        {locale.cart.empty}
      </h2>
      <p style={{ fontSize: 14, color: colors.text2, marginBottom: 24 }}>
        {locale.cart.emptyText}
      </p>
      <button
        onClick={onContinue}
        style={{
          padding: "10px 24px",
          fontSize: 13,
          fontWeight: 500,
          background: colors.accent,
          color: "#fff",
          border: "none",
          borderRadius: 999,
          cursor: "pointer",
          fontFamily: "inherit",
        }}
      >
        {locale.cart.continueShopping}
      </button>
    </div>
  );
}

// ── Cart Page ─────────────────────────────────────────────────────────────
export default function CartPage({
  cart,
  onRemoveFromCart,
  onNavigate,
  locale,
}) {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data.products || []);
      } catch (err) {
        console.error("Failed to load products:", err);
      } finally {
        // setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const cartItems = products.filter((p) => cart.has(p.id));

  const pageStyle = {
    fontFamily: "'DM Sans', sans-serif",
    background: colors.bg,
    color: colors.text,
    minHeight: "100vh",
    fontSize: 14,
  };

  return (
    <div style={pageStyle}>
      {/* Hero */}
      <div
        style={{
          background: `linear-gradient(120deg, ${colors.mint3} 0%, ${colors.lavender3} 50%, ${colors.bg2} 100%)`,
          borderBottom: `1px solid ${colors.border}`,
          padding: "3rem 2rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 40,
            fontWeight: 500,
            lineHeight: 1.15,
            color: colors.text,
            marginBottom: 8,
          }}
        >
          {locale.cart.title}
        </h1>
        <p style={{ fontSize: 14, color: colors.text2 }}>
          {locale.cart.itemCount(cart.size)}
        </p>
      </div>

      {/* Content */}
      {cart.size === 0 ? (
        <EmptyCart onContinue={() => onNavigate("store")} locale={locale} />
      ) : (
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            padding: "2rem",
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: 24,
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {cartItems.map((product) => (
              <CartItem
                key={product.id}
                product={product}
                onRemove={() => onRemoveFromCart(product.id)}
                locale={locale}
              />
            ))}
          </div>
          <div style={{ position: "sticky", top: 80 }}>
            <CartSummary items={cartItems} locale={locale} />
          </div>
        </div>
      )}
    </div>
  );
}
