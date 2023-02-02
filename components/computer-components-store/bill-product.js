const billProduct = product => {
	const price = toCOPCurrency(product.price)
	const subtotal = toCOPCurrency(product.price * product.count)
	return `
		<tr class="bill-product">
			<td>
				<img class="bill-product-image" src="${product.image}" alt="bill-product-${product.id}">
			</td>
			<td class="value">${price}</td>
			<td class="symbol">x</td>
			<td class="value">${product.count}</td>
			<td class="symbol">=</td>
			<td class="value">${subtotal}</td>
		</tr>
	`
}