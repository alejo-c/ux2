const appendNavbar = () => {
	const navbar = getElementById('navbar')
	navbar.innerHTML += `
		<ul id="navbar-items">
			<li class="nav-item" id="index">
				<a class="nav-link" href="/">
					<span class="icon" id="index-icon"></span>
					Index
				</a>
			</li>
			<li class="nav-item" id="calculate-triangle-area">
				<a class="nav-link" href="/calculate-triangle-area.html">
					<span class="icon" id="triangle-icon"></span>
					Triangle Area
				</a>
			</li>
			<li class="nav-item" id="computer-components-store">
				<a class="nav-link" href="/computer-components-store.html">
					<span class="icon" id="store-icon"></span>
					Computer Store
				</a>
			</li>
			<li class="nav-item" id="ice-cream-vending-machine">
				<a class="nav-link" href="/ice-cream-vending-machine.html">
					<span class="icon" id="ice-cream-icon"></span>
					Ice Cream Machine
				</a>
			</li>
			<li class="nav-item" id="addition-operation-tutor">
				<a class="nav-link" href="/addition-operation-tutor.html">
					<span class="icon" id="addition-icon"></span>
					Addition Tutor
				</a>
			</li>
		</ul>
	`

	let currentPage = window.location.href.split('/').pop().replace('.html', '')
	if (currentPage === '')
		currentPage = 'index'

	const navLinks = getElementsByClass('nav-link')
	navLinks.forEach(link => {
		if (currentPage === link.parentNode.id)
			link.classList.add('active')
	})
}

addEvent(document, 'DOMContentLoaded', appendNavbar)