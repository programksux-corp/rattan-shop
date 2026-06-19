function showPhone() {
  alert("Телефон для заказа:\n+380 XX XXX XX XX");
}

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  card.innerHTML = `
    <img class="product-card__img" src="${product.image}" alt="${product.name}">
    <div class="product-card__body">
      <h3>${product.name}</h3>
      <p>Размер: ${product.size}</p>
      <p class="product-card__price">${product.price}</p>
      <button class="btn btn--small" type="button">Заказать</button>
    </div>
  `;

  card.querySelector("button").addEventListener("click", showPhone);
  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("products-grid");
  const previewGrid = document.getElementById("preview-grid");

  if (grid) {
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");

    const filteredProducts = category
      ? products.filter(product => product.category === category)
      : products;

    filteredProducts.forEach(product => {
      grid.appendChild(createProductCard(product));
    });
  }

  if (previewGrid) {
    products.slice(0, 2).forEach(product => {
      previewGrid.appendChild(createProductCard(product));
    });
  }
});