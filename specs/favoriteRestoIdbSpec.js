import { itActsAsFavoriteRestoModel } from "./contract/favoriteRestoContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-restaurant-idb";

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantIdb.getAllRestaurant()).forEach(async (movie) => {
      await FavoriteRestaurantIdb.deleteRestaurant(movie.id);
    });
  });
 
  itActsAsFavoriteRestoModel(FavoriteRestaurantIdb);
});