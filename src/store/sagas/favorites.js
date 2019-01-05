import { call, put, select } from 'redux-saga/effects';
import api from 'services/api';
import { addFavoriteSuccess } from '../actions/favorites';
// import { Types as FavoritesTypes } from 'store/ducks/favorites';

export function* addFavoriteRequest(action) {
  const response = yield call(api.get, `/books/${action.payload.bookName}`);

  yield put(addFavoriteSuccess(response.data));
}
