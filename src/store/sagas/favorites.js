import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';
import { addFavoriteSuccess, addFavoriteError } from '../actions/favorites';
// import { Types as FavoritesTypes } from 'store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const response = yield call(api.get, `/books/${action.payload.bookName}`);
    if (response.data[0] === undefined || response.data === null) {
      throw new Error('O Livro informado nao existe.');
    }
    yield put(addFavoriteSuccess(response.data[0]));
  } catch (err) {
    yield put(addFavoriteError('O Livro informado nao existe.'));
  }
}
