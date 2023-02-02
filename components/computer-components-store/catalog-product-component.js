const catalogProductComponent = product => {
	const id = product.id
	const desc = product.description
	let price = toCOPCurrency(product.price)
	return `
		<article class="catalog-product" id="catalog-product-${id}">
			<img class="catalog-product-image" src="${product.image}" alt="catalog-product-${id}">
			<div class="catalog-product-desc" id="catalog-product-desc-${id}">${desc}</div>
			<div class="catalog-product-price">${price}</div>
			<button class="add-cart-product-btn btn" id="add-cart-product-${id}">Add to Cart</button>
		</article>
	`
}

const findCatalogProduct = id => catalogProducts.find(product => id === id) 