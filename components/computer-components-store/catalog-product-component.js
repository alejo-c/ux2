const catalogProductComponent = product => {
	return `
		<article class="catalog-product" id="catalog-product-${product.id}">
			<header class="catalog-product-name">${product.name}</header>
			<img class="catalog-product-image" src="${product.image}" alt="${product.name}">
			<aside class="catalog-product-price">${product.price}</aside>
			<main class="catalog-product-description">${product.description}</main>
			<button class="add-cart-product-btn btn" id="add-cart-product-${product.id}">Add to Cart</button>
		</article>
	`
}

const findCatalogProduct = id => catalogProducts.find(product => product.id === id) 