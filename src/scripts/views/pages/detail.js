import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import { createRestoDetailTemplate, createReviewTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>

      <div id="addReview"></div
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailResto(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestoDetailTemplate(restaurant);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
        city: restaurant.city,
        description: restaurant.description,
      },
    });

    const addReview = document.querySelector('#addReview');
    addReview.innerHTML = createReviewTemplate();
    const submitButton = document.querySelector('#submit');
    const reviewer = document.querySelector('#formNama');
    const formReview = document.querySelector('#formReview');
    const restaurantId = restaurant.id;
    submitButton.addEventListener('click', async (ev) => {
      ev.preventDefault();
      if (reviewer.value === '' && formReview.value === '') {
        // eslint-disable-next-line no-alert
        alert('Harap lengkapi semua form');
        reviewer.value = '';
        formReview.value = '';
      } else {
        const review = {
          id: restaurantId,
          name: reviewer.value,
          review: formReview.value,
        };
        const sendReview = await DataSource.reviewResto(review);
        reviewer.value = '';
        formReview.value = '';
        console.log(sendReview);
      }
    });
  },
};

export default Detail;
