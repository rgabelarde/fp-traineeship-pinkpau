class Header extends HTMLElement {
  constructor() {
    super();
  }

	connectedCallback() {
		this.innerHTML = `
		<style>
			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				background-color:	#D70F64;
				padding: 10px 20px;
				color: white;
			}

			.nav {
				list-style: none;
				display: flex;
				margin: 0;
				padding: 0;
			}

			.nav li {
				margin-left: 20px; /* Space between nav items */
			}

			.nav a {
				color: white;
				text-decoration: none;
			}

			.nav a:hover {
				text-decoration: underline;
				font-weight: bold;
			}

			.nav-container {
				margin-left: auto; /* Pushes the nav to the right */
			}

		</style>
		<header class="header">
			<div class="logo">
				<a href="index.html">
					<img src="https://whatsticker.online/stickers_asset/ws-pack-5325474inxKWP/47e764ba3f5c.png" alt="Logo">
				</a>
			</div>
			<nav class="nav-container">
				<ul class="nav">
					<li><a href="dishes.html">Recipes</a></li>
					<li><a href="contact.html">Contact</a></li>
				</ul>
			</nav>
		</header>
		`;
	}
}

customElements.define('header-component', Header);