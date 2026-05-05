const API_BASE = "http://localhost:4000/api";

// Fetch all products with optional filters
export async function fetchProducts(filters = {}) {
  const params = new URLSearchParams();

  if (filters.category && filters.category !== "all") {
    params.append("category", filters.category);
  }
  if (filters.search) {
    params.append("search", filters.search);
  }
  if (filters.sort) {
    params.append("sort", filters.sort);
  }
  if (filters.inStock) {
    params.append("inStock", "true");
  }
  if (filters.minPrice) {
    params.append("minPrice", filters.minPrice);
  }
  if (filters.maxPrice) {
    params.append("maxPrice", filters.maxPrice);
  }

  const url = params.toString()
    ? `${API_BASE}/products?${params.toString()}`
    : `${API_BASE}/products`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
}

// Fetch a single product by ID
export async function fetchProduct(id) {
  const response = await fetch(`${API_BASE}/products/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
}

// Fetch available categories
export async function fetchCategories() {
  const response = await fetch(`${API_BASE}/products/categories`);
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }
  return response.json();
}
