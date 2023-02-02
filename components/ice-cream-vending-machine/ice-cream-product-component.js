const iceCreamProductComponent = product => {
	const id = product.id
	const name = product.name
	const price = toCOPCurrency(product.price)
	return `
		<article class="ice-cream-product" id="ice-cream-product-${id}">
			<header class="ice-cream-product-name">${name}</header>
			<img class="ice-cream-product-image" src="${product.image}" alt="${name}">
			<div class="ice-cream-product-desc">
				<div class="ice-cream-product-stock" id="ice-cream-product-stock-${id}">
					<strong>Stock:</strong> ${product.stock}
				</div>
				<div class="ice-cream-product-price">
					<strong>Price:</strong> ${price}
				</div>
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