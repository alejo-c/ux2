const cartProductComponent = product => {
	const id = product.id
	let price = toCOPCurrency(product.price)
	return `
		<tr class="cart-product" id="cart-product-${id}">
			<td>
				<button class="cart-product-remove-btn btn" id="cart-product-remove-${id}">x</button>
			</td>
			<td>
				<img class="cart-product-image" src="${product.image}" alt="cart-product-${id}">
			</td>
			<td class="cart-product-unit-price price">${price}</td>
			<td class="cart-spinner-count">
				<button class="btn spinner-btn spinner-decrement-btn" id="spinner-decrement-${id}" type="button">-</button>
				<input class="spinner-count-input" id="spinner-count-${id}" value="${product.count}" min="1" required>
				<button class="btn spinner-btn spinner-increment-btn" id="spinner-increment-${id}" type="button">+</button>
			</td>
			<td class="cart-product-subtotal-price price" id="cart-product-subtotal-${id}">
				${product.price}
			</td>
		</tr>
	`
}

const findCartProduct = id => cartProducts.find(product => product.id === id) 