export const addFavoriteRequest = bookName => ({
  type: 'ADD_FAVORITE_REQUEST',
  payload: {
    bookName,
  },
});

export const addFavoriteSuccess = bookName => ({
  type: 'ADD_FAVORITE_SUCCESS',
  payload: {
    bookName,
  },
});

export const addFavoriteError = message => ({
  type: 'ADD_FAVORITE_ERROR',
  payload: {
    message,
  },
});
