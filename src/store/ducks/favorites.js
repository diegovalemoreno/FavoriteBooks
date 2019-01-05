export const Types = {
  ADD_REQUEST: 'favorites/ADD_REQUEST',
  ADD_SUCCESS: 'favorites/ADD_SUCCESS',
  ADD_FAILURE: 'favorites/ADD_FAILURE',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  errorOnAdd: null,
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:

      return {
        data: [
          ...state.data,
          action.payload.bookName],
        errorOnAdd: null,
        loading: false,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
}

export const Creators = {
  addFavoriteRequest: bookName => ({
    type: Types.ADD_REQUEST,
    payload: {
      bookName,
    },
  }),

  addFavoriteSuccess: bookName => ({
    type: Types.ADD_SUCCESS,
    payload: {
      bookName,
    },
  }),

  addFavoriteError: message => ({
    type: Types.ADD_FAILURE,
    payload: {
      message,
    },
  }),
};
