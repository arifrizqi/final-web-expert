import 'regenerator-runtime'; /* for async await transpile */
// import '../custom-element/header-bar';
// import '../custom-element/hero-element';
import '../custom-element/main-section';
// import '../custom-element/footer-bar';
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/custom.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
