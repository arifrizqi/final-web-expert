import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

// eslint-disable-next-line no-undef
describe('Favorite Resto Idb Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (movie) => {
      await FavoriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});
