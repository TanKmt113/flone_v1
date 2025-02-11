// api/product.js
import http from "./http";

export function getProducts() {
  return http.get("/products");
}

export function getProductById(id) {
  return http.get(`/products/${id}`);
}

export function createProduct(data) {
  return http.post("/products", data);
}

export function updateProduct(id, data) {
  return http.put(`/products/${id}`, data);
}

export function deleteProduct(id) {
  return http.delete(`/products/${id}`);
}