/* eslint-disable no-underscore-dangle */
class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchResto(event.target.value);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery;
    const foundResto = await this._favoriteResto.searchResto(this.latestQuery);

    this._showFoundResto(foundResto);
  }

  // eslint-disable-next-line class-methods-use-this
  _showFoundResto(movies) {
    const html = movies.reduce(
      (carry, movie) => carry.concat(`<li class="movie"><span class="movie__title">${movie.title || '-'}</span></li>`),
      '',
    );

    document.querySelector('.movies').innerHTML = html;

    document.getElementById('movie-search-container')
      .dispatchEvent(new Event('movies:searched:updated'));
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestoSearchPresenter;
