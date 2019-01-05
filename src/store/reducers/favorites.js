
const INITIAL_STATE = [];

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAIVORITE_SUCCESS':
      return [...state, action.payload.bookName];
    default:
      return state;
  }
}
