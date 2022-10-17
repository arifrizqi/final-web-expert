class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
            <div class="hero__inner">
            <h1 class="hero__title">D'Restaurant Solusi Perut Kenyang</h1>
            <p class="hero__tagline">Biasakanlah untuk malas masak, karena itu adalah tugas kami, anda kenyang, kami senang!</p>
            </div>
        </div>`;
  }
}

customElements.define('hero-element', HeroElement);
