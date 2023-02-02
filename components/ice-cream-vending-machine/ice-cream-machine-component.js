let iceCreamProducts = [
	{
		id: '01',
		name: 'Helado Artesanal',
		image: 'https://firebasestorage.googleapis.com/v0/b/alejocux2.appspot.com/o/ice-cream%2F01.png?alt=media&token=e3014e40-a269-4399-955e-92a450084ee2',
		price: 1800,
		stock: 0
	},
	{
		id: '02',
		name: 'Bocato',
		image: 'https://firebasestorage.googleapis.com/v0/b/alejocux2.appspot.com/o/ice-cream%2F02.png?alt=media&token=44456b3d-06e2-4f52-9c84-56e06848cba9',
		price: 3000,
		stock: 0
	},
	{
		id: '03',
		name: 'Chococono',
		image: 'https://firebasestorage.googleapis.com/v0/b/alejocux2.appspot.com/o/ice-cream%2F03.png?alt=media&token=36072930-88c3-4f6c-97ef-f52ebb7d06f2',
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
		openModalDialog('Total of sales', 'info', `Total: ${toCOPCurrency(total)}`)
	}

	const unitsSoldButton = getElementById('units-sold-btn')
	unitsSoldButton.onclick = () => {
		let message = ''
		for (const product of iceCreamProducts) {
			let count = soldProducts.filter(
				soldProduct => product.id === soldProduct.id
			).length
			message += `<div>${product.name}: ${count}</div>`
		}
		openModalDialog('The count of sold products is:','info',message)
	}
}

const sellProduct = id => {
	const product = findProduct(id)

	if (product.stock < 1) return

	const productStock = getElementById(`ice-cream-product-stock-${id}`)
	productStock.innerHTML = `<strong>Stock:</strong> ${--product.stock}`

	const soldProduct = { ...product }
	delete soldProduct.stock
	soldProducts.push(soldProduct)
}

const restockProduct = id => {
	const product = findProduct(id)
	let newstock = prompt(`Enter number of units to stock (${product.name}):`)

	if (isNaN(newstock)) return alert('Non-valid stock')
	newstock = parseInt(newstock)
	if (newstock < 1) return alert('The new units to stock must be at least 1 unit')

	const productStock = getElementById(`ice-cream-product-stock-${id}`)
	product.stock += newstock
	productStock.innerHTML = `<strong>Stock:</strong> ${product.stock}`
}

const findSoldProduct = id => soldProducts.find(product => product.id === id)

addEvent(document, 'DOMContentLoaded', setVendingMachine)