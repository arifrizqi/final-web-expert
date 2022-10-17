import DataSource from '../../data/data-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading" id="foods">Explore Restaurants</h2>
      <hr/>
      <div id="restaurants" class="restaurants">
      </div>
    </div>
    `;
  },

  async afterRender() {
    const resto = await DataSource.homeResto();
    const restaurantsContainer = document.querySelector('#restaurants');
    resto.forEach((rest) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(rest);
    });
  },
};

export default Home;
