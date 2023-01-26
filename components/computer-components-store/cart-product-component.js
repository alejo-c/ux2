const cartProductComponent = product => {
	const id = product.id
	return `
		<tr class="cart-product" id="cart-product-${id}">
			<td>
				<img class="cart-product-image" src="${product.image}" alt="${product.name}">
			</td>
			<td class="cart-product-name">${product.name}</td>
			<td class="cart-product-unit-price">${product.price}</td>
			<td class="cart-spinner-count">
				<button class="spinner-decrement-btn" id="spinner-decrement-${id}" type="button">-</button>
				<input class="spinner-count-input" id="spinner-count-${id}" value="${product.count}" min="1" required>
				<button class="spinner-increment-btn" id="spinner-increment-${id}" type="button">+</button>
			</td>
			<td class="cart-product-total-price" id="cart-product-total-${product.id}">${product.price}</td>
			<td>
				<button class="cart-product-remove-btn" id="cart-product-remove-${id}">x</button>
			</td>
		</tr>
	`
}

const findCartProduct = id => cartProducts.find(product => product.id === id) 