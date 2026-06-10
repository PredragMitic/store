export const colors = {
  bg:        "#FAFAFA",
  bg2:       "#F5F5F5",
  bg3:       "#EFEFEF",
  border:    "#D0D0D0",
  border2:   "#B8B8B8",
  text:      "#1A1A1A",
  text2:     "#4A4A4A",
  text3:     "#888888",
  accent:    "#1452AE",
  accent2:   "#2E5BC4",
  accent3:   "#4A7FD4",
  mint:      "#00A676",
  mint2:     "#00BF7F",
  mint3:     "#8EDFB0",
  lavender:  "#7B68EE",
  lavender2: "#9F7AEA",
  lavender3: "#D4B5FD",
  rose:      "#EB5757",
  rose2:     "#F27474",
  rose3:     "#FFC4C4",
  butter3:   "#FFF4E6",
};

export const catCardBg = {
  home:      colors.lavender2,
  kitchen:   colors.mint2,
  lifestyle: colors.rose2,
  garden:    colors.mint2,
};

export const catChipActive = {
  all:       { background: colors.accent,    color: "#fff",    border: colors.accent    },
  home:      { background: colors.lavender2, color: "#fff", border: colors.lavender  },
  kitchen:   { background: colors.mint2,     color: "#fff", border: colors.mint      },
  lifestyle: { background: colors.rose2,     color: "#fff", border: colors.rose      },
  garden:    { background: colors.mint2,     color: "#fff", border: colors.mint      },
};

export const PRODUCTS = [
  {
    id: 1,  name: "Linen Throw Blanket",     cat: "home",      price: 89,  oldPrice: null, rating: 4.8, reviews: 142, emoji: "🛋️", badge: "new",
    description: "Wrap yourself in the understated luxury of this 100% stonewashed linen throw. Naturally temperature-regulating and irresistibly soft, it gets better with every wash. Perfect draped over a sofa or folded at the foot of a bed.",
    details: ["100% stonewashed linen", "140 × 180 cm", "Machine washable", "Available in 4 natural tones", "OEKO-TEX certified"],
    inStock: true, deliveryDays: "3–5",
  },
  {
    id: 2,  name: "Ceramic Pour-Over Set",   cat: "kitchen",   price: 64,  oldPrice: 79,   rating: 4.9, reviews: 87,  emoji: "☕", badge: "sale",
    description: "Elevate your morning ritual with this hand-thrown ceramic pour-over set. The thick-walled carafe retains heat beautifully while the stainless steel filter eliminates the need for paper. A meditative way to start the day.",
    details: ["Hand-thrown stoneware", "Capacity: 600ml", "Permanent stainless filter included", "Dishwasher safe", "Each piece is unique"],
    inStock: true, deliveryDays: "2–4",
  },
  {
    id: 3,  name: "Beeswax Candle Trio",     cat: "lifestyle", price: 38,  oldPrice: null, rating: 4.7, reviews: 203, emoji: "🕯️", badge: "",
    description: "Three hand-poured beeswax pillar candles that fill any room with a warm, honey-like glow and a subtle natural scent. Free from paraffin and synthetic fragrances — just pure beeswax and a cotton wick.",
    details: ["100% pure beeswax", "Burn time: 40h each", "Cotton lead-free wick", "Heights: 8cm, 12cm, 16cm", "Unscented"],
    inStock: true, deliveryDays: "2–4",
  },
  {
    id: 4,  name: "Herb Garden Starter Kit", cat: "garden",    price: 42,  oldPrice: null, rating: 4.6, reviews: 59,  emoji: "🌿", badge: "new",
    description: "Everything you need to grow fresh herbs on a windowsill. Six terracotta pots, organic seed mixes for basil, thyme, rosemary, mint, chives and parsley, plus a hand-printed care guide.",
    details: ["6 terracotta pots (8cm)", "Organic heirloom seeds", "Peat-free growing medium", "Hand-printed care guide", "Grows indoors year-round"],
    inStock: true, deliveryDays: "3–5",
  },
  {
    id: 5,  name: "Walnut Cutting Board",    cat: "kitchen",   price: 75,  oldPrice: null, rating: 4.9, reviews: 311, emoji: "🪵", badge: "",
    description: "Milled from a single piece of American black walnut, this end-grain cutting board is as beautiful as it is durable. The end-grain surface is gentle on knife edges and naturally self-healing.",
    details: ["American black walnut", "38 × 25 × 4 cm", "End-grain construction", "Food-safe mineral oil finish", "Hand wash recommended"],
    inStock: true, deliveryDays: "4–6",
  },
  {
    id: 6,  name: "Merino Wool Scarf",       cat: "lifestyle", price: 98,  oldPrice: null, rating: 4.8, reviews: 76,  emoji: "🧣", badge: "",
    description: "Spun from extra-fine 17.5-micron merino, this scarf is cloud-soft against even sensitive skin. Generously proportioned for wrapping or draping, in a palette of understated, season-spanning colours.",
    details: ["100% extra-fine merino wool", "200 × 60 cm", "Hand wash cold", "Mulesing-free certified", "6 colourways"],
    inStock: true, deliveryDays: "2–4",
  },
  {
    id: 7,  name: "Stoneware Mug Set",       cat: "kitchen",   price: 52,  oldPrice: null, rating: 4.7, reviews: 128, emoji: "🍵", badge: "new",
    description: "A set of four hand-dipped stoneware mugs, each with a subtly different glaze finish. Substantial enough to cradle both hands around, with a gently flared rim that makes every sip feel considered.",
    details: ["Set of 4 mugs", "300ml capacity each", "Reactive glaze — each unique", "Microwave & dishwasher safe", "Stackable design"],
    inStock: true, deliveryDays: "3–5",
  },
  {
    id: 8,  name: "Wicker Storage Basket",   cat: "home",      price: 47,  oldPrice: 59,   rating: 4.5, reviews: 94,  emoji: "🧺", badge: "sale",
    description: "Handwoven by artisans in Portugal from sustainably harvested willow, this generously sized basket brings warmth and texture to any room. Use it for blankets, magazines, toys or anything in between.",
    details: ["Sustainably harvested willow", "45 × 35 × 30 cm", "Handwoven in Portugal", "Removable cotton liner included", "Fair trade certified"],
    inStock: false, deliveryDays: "5–7",
  },
  {
    id: 9,  name: "Pressed Flower Frame",    cat: "home",      price: 34,  oldPrice: null, rating: 4.6, reviews: 67,  emoji: "🖼️", badge: "",
    description: "A gallery-quality oak frame with a deep rebate, designed to showcase your own pressed botanicals or our curated collection of hand-pressed wildflowers. Each comes ready to hang with a linen-backed mount.",
    details: ["Solid oak frame", "A4 / 21 × 29.7 cm", "Anti-reflective glass", "Linen mount included", "Wall fixings included"],
    inStock: true, deliveryDays: "2–4",
  },
  {
    id: 10, name: "Seed Packet Collection",  cat: "garden",    price: 28,  oldPrice: null, rating: 4.8, reviews: 189, emoji: "🌸", badge: "new",
    description: "Twelve envelopes of open-pollinated, heirloom flower seeds — chosen for their cutting-garden charm and ease of growing. Illustrated by hand and packed with sowing notes on the back of each packet.",
    details: ["12 heirloom varieties", "Hand-illustrated packets", "Open-pollinated seeds", "Full sowing instructions", "Suitable for beginners"],
    inStock: true, deliveryDays: "2–3",
  },
  {
    id: 11, name: "Natural Soap Bundle",     cat: "lifestyle", price: 45,  oldPrice: null, rating: 4.9, reviews: 243, emoji: "🧼", badge: "",
    description: "Five cold-process soaps, each scented with a single pure essential oil: lavender, cedarwood, bergamot, rose and unscented. Made in small batches with a base of organic shea and coconut oils.",
    details: ["Set of 5 bars, 100g each", "Cold-process method", "Organic shea & coconut base", "Essential oil scented", "Palm oil free, vegan"],
    inStock: true, deliveryDays: "2–4",
  },
  {
    id: 12, name: "Copper Watering Can",     cat: "garden",    price: 68,  oldPrice: null, rating: 4.7, reviews: 53,  emoji: "🪴", badge: "",
    description: "Formed from a single sheet of food-grade copper, this heirloom-quality watering can develops a unique patina over time. The long, narrow spout gives precise control — ideal for indoor plants and seedlings.",
    details: ["Solid copper construction", "1.5 litre capacity", "Removable brass rose head", "Develops natural patina", "Handmade in England"],
    inStock: true, deliveryDays: "5–7",
  },
];
