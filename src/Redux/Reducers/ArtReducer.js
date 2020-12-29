import { GET_ARTS } from "../Actions/ActionTypes";

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

    default:
      return state;
  }
};

export default ArtReducer;
