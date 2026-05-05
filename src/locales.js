const locales = {
  en: {
    code: "en",
    name: "English",
    nav: ["Shop", "Collections", "About", "Contact"],
    topbar: {
      brand: "PREMI",
      storeLabel: "STORE",
      cartButton: "Cart",
    },
    hero: {
      title: "Premium goods, made with care.",
      description:
        "Carefully selected physical products built to last. No fuss — just quality you can feel.",
      highlights: [
        "Free shipping over $75",
        "30-day returns",
        "Sustainably sourced",
      ],
    },
    search: {
      placeholder: "Search products…",
      categories: {
        all: "All",
        home: "Home",
        kitchen: "Kitchen",
        lifestyle: "Lifestyle",
        garden: "Garden",
      },
      sortOptions: {
        default: "Featured",
        "price-asc": "Price ↑",
        "price-desc": "Price ↓",
        rating: "Top rated",
      },
      resultCount: (count) => `${count} result${count !== 1 ? "s" : ""}`,
      resultFor: (query) => `for "${query}"`,
      resultInCategory: (category) => `in ${category}`,
      noResults: "No products found — try a different search or category.",
    },
    product: {
      categoryLabel: "Category",
      price: "Price",
      addButton: "Add",
      addedButton: "Added ✓",
      badge: {
        new: "New",
        sale: "Sale",
      },
    },
    collection: {
      newArrivals: "New Arrivals",
      onSale: "On Sale",
      bestsellers: "Bestsellers",
      notFound: "Collection not found",
      noProducts: "No products found in this collection.",
    },
    about: {
      title: "About Us",
      subtitle:
        "We believe in thoughtful design, sustainable materials, and pieces that last a lifetime.",
      storyTitle: "Our Story",
      storyText:
        "Founded in 2020, PREMI started with a simple idea: to curate a collection of everyday objects that bring joy and stand the test of time. We work directly with artisans and small manufacturers who share our commitment to quality and sustainability. Each product is chosen with care, tested for durability, and designed to become a part of your daily ritual.",
      valuesTitle: "Our Values",
      values: [
        {
          emoji: "🌿",
          title: "Sustainability",
          description:
            "We prioritize eco-friendly materials and responsible production methods.",
        },
        {
          emoji: "✋",
          title: "Craftsmanship",
          description:
            "Every item is made with attention to detail and built to last.",
        },
        {
          emoji: "🤝",
          title: "Transparency",
          description:
            "We share the story behind each product and the hands that made it.",
        },
      ],
      contactTitle: "Get in Touch",
      contactText:
        "We'd love to hear from you. Questions, feedback, or just to say hello.",
      contactButton: "Contact Us",
    },
    productPage: {
      breadcrumbShop: "Shop",
      backToShop: "Back to shop",
      stockIn: "In stock",
      stockOut: "Out of stock",
      wishlist: "♡ Save to Wishlist",
      delivery: (days) =>
        `Estimated delivery in ${days} business days. Free shipping on orders over $75.`,
      tabs: {
        description: "Description",
        details: "Details",
        reviews: "Reviews",
      },
      moreFrom: (category) => `More from ${category}`,
      notFound: "Product not found.",
    },
    footer: {
      productsSummary: (count) => `${count} product${count !== 1 ? "s" : ""}`,
      shipping: "Free shipping over $75",
      loadMore: "Load more",
    },
    contact: {
      title: "Contact Us",
      subtitle:
        "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
      info: [
        { emoji: "📧", label: "Email", value: "hello@premi.com" },
        { emoji: "📍", label: "Address", value: "123 Design St, NYC" },
        { emoji: "⏰", label: "Hours", value: "Mon-Fri 9am-6pm" },
      ],
      formName: "Your Name",
      formEmail: "Email Address",
      formMessage: "Message",
      submitButton: "Send Message",
      successTitle: "Message Sent!",
      successText:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
      backToShop: "Back to Shop",
    },
    cart: {
      title: "Shopping Cart",
      itemCount: (count) =>
        `${count} item${count !== 1 ? "s" : ""} in your cart`,
      empty: "Your cart is empty",
      emptyText: "Looks like you haven't added anything yet.",
      continueShopping: "Continue Shopping",
      remove: "Remove",
      summary: "Order Summary",
      subtotal: "Subtotal",
      shipping: "Shipping",
      free: "Free",
      freeShippingNote: "Add $75 more for free shipping",
      total: "Total",
      checkout: "Proceed to Checkout",
    },
  },
  sr: {
    code: "sr",
    name: "Srpski",
    nav: ["Prodavnica", "Kolekcije", "O nama", "Kontakt"],
    topbar: {
      brand: "PREMI",
      storeLabel: "STORE",
      cartButton: "Korpa",
    },
    hero: {
      title: "Premium proizvodi, napravljeni sa pažnjom.",
      description:
        "Pažljivo odabrani fizički proizvodi koji traju. Bez komplikacija — samo kvaliteta koju možete da osetite.",
      highlights: [
        "Besplatna isporuka preko $75",
        "Povraćaj u roku od 30 dana",
        "Održivo odabrano",
      ],
    },
    search: {
      placeholder: "Pretraži proizvode…",
      categories: {
        all: "Sve",
        home: "Dom",
        kitchen: "Kuhinja",
        lifestyle: "Životni stil",
        garden: "Bašta",
      },
      sortOptions: {
        default: "Istaknuto",
        "price-asc": "Cena ↑",
        "price-desc": "Cena ↓",
        rating: "Najbolje ocenjeni",
      },
      resultCount: (count) => `${count} rezultat${count !== 1 ? "a" : ""}`,
      resultFor: (query) => `za "${query}"`,
      resultInCategory: (category) => `u ${category}`,
      noResults:
        "Nema pronađenih proizvoda — pokušajte drugu pretragu ili kategoriju.",
    },
    product: {
      categoryLabel: "Kategorija",
      price: "Cena",
      addButton: "Dodaj",
      addedButton: "Dodato ✓",
      badge: {
        new: "Novo",
        sale: "Akcija",
      },
    },
    collection: {
      newArrivals: "Novi proizvodi",
      onSale: "Na akciji",
      bestsellers: "Najprodavanije",
      notFound: "Kolekcija nije pronađena.",
      noProducts: "Nema proizvoda u ovoj kolekciji.",
    },
    about: {
      title: "O nama",
      subtitle:
        "Verujemo u promišljeni dizajn, održive materijale i proizvode koji traju čitav život.",
      storyTitle: "Naša priča",
      storyText:
        "PREMI je osnovan 2020. godine sa jednostavnom idejom: da sastavimo kolekciju svakodnevnih predmeta koji donose radost i izdrže test vremena. Radimo direktno sa zanatlijama i malim proizvođačima koji dele našu posvećenost kvalitetu i održivosti. Svaki proizvod je pažljivo odabran, testiran na izdržljivost i dizajniran da postane deo vaše svakodnevne rutine.",
      valuesTitle: "Naše vrednosti",
      values: [
        {
          emoji: "🌿",
          title: "Održivost",
          description:
            "Prioretizujemo ekološki prihvatljive materijale i odgovorne proizvodne metode.",
        },
        {
          emoji: "✋",
          title: "Zanatstvo",
          description:
            "Svaki proizvod je napravljen sa pažnjom na detalje i izgrađen da traje.",
        },
        {
          emoji: "🤝",
          title: "Transparentnost",
          description:
            "Delimo priču iza svakog proizvoda i ruke koje su ga napravile.",
        },
      ],
      contactTitle: "Kontaktirajte nas",
      contactText:
        "Voleli bismo da čujemo od vas. Pitanja, povratne informacije ili samo da pozdravite.",
      contactButton: "Kontaktirajte nas",
    },
    productPage: {
      breadcrumbShop: "Prodavnica",
      backToShop: "Nazad u prodavnicu",
      stockIn: "Na stanju",
      stockOut: "Nema na stanju",
      wishlist: "♡ Sačuvaj na listu želja",
      delivery: (days) =>
        `Procena isporuke za ${days} radna dana. Besplatna dostava za porudžbine preko $75.`,
      tabs: {
        description: "Opis",
        details: "Detalji",
        reviews: "Recenzije",
      },
      moreFrom: (category) => `Više iz ${category}`,
      notFound: "Proizvod nije pronađen.",
    },
    footer: {
      productsSummary: (count) => `${count} proizvod${count !== 1 ? "a" : ""}`,
      shipping: "Besplatna isporuka preko $75",
      loadMore: "Učitaj više",
    },
    contact: {
      title: "Kontaktirajte nas",
      subtitle:
        "Voleli bismo da čujemo od vas. Pošaljite nam poruku i odgovorićemo što pre.",
      info: [
        { emoji: "📧", label: "Email", value: "hello@premi.com" },
        { emoji: "📍", label: "Adresa", value: "123 Design St, NYC" },
        { emoji: "⏰", label: "Radno vreme", value: "Pon-Pet 9h-18h" },
      ],
      formName: "Vaše ime",
      formEmail: "Email adresa",
      formMessage: "Poruka",
      submitButton: "Pošalji poruku",
      successTitle: "Poruka poslata!",
      successText:
        "Hvala vam što ste nas kontaktirali. Odgovorićemo u roku od 24 sata.",
      backToShop: "Nazad u prodavnicu",
    },
    cart: {
      title: "Korpa",
      itemCount: (count) =>
        `${count} proizvod${count !== 1 ? "a" : ""} u korpi`,
      empty: "Vaša korpa je prazna",
      emptyText: "Izgleda da niste dodali ništa.",
      continueShopping: "Nastavi kupovinu",
      remove: "Ukloni",
      summary: "Pregled narudžbine",
      subtotal: "Ukupno",
      shipping: "Dostava",
      free: "Besplatno",
      freeShippingNote: "Dodajte još $75 za besplatnu dostavu",
      total: "Ukupno",
      checkout: "Na plaćanje",
    },
  },
};

export default locales;
