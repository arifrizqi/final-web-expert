class FooterBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Copyright &copy; 2022 <a href="">D'Restaurant</a></p>
        </footer>`;
  }
}

customElements.define('footer-bar', FooterBar);
