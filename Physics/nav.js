class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML =	'
<header>
<a href="index.html">
</a>
<nav>
<ul>
<li> <a href=#>Home</a>
<li> <a href=#>Yeet</a>
</ul>
</nav>
  </header>
  '
	}
}

customElements.define('my-header', MyHeader)
