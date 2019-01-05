const INITIAL_STATE = {
  data: [],
  loading: false,
  errorOnAdd: null,
};


export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'ADD_FAVORITE_SUCCESS':
      return {
        data: [...state, action.payload.bookName ],
        errorOnAdd: null,
        loading: false,
      };
    case 'ADD_FAVORITE_ERROR':
      return {
        ...state,
        errorOnAdd: action.payload.message,
        loading: false,
      };
    default:
      return state;
  }
}
