import { useState, useMemo, useEffect } from "react";
import { colors, catChipActive } from "../data";
import { fetchProducts } from "../api";
import { ProductCard } from "../components/ProductCard";

const CATEGORIES = ["all", "home", "kitchen", "lifestyle", "garden"];

export default function StorePage({
  cart,
  wishlist,
  onAddToCart,
  onAddToWishlist,
  onRemoveFromWishlist,
  onNavigate,
  locale,
}) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [sort, setSort] = useState("default");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts({
          category: cat !== "all" ? cat : undefined,
          search: query || undefined,
          sort: sort !== "default" ? sort : undefined,
        });
        setProducts(data.products || []);
        setError(null);
      } catch (err) {
        console.error("Failed to load products:", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(loadProducts, 300);
    return () => clearTimeout(debounce);
  }, [cat, sort]);

  // Filter by search query client-side for immediate feedback
  const filtered = useMemo(() => {
    if (!query) return products;
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        (p.category && p.category.toLowerCase().includes(q)),
    );
  }, [products, query]);

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
          background: "#fff",
          borderBottom: `1px solid ${colors.border}`,
          padding: "3.25rem 2rem 2rem",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "2rem",
          alignItems: "flex-end",
          borderRadius: "0 0 4.2px 4.2px",
          overflow: "hidden",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 40,
              fontWeight: 500,
              lineHeight: 1.15,
              color: colors.accent,
              marginBottom: 10,
            }}
          >
            {locale.hero.title}
          </h1>
          <p
            style={{
              fontSize: 13,
              color: colors.text3,
              lineHeight: 1.7,
              maxWidth: 380,
            }}
          >
            {locale.hero.description}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            alignItems: "flex-end",
          }}
        >
          {locale.hero.highlights.map((label) => (
            <span
              key={label}
              style={{
                fontSize: 11,
                padding: "7px 18px",
                borderRadius: 99.9,
                fontWeight: 600,
                background: colors.accent2,
                color: "#fff",
                border: `1px solid ${colors.accent}`,
                boxShadow: "0 10px 24px rgba(15, 56, 33, 0.16)",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Search + Filters */}
      <div
        style={{
          background: colors.bg3,
          borderBottom: `1px solid ${colors.border}`,
          padding: "1rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Search Bar */}
        <div style={{ position: "relative", width: "100%" }}>
          <span
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              color: colors.text3,
              fontSize: 13,
              pointerEvents: "none",
            }}
          >
            ⌕
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={locale.search.placeholder}
            style={{
              width: "100%",
              background: "#FFFFFF",
              border: `1px solid ${colors.border}`,
              borderRadius: 99.9,
              padding: "12px 36px 12px 42px",
              fontSize: 14,
              color: colors.text,
              fontFamily: "inherit",
              outline: "none",
              boxShadow: "0 12px 24px rgba(15, 56, 33, 0.08)",
              boxSizing: "border-box",
            }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                position: "absolute",
                right: 12,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: colors.text3,
                cursor: "pointer",
                fontSize: 16,
              }}
            >
              ×
            </button>
          )}
        </div>

        {/* Filters and Sort */}
        <div
          style={{
            display: "flex",
            gap: 8,
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 8,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {CATEGORIES.map((c) => {
              const isActive = cat === c;
              const a = catChipActive[c];
              return (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  style={{
                    fontSize: 11,
                    padding: "5px 13px",
                    borderRadius: 99.9,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontWeight: isActive ? 500 : 400,
                    transition: "all 0.15s",
                    background: isActive ? a.background : "#fff",
                    color: isActive ? a.color : colors.text2,
                    border: `1px solid ${isActive ? a.border : colors.border2}`,
                  }}
                >
                  {locale.search.categories[c]}
                </button>
              );
            })}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            style={{
              fontFamily: "inherit",
              fontSize: 11,
              padding: "7px 14px",
              borderRadius: 99.9,
              border: `1px solid ${colors.border}`,
              background: colors.bg2,
              color: colors.text2,
              cursor: "pointer",
              outline: "none",
              whiteSpace: "nowrap",
            }}
          >
            {Object.keys(locale.search.sortOptions).map((key) => (
              <option key={key} value={key}>
                {locale.search.sortOptions[key]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results note */}
      {(query || cat !== "all") && filtered.length > 0 && (
        <div
          style={{
            fontSize: 12,
            color: colors.text3,
            padding: "0.5rem 2rem 0",
          }}
        >
          {locale.search.resultCount(filtered.length)}{" "}
          {query ? locale.search.resultFor(query) : ""}{" "}
          {cat !== "all"
            ? locale.search.resultInCategory(locale.search.categories[cat])
            : ""}
        </div>
      )}

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))",
          gap: 14,
          padding: "1.5rem 2rem",
        }}
      >
        {loading ? (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "3.5rem",
              color: colors.text3,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 10 }}>⏳</div>
            Loading products...
          </div>
        ) : error ? (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "3.5rem",
              color: colors.rose,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 10 }}>⚠️</div>
            {error}
          </div>
        ) : filtered.length === 0 ? (
          <div
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              padding: "3.5rem",
              color: colors.text3,
            }}
          >
            <div style={{ fontSize: 32, marginBottom: 10 }}>🔍</div>
            {locale.search.noResults}
          </div>
        ) : (
          filtered.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              query={query}
              onAdd={onAddToCart}
              isAdded={cart.has(p.id)}
              onWishlist={(id) => {
                if (wishlist.has(id)) {
                  onRemoveFromWishlist(id);
                } else {
                  onAddToWishlist(id);
                }
              }}
              isWishlisted={wishlist.has(p.id)}
              onClick={() => onNavigate("product", p.id)}
              locale={locale}
            />
          ))
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          background: colors.bg2,
          borderTop: `1px solid ${colors.border}`,
          padding: "1.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          marginTop: "0.5rem",
          borderRadius: "24px",
        }}
      >
        <span style={{ fontSize: 12, color: colors.text3 }}>
          {locale.footer.productsSummary(filtered.length)} ·{" "}
          {locale.footer.shipping}
        </span>
        <button
          style={{
            fontSize: 12,
            fontWeight: 500,
            background: "transparent",
            border: `1px solid ${colors.border2}`,
            color: colors.text2,
            padding: "7px 16px",
            borderRadius: 999,
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          {locale.footer.loadMore}
        </button>
      </footer>
    </div>
  );
}
