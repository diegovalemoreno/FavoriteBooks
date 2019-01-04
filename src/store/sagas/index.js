import { all, takeLatest } from 'redux-saga/effects';

// import { Types as FavoritesTypes } from 'store/ducks/favorites';
import { addFavoriteRequest } from './favorites';

export default function* rootSaga() {
  return yield all([
    takeLatest('ADD_FAIVORITE_REQUEST', addFavoriteRequest),
  ]);
}
