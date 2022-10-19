/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line eqeqeq
    return favoriteResto.find((restaurant) => restaurant.id == id);
  },

  getAllRestaurant() {
    return favoriteResto;
  },

  putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteResto.push(restaurant);
  },

  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteResto = favoriteResto.filter((restaurant) => restaurant.id != id);
  },
};

describe('Favorite restaurant Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-return-assign
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
