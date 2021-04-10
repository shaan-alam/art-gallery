import { CLEAR_ARTS, GET_ARTS } from "../Actions/ActionTypes";

// Initial State
const initialState = {
  arts: [],
};

const ArtReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTS:
      return {
        ...state,
        arts: action.payload,
      };

    case CLEAR_ARTS:
      return {
        ...state,
        arts: [],
      };

    default:
      return state;
  }
};

export default ArtReducer;
