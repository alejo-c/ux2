const cartProductsTable = getElementById('cart-products')
const buyButton = getElementById('cart-buy-btn')

const shoppingCartComponent = () => {
	for (const cartProduct of cartProducts) {
		cartProductsTable.innerHTML += cartProductComponent(cartProduct)
		updateTotalPrice()

		const spinnerIncrementButtons = getElementsByClass('spinner-increment-btn')
		for (const spinnerIncrementButton of spinnerIncrementButtons)
			spinnerIncrementButton.onclick = () => {
				const id = spinnerIncrementButton.id.split('-').pop()
				const product = findCartProduct(id)
				const spinnerInput = getElementById(`spinner-count-${id}`)
				spinnerInput.value = ++product.count
				updateTotalPrice()
			}

		const spinnerDecrementButtons = getElementsByClass('spinner-decrement-btn')
		for (const spinnerDecrementButton of spinnerDecrementButtons)
			spinnerDecrementButton.onclick = () => {
				const id = spinnerDecrementButton.id.split('-').pop()
				const product = findCartProduct(id)
				const spinnerInput = getElementById(`spinner-count-${id}`)
				if (spinnerInput.value > 1) {
					spinnerInput.value = --product.count
					updateTotalPrice()
				}
			}

		const spinnerInputs = getElementsByClass('spinner-count-input')
		for (const spinnerInput of spinnerInputs) {
			spinnerInput.oninput = () => {
				const id = spinnerInput.id.split('-').pop()
				const product = findCartProduct(id)
				updateCount(product, spinnerInput, spinnerInput.value)
			}
			spinnerInput.onpaste = e => {
				e.preventDefault()
				const id = spinnerInput.id.split('-').pop()
				const product = findCartProduct(id)
				updateCount(product, spinnerInput, e.clipboardData.getData('text'))
			}
		}

		const removeButtons = getElementsByClass('cart-product-remove-btn')
		for (const removeButton of removeButtons)
			removeButton.onclick = () => {
				const id = removeButton.id.split('-').pop()
				cartProducts = cartProducts.filter(product => product.id !== id)
				const cartProduct = getElementById(`cart-product-${id}`)
				cartProduct.remove()
				updateTotalPrice()
			}
	}

	buyButton.onclick = () => {
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
	updateTotalPrice()
	shoppingCartComponent()
}


const updateCount = (product, input, data) => {
	input.value = data.replace(/[^0-9]/g, "")
	if (input.value > 0)
		product.count = input.value
	else
		product.count = input.value = 1
	updateTotalPrice()
}

const updateTotalPrice = () => {
	const productsTotalPrice = getElementsByClass('cart-product-total-price')
	const totalElement = getElementById('cart-total')
	let total = 0

	for (const productTotalPrice of productsTotalPrice) {
		const id = productTotalPrice.id.split('-').pop()
		const product = findCartProduct(id)
		total += productTotalPrice.innerText = product.price * product.count
	}

	totalElement.innerText = total
	buyButton.disabled = total === 0
}
