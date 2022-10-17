class HeaderBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#mainContent" class="skip-link">Menuju ke konten</a>
        <header class="header">
            <div class="header__inner">
                <h1 class="header__title">D'Restaurant</h1>
                <button id="menu" class="header__menu">☰</button>
            </div>
            <nav id="drawer" class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="#/home">Home</a></li>
                <li class="nav__item"><a href="#/like">Liked Restaurant</a></li>
                <li class="nav__item"><a href="https://arifrizqi.com" target="_blank">About Us</a></li>
            </ul>
            </nav>
        </header>`;
  }
}

customElements.define('header-bar', HeaderBar);
