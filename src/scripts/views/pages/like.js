import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
        <div class="content">
            <h2 class="content__heading">Your Liked Restaurants</h2>
            <div id="restaurants" class="restaurants">

            </div>
        </div>`;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    if (restaurants.length < 1) {
      const restaurantsList = document.querySelector('.restaurants');
      restaurantsList.innerHTML = '<p>You dont have any favorite Restaurant</p>';
    }
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Like;
