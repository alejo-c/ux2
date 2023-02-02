const storeCatalogComponent = () => {
	const catalogComponent = getElementById('store-catalog')

	for (const product of catalogProducts)
		catalogComponent.innerHTML += catalogProductComponent(product)

	const buyProductButtons = getElementsByClass('add-cart-product-btn')
	buyProductButtons.forEach(buyProductButton => {
		buyProductButton.onclick = () => {
			const id = buyProductButton.id.split('-').pop()
			addCartProduct(id)
			reloadCartComponent()
		}
	})
}


addEvent(document, 'DOMContentLoaded', storeCatalogComponent)