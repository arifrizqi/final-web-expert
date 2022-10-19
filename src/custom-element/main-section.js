class MainSection extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main id="mainContent" tabindex="0">
            <section class="content">
            <div class="latest">
                <h1 class="latest__label">Expolre Restaurant</h1>
            </div>
            </section>
        </main>`;
  }
}

customElements.define('main-section', MainSection);
