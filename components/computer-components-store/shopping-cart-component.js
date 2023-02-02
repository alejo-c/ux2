const cartProductsTable = getElementById('cart-products')
const buyButton = getElementById('cart-buy-btn')

const shoppingCartComponent = () => {
	shoppingCart = getElementById('shopping-cart')

	cartProducts.forEach(cartProduct => {
		cartProductsTable.innerHTML += cartProductComponent(cartProduct)
		updateTotalPrice()
	})

	const spinnerIncrementButtons = getElementsByClass('spinner-increment-btn')
	spinnerIncrementButtons.forEach(incrementButton => {
		incrementButton.onclick = () => {
			const id = incrementButton.id.split('-').pop()
			const spinnerInput = getElementById(`spinner-count-${id}`)
			const value = parseInt(spinnerInput.value)
			if (value < 100) {
				updateCount(id, spinnerInput, `${value + 1}`)
				updateTotalPrice()
			}
		}
	})

	const spinnerDecrementButtons = getElementsByClass('spinner-decrement-btn')
	spinnerDecrementButtons.forEach(decrementButton => {
		decrementButton.onclick = () => {
			const id = decrementButton.id.split('-').pop()
			const spinnerInput = getElementById(`spinner-count-${id}`)
			const value = parseInt(spinnerInput.value)
			if (value > 1) {
				updateCount(id, spinnerInput, `${value - 1}`)
				updateTotalPrice()
			}
		}
	})

	const spinnerInputs = getElementsByClass('spinner-count-input')
	spinnerInputs.forEach(spinnerInput => {
		spinnerInput.oninput = () => {
			const id = spinnerInput.id.split('-').pop()
			updateCount(id, spinnerInput, spinnerInput.value)
		}
		spinnerInput.onpaste = e => {
			e.preventDefault()
			const id = spinnerInput.id.split('-').pop()
			updateCount(id, spinnerInput, e.clipboardData.getData('text'))
		}
	})

	const removeButtons = getElementsByClass('cart-product-remove-btn')
	removeButtons.forEach(removeButton => {
		removeButton.onclick = () => {
			const id = removeButton.id.split('-').pop()
			cartProducts = cartProducts.filter(product => product.id !== id)
			const cartProduct = getElementById(`cart-product-${id}`)
			cartProduct.remove()
			updateTotalPrice()
		}
	})

	buyButton.onclick = () => {
		let productsToBuy = `<table><thead><tr>
			<th>Product</th>
			<th>Price</th>
			<th></th>
			<th>Count</th>
			<th></th>
			<th>Subtotal</th>
		</tr></thead><tbody>`
		const totalSection = getElementById('total-section')
		cartProducts.forEach(product => productsToBuy += billProduct(product))
		productsToBuy += '</tbody></table>' + totalSection.innerHTML
		openModalDialog('Products to Buy', 'bill', productsToBuy)
		cartProducts = []
		reloadCartComponent()
	}
}

const addCartProduct = productId => {
	const cartProduct = cartProducts.find(cartProduct => cartProduct.id === productId)
	if (cartProduct !== undefined) return

	const product = catalogProducts.find(catalogProduct => catalogProduct.id === productId)
	product.count = 1
	cartProducts.push(product)
}

const reloadCartComponent = () => {
	cartProductsTable.innerHTML = ''
	shoppingCartComponent()
	updateTotalPrice()
}


const updateCount = (productId, input, data) => {
	const product = findCartProduct(productId)
	if (data > 100)
		data = input.previousValue

	input.value = data.replace(/[^0-9]/g, "")
	input.previousValue = input.value
	if (input.value > 0)
		product.count = input.value
	else
		product.count = input.value = 1
	updateTotalPrice()
}

const updateTotalPrice = () => {
	const productsSubtotalPrice = getElementsByClass('cart-product-subtotal-price')
	const totalElement = getElementById('cart-total')
	let total = 0

	for (const subtotalPrice of productsSubtotalPrice) {
		const id = subtotalPrice.id.split('-').pop()
		const product = findCartProduct(id)
		const subtotal = product.price * product.count
		total += subtotal
		subtotalPrice.innerText = toCOPCurrency(subtotal)
	}

	buyButton.disabled = total === 0
	totalElement.innerText = toCOPCurrency(total)

	shoppingCart.style.display = total === 0 ? 'none' : 'block'
}
