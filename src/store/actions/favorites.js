export const addFavoriteRequest = bookName => ({
  type: 'ADD_FAIVORITE_REQUEST',
  payload: {
    bookName,
  },
});

export const addFavoriteSuccess = bookName => ({
  type: 'ADD_FAIVORITE_SUCCESS',
  payload: {
    bookName,
  },
});
