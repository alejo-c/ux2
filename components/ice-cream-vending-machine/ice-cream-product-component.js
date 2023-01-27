const iceCreamProductComponent = product => {
	const id = product.id
	return `
		<article class="ice-cream-product" id="ice-cream-product-${id}">
			<img class="ice-cream-product-image" src="${product.image}" alt="${product.name}">
			<header class="ice-cream-product-name">${product.name}</header>
			<div class="ice-cream-product-description">
				<div class="ice-cream-product-stock" id="ice-cream-product-stock-${id}">
					${product.stock}
				</div>
				<div class="ice-cream-product-price">${product.price}</div>
			</div>
			<footer class="ice-cream-product-buttons">
				<button class="ice-cream-product-buy-btn btn" id="ice-cream-product-buy-${id}">
					Buy
				</button>
				<button class="ice-cream-product-restock-btn btn" id="ice-cream-product-restock-${id}">
					Restock
				</button>
			</footer>
		</article>
	`
}

const findProduct = id => iceCreamProducts.find(product => product.id === id)