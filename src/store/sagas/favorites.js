import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';
import { Creators as FavoriteActions } from '../ducks/favorites';
// import { Types as FavoritesTypes } from 'store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/books/${action.payload.bookName}`);

    const favorites = yield select(state => state.favorites.data);
    console.tron.log(favorites);
    if (favorites.find(favorite => favorite.id === response.data[0].id)) {
      yield put(FavoriteActions.addFavoriteError('Livro ja adicionado aos favoritos.'));
    } else if (response.data[0] === undefined || response.data === null) {
      yield put(FavoriteActions.addFavoriteError('O Livro informado nao existe.'));
    } else {
      yield put(FavoriteActions.addFavoriteSuccess(response.data[0]));
    }
  } catch (err) {
    yield put(FavoriteActions.addFavoriteError('O Livro informado nao existe.'));
  }
}
