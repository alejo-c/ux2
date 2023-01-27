let iceCreamProducts = [
	{
		id: '01',
		name: 'Helado Artesanal',
		image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/219109-1600-1600?v=637816519423130000&width=1600&height=1600&aspect=true',
		price: 1800,
		stock: 0
	},
	{
		id: '02',
		name: 'Bocato',
		image: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/214754-800-800?v=637814279964600000&width=800&height=800&aspect=true',
		price: 3000,
		stock: 0
	},
	{
		id: '03',
		name: 'Chococono',
		image: 'https://cremhelado.com.co/wp-content/uploads/2022/12/cremhelado-chococono.png',
		price: 2000,
		stock: 0
	},
]
let soldProducts = []

const setVendingMachine = () => {
	const vendingMachine = getElementById('vending-machine')
	for (const product of iceCreamProducts)
		vendingMachine.innerHTML += iceCreamProductComponent(product)

	const productBuyButtons = getElementsByClass('ice-cream-product-buy-btn')
	for (const productBuyButton of productBuyButtons)
		productBuyButton.onclick = () => {
			const id = productBuyButton.id.split('-').pop()
			sellProduct(id)
		}

	const productRestockButtons = getElementsByClass('ice-cream-product-restock-btn')
	for (const productRestockButton of productRestockButtons)
		productRestockButton.onclick = () => {
			const id = productRestockButton.id.split('-').pop()
			restockProduct(id)
		}

	const totalSalesValueButton = getElementById('total-sales-value-btn')
	totalSalesValueButton.onclick = () => {
		let total = soldProducts.reduce((sum, product) => sum += product.price, 0)
		alert(`Total of sales: $${total}`)
	}

	const unitsSoldButton = getElementById('units-sold-btn')
	unitsSoldButton.onclick = () => {
		let message = `The count of sold products is:`
		for (const product of iceCreamProducts) {
			let count = soldProducts.filter(
				soldProduct => product.id === soldProduct.id
			).length
			message += `\n${product.name}: ${count}`
		}
		alert(message)
	}
}

const sellProduct = id => {
	const product = findProduct(id)

	if (product.stock < 1) return

	const productStock = getElementById(`ice-cream-product-stock-${id}`)
	productStock.innerText = --product.stock

	const soldProduct = { ...product }
	delete soldProduct.stock
	soldProducts.push(soldProduct)
}

const restockProduct = id => {
	const product = findProduct(id)
	const newstock = prompt(`Enter number of units to stock (${product.name}):`)

	if (isNaN(newstock)) return alert('Non-valid stock')
	if (newstock < 1) return alert('The new units to stock must be at least 1 unit')

	const productStock = getElementById(`ice-cream-product-stock-${id}`)
	productStock.innerText = product.stock += parseInt(newstock)
}

const findSoldProduct = id => soldProducts.find(product => product.id === id)

addEvent(document, 'DOMContentLoaded', setVendingMachine)