import { useState } from "react";
import locales from "./locales";
import StorePage from "./pages/StorePage";
import ProductPage from "./pages/ProductPage";
import CollectionPage from "./pages/CollectionPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import { Topbar } from "./components/TopBar";

export default function App() {
  const [page, setPage] = useState("store"); // "store" | "product" | "collection" | "about" | "contact" | "cart"
  const [collectionId, setCollectionId] = useState(null);
  const [productId, setProductId] = useState(null);
  const [cart, setCart] = useState(new Set());
  const [wishlist, setWishlist] = useState(new Set());
  const [lang, setLang] = useState("sr");
  const locale = locales[lang];

  const navigate = (target, id = null) => {
    setPage(target);
    if (target === "collection") {
      setCollectionId(id);
    } else if (target === "product") {
      setProductId(id);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const addToCart = (id) => {
    setCart((prev) => new Set([...prev, id]));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  const addToWishlist = (id) => {
    setWishlist((prev) => new Set([...prev, id]));
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&family=Playfair+Display:wght@500;600;700&display=swap"
        rel="stylesheet"
      />
      <Topbar
        cartCount={cart.size}
        onLogoClick={() => navigate("store")}
        onCollectionsClick={() => navigate("collection", "new")}
        onAboutClick={() => navigate("about")}
        onContactClick={() => navigate("contact")}
        onCartClick={() => navigate("cart")}
        locale={locale}
        currentLang={lang}
        onLanguageChange={setLang}
        availableLangs={Object.keys(locales)}
      />
      {page === "store" && (
        <StorePage
          cart={cart}
          wishlist={wishlist}
          onAddToCart={addToCart}
          onAddToWishlist={addToWishlist}
          onRemoveFromWishlist={removeFromWishlist}
          onNavigate={navigate}
          locale={locale}
        />
      )}
      {page === "product" && (
        <ProductPage
          productId={productId}
          cart={cart}
          wishlist={wishlist}
          onAddToCart={addToCart}
          onAddToWishlist={addToWishlist}
          onRemoveFromWishlist={removeFromWishlist}
          onNavigate={navigate}
          locale={locale}
        />
      )}
      {page === "collection" && (
        <CollectionPage
          collectionId={collectionId}
          cart={cart}
          wishlist={wishlist}
          onAddToCart={addToCart}
          onAddToWishlist={addToWishlist}
          onRemoveFromWishlist={removeFromWishlist}
          onNavigate={navigate}
          locale={locale}
        />
      )}
      {page === "about" && <AboutPage onNavigate={navigate} locale={locale} />}
      {page === "contact" && (
        <ContactPage onNavigate={navigate} locale={locale} />
      )}
      {page === "cart" && (
        <CartPage
          cart={cart}
          onRemoveFromCart={removeFromCart}
          onNavigate={navigate}
          locale={locale}
        />
      )}
    </>
  );
}
