import { GET_ARTS, LOADING_ARTS } from "./ActionTypes";
import { db } from "../../firebase/config";

export const getArts = () => (dispatch) => {
  // When arts are loading, set loading to true
  dispatch({ type: LOADING_ARTS, payload: true });

  db.collection("art")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      dispatch({
        type: GET_ARTS,
        payload: snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })),
      });

      // When arts are fully loaded, set loading to false
      dispatch({ type: LOADING_ARTS, payload: false });
    });
};
