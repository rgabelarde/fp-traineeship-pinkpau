class SearchBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
		this.innerHTML = `
		<style>
			.search-container {
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 1rem; /* Space between search bar and button */
				margin: 2rem 0;
				padding: 1rem;
				position: sticky;
				top: 0;
				z-index: 1;
			}

			.search-bar {
				width: 70%; /* More responsive width */
				padding: 10px;
				border: 1px solid #ccc;
				border-radius: 5px;
				font-size: 16px;
			}

			.search-button {
				padding: 10px 15px;
				border: none;
				background-color: #D70F64;
				color: white;
				border-radius: 5px;
				cursor: pointer;
				font-size: 16px;
			}

			.search-button:hover {
				background-color: pink;
			}
		</style>
		<section>
			<div class="search-container">
				<label for="searchQuery" hidden>Search for a dish</label>
				<input type="text" id="searchQuery" class="search-bar" placeholder="Search for a dish...">
				<button class="search-button" onclick="searchMeals()">Search</button>
			</div>
		</section>
		`;
  }	
}

customElements.define('search-bar', SearchBar);