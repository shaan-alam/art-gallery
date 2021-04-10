import { CLEAR_ARTS, GET_ARTS, LOADING_ARTS } from "../Actions/ActionTypes";

// Initial State
const initialState = {
  arts: [],
  loading: false,
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

    case LOADING_ARTS:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};

export default ArtReducer;
