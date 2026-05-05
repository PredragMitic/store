import { useState, useEffect } from "react";
import { colors, catCardBg } from "../data";
import { fetchProducts } from "../api";
import { Stars } from "../components/Stars";

// ── Collection Product Card ─────────────────────────────────────────────────
function CollectionProductCard({
  product,
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
          {product.name}
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

// ── Collection Page ─────────────────────────────────────────────────────────
export default function CollectionPage({
  collectionId,
  cart,
  wishlist,
  onAddToCart,
  onAddToWishlist,
  onRemoveFromWishlist,
  onNavigate,
  locale,
}) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const collections = {
    new: {
      name: locale.collection.newArrivals,
      emoji: "✨",
      description: "Discover the latest additions to our collection.",
      bg: colors.mint3,
    },
    sale: {
      name: locale.collection.onSale,
      emoji: "🏷️",
      description: "Limited time offers on select items.",
      bg: colors.rose3,
    },
    bestsellers: {
      name: locale.collection.bestsellers,
      emoji: "⭐",
      description: "Customer favorites that keep coming back.",
      bg: colors.butter3,
    },
  };

  const collection = collections[collectionId];

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        let filter = {};

        // Apply collection-specific filters
        if (collectionId === "new") {
          filter = { badge: "new" };
        } else if (collectionId === "sale") {
          filter = { badge: "sale" };
        } else if (collectionId === "bestsellers") {
          // For bestsellers, sort by rating and reviews
          filter = { sort: "rating" };
        }

        const data = await fetchProducts(filter);
        setProducts(data.products || []);
        setError(null);
      } catch (err) {
        console.error("Failed to load collection products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    if (collectionId) {
      loadProducts();
    }
  }, [collectionId]);

  if (!collection) {
    return (
      <div style={{ padding: "3rem 2rem", textAlign: "center" }}>
        <p>Collection not found</p>
      </div>
    );
  }

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
      {/* Collection Hero */}
      <div
        style={{
          background: `linear-gradient(120deg, ${collection.bg} 0%, ${colors.bg2} 100%)`,
          borderBottom: `1px solid ${colors.border}`,
          padding: "3rem 2rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <span style={{ fontSize: 56 }}>{collection.emoji}</span>
        <div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 36,
              fontWeight: 500,
              lineHeight: 1.15,
              color: colors.text,
              marginBottom: 8,
            }}
          >
            {collection.name}
          </h1>
          <p
            style={{
              fontSize: 13,
              color: colors.text2,
              lineHeight: 1.7,
            }}
          >
            {collection.description}
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ padding: "2rem" }}>
        {loading ? (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              color: colors.text3,
            }}
          >
            Loading...
          </div>
        ) : error ? (
          <div
            style={{ textAlign: "center", padding: "3rem", color: colors.rose }}
          >
            {error}
          </div>
        ) : products.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              color: colors.text3,
            }}
          >
            No products found in this collection.
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {products.map((product) => (
              <CollectionProductCard
                key={product.id}
                product={product}
                onAdd={onAddToCart}
                isAdded={cart.has(product.id)}
                onWishlist={(id) => {
                  if (wishlist.has(id)) {
                    onRemoveFromWishlist(id);
                  } else {
                    onAddToWishlist(id);
                  }
                }}
                isWishlisted={wishlist.has(product.id)}
                onClick={() => onNavigate("product", product.id)}
                locale={locale}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
