import { useState, useEffect } from "react";
import { colors, catCardBg } from "../data";
import { fetchProduct } from "../api";
import { Stars } from "../components/Stars";

const REVIEWS = [
  {
    author: "Mila",
    rating: 5,
    text: "Fantastic quality and fast shipping. I keep coming back for more.",
  },
  {
    author: "Nina",
    rating: 4.5,
    text: "Beautiful item, exactly as described. The packaging was lovely too.",
  },
];

export default function ProductPage({
  productId,
  cart,
  wishlist,
  onAddToCart,
  onAddToWishlist,
  onRemoveFromWishlist,
  onNavigate,
  locale,
}) {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await fetchProduct(productId);
        setProduct(data.product || data);
        setError(null);
      } catch (err) {
        console.error("Failed to load product:", err);
        setError("Failed to load product");
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      loadProduct();
    }
  }, [productId]);

  if (loading) {
    return (
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          minHeight: "100vh",
          background: colors.bg,
          color: colors.text,
          padding: "2rem",
        }}
      >
        <button
          onClick={() => onNavigate("store")}
          style={{
            border: "none",
            background: "transparent",
            color: colors.accent,
            cursor: "pointer",
            fontSize: 13,
            marginBottom: 18,
          }}
        >
          ← {locale.productPage.backToShop}
        </button>
        <div
          style={{ padding: "4rem", textAlign: "center", color: colors.text3 }}
        >
          Loading product...
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          minHeight: "100vh",
          background: colors.bg,
          color: colors.text,
          padding: "2rem",
        }}
      >
        <button
          onClick={() => onNavigate("store")}
          style={{
            border: "none",
            background: "transparent",
            color: colors.accent,
            cursor: "pointer",
            fontSize: 13,
            marginBottom: 18,
          }}
        >
          ← {locale.productPage.backToShop}
        </button>
        <div
          style={{
            padding: "2rem",
            borderRadius: 20,
            background: colors.bg2,
            color: colors.text3,
            maxWidth: 620,
          }}
        >
          {locale.productPage.notFound}
        </div>
      </div>
    );
  }

  const isAdded = cart.has(product.id);

  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        background: colors.bg,
        color: colors.text,
        padding: "2rem",
      }}
    >
      <button
        onClick={() => onNavigate("store")}
        style={{
          border: "none",
          background: "transparent",
          color: colors.accent,
          cursor: "pointer",
          fontSize: 13,
        }}
      >
        ← {locale.productPage.backToShop}
      </button>

      <div
        style={{
          display: "grid",
          gap: "2rem",
          gridTemplateColumns: "1fr 1.3fr",
          marginTop: "1.5rem",
        }}
      >
        <div
          style={{
            background: catCardBg[product.cat] || colors.bg3,
            borderRadius: 20,
            minHeight: 360,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 80,
          }}
        >
          {product.emoji}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 11,
              color: colors.text3,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            {locale.search.categories[product.cat]}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: 42,
                margin: 0,
                lineHeight: 1.05,
              }}
            >
              {product.name}
            </h1>
            <span style={{ fontSize: 13, color: colors.text3 }}>
              {product.badge === "new"
                ? locale.product.badge.new
                : product.badge === "sale"
                  ? locale.product.badge.sale
                  : null}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <Stars rating={product.rating} size={12} />
            <span style={{ fontSize: 12, color: colors.text3 }}>
              {product.rating}
            </span>
            <span
              style={{
                fontSize: 12,
                color: product.inStock ? "#1a7a60" : colors.rose2,
              }}
            >
              {product.inStock
                ? locale.productPage.stockIn
                : locale.productPage.stockOut}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <div style={{ fontSize: 32, fontWeight: 700, color: colors.text }}>
              ${product.price}
            </div>
            {product.oldPrice && (
              <div
                style={{
                  fontSize: 12,
                  color: colors.text3,
                  textDecoration: "line-through",
                }}
              >
                ${product.oldPrice}
              </div>
            )}
          </div>
          <p
            style={{
              fontSize: 14,
              lineHeight: 1.8,
              color: colors.text2,
              maxWidth: 620,
            }}
          >
            {product.description}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                border: `1px solid ${colors.border2}`,
                borderRadius: 999,
                padding: "6px 10px",
              }}
            >
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                style={{
                  border: "none",
                  background: "transparent",
                  color: colors.text2,
                  cursor: "pointer",
                  fontSize: 16,
                  width: 26,
                  height: 26,
                }}
              >
                −
              </button>
              <span style={{ minWidth: 24, textAlign: "center", fontSize: 14 }}>
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                style={{
                  border: "none",
                  background: "transparent",
                  color: colors.text2,
                  cursor: "pointer",
                  fontSize: 16,
                  width: 26,
                  height: 26,
                }}
              >
                +
              </button>
            </div>
            <button
              onClick={() => onAddToCart(product.id)}
              style={{
                border: "none",
                background: isAdded ? colors.mint3 : colors.accent,
                color: isAdded ? "#1a7a60" : "#fff",
                padding: "11px 22px",
                borderRadius: 999,
                cursor: "pointer",
                fontWeight: 600,
                fontSize: 13,
              }}
            >
              {isAdded ? locale.product.addedButton : locale.product.addButton}
            </button>
            <button
              onClick={() => {
                if (wishlist.has(productId)) {
                  onRemoveFromWishlist(productId);
                } else {
                  onAddToWishlist(productId);
                }
              }}
              style={{
                border: `1px solid ${colors.border2}`,
                background: wishlist.has(productId) ? colors.mint3 : "#fff",
                color: wishlist.has(productId) ? "#1a7a60" : colors.text2,
                padding: "11px 18px",
                borderRadius: 999,
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              {wishlist.has(productId) ? "♥ Saved" : locale.productPage.wishlist}
            </button>
          </div>

          <div
            style={{
              fontSize: 12,
              color: colors.text3,
              lineHeight: 1.7,
              maxWidth: 560,
            }}
          >
            {locale.productPage.delivery(product.deliveryDays)}
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 28,
              flexWrap: "wrap",
            }}
          >
            {Object.entries(locale.productPage.tabs).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                style={{
                  border: "none",
                  background: activeTab === key ? colors.bg2 : "transparent",
                  color: activeTab === key ? colors.text : colors.text3,
                  padding: "10px 16px",
                  borderRadius: 999,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          <div
            style={{
              background: colors.bg2,
              border: `1px solid ${colors.border}`,
              borderRadius: 20,
              padding: "1.5rem",
              color: colors.text2,
            }}
          >
            {activeTab === "description" && <p>{product.description}</p>}
            {activeTab === "details" && (
              <div style={{ display: "grid", gap: 12 }}>
                {Object.entries(product.details || {}).map(([label, value]) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 16,
                    }}
                  >
                    <span style={{ color: colors.text3 }}>{label}</span>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            )}
            {activeTab === "reviews" && (
              <div style={{ display: "grid", gap: 16 }}>
                {REVIEWS.map((review) => (
                  <div
                    key={review.author}
                    style={{
                      background: "#fff",
                      borderRadius: 20,
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 14,
                        marginBottom: 8,
                      }}
                    >
                      <strong>{review.author}</strong>
                      <Stars rating={review.rating} size={12} />
                    </div>
                    <p style={{ margin: 0, fontSize: 13, color: colors.text3 }}>
                      {review.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 70,
            marginBottom: 16,
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 600 }}>
            {locale.productPage.moreFrom(locale.search.categories[product.cat])}
          </div>
          <button
            onClick={() => onNavigate("store")}
            style={{
              border: "none",
              background: "transparent",
              color: colors.accent,
              cursor: "pointer",
              fontSize: 12,
            }}
          >
            {locale.productPage.backToShop}
          </button>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 14,
          }}
        ></div>
      </div>
    </div>
  );
}
