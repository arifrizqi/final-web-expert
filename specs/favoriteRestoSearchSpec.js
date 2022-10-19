/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Searching movies', () => {
  let presenter;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
        <div id="movie-search-container">
            <input id="query" type="text">
            <div class="movie-result-container">
                <ul class="movies">
                </ul>
            </div>
        </div>
        `;
  };

  const constructPresenter = () => {
    spyOn(FavoriteRestaurantIdb, 'searchResto');
    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto: FavoriteRestaurantIdb,
    });
  };
  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  it('should be able to capture the query typed by the user', () => {
    searchResto('film a');
    expect(presenter.latestQuery).toEqual('film a');
  });

  it('should ask the model to search for movies', () => {
    searchResto('film a');
    expect(FavoriteRestaurantIdb.searchResto)
      .toHaveBeenCalledWith('film a');
  });
  it('should show the found movies', () => {
    presenter._showFoundResto([{ id: 1 }]);
    expect(document.querySelectorAll('.movie').length).toEqual(1);

    presenter._showFoundResto([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
    expect(document.querySelectorAll('.movie').length).toEqual(2);
  });

  it('should show the title of the found movies', () => {
    presenter._showFoundResto([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.movie__title').item(0).textContent)
      .toEqual('Satu');
  });

  it('should show the title of the found movies', () => {
    presenter._showFoundResto([{ id: 1, title: 'Satu' }]);
    expect(document.querySelectorAll('.movie__title').item(0).textContent)
      .toEqual('Satu');

    presenter._showFoundResto(
      [{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }],
    );

    const restoTitles = document.querySelectorAll('.movie__title');
    expect(restoTitles.item(0).textContent).toEqual('Satu');
    expect(restoTitles.item(1).textContent).toEqual('Dua');
  });

  it('should show - for found movie without title', () => {
    presenter._showFoundResto([{ id: 1 }]);

    expect(document.querySelectorAll('.movie__title').item(0).textContent)
      .toEqual('-');
  });
  it('should show the movies found by Favorite Movies', (done) => {
    document.getElementById('movie-search-container')
      .addEventListener('movies:searched:updated', () => {
        expect(document.querySelectorAll('.movie').length).toEqual(3);
        done();
      });

    FavoriteRestaurantIdb.searchResto.withArgs('film a').and.returnValues([
      { id: 111, title: 'film abc' },
      { id: 222, title: 'ada juga film abcde' },
      { id: 333, title: 'ini juga boleh film a' },
    ]);

    searchResto('film a');
  });

  it('should show the name of the movies found by Favorite Movies', (done) => {
    document.getElementById('movie-search-container').addEventListener('movies:searched:updated', () => {
      const restoTitles = document.querySelectorAll('.movie__title');
      expect(restoTitles.item(0).textContent).toEqual('film abc');
      expect(restoTitles.item(1).textContent).toEqual('ada juga film abcde');
      expect(restoTitles.item(2).textContent).toEqual('ini juga boleh film a');

      done();
    });

    FavoriteRestaurantIdb.searchResto.withArgs('film a').and.returnValues([
      { id: 111, title: 'film abc' },
      { id: 222, title: 'ada juga film abcde' },
      { id: 333, title: 'ini juga boleh film a' },
    ]);

    searchResto('film a');
  });
});
