addEvent(document, 'DOMContentLoaded', () => appendNavbar())

const appendNavbar = () => {
	const navBar = getElementById('navbar')
	navBar.innerHTML += `
		<ul id="navbar-links">
			<li class="nav-item"><a href="/">Index</a></li>

			<li class="nav-item"><a href="/triangle-area-page.html">
				Calculate Triangle Area
			</a></li>
			<li class="nav-item"><a href="/computer-store-page.html">
				Computer Components Store
			</a></li>
			<li class="nav-item"><a href="/ice-cream-machine-page.html">
				Ice Cream Vending Machine
			</a></li>
			<li class="nav-item"><a href="/addition-tutor-page.html">
				Addition Operation Tutor
			</a></li>
		</ul>
	`
}