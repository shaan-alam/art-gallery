import { GET_ARTS } from "./ActionTypes";
import { db } from "../../firebase/config";

export const getArts = () => (dispatch) => {
  console.log(1);

  db.collection("art")
    .db.collection("art")
    .orderBy("createdAt", "desc")
    .onSnapshot((snapshot) => {
      dispatch({
        type: GET_ARTS,
        payload: snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })),
      });
    });
};
