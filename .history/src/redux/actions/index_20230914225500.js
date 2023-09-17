import { auth, provider, storage } from "../../firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import * as actions from "./actions";
import { uploadBytesResumable } from "firebase/storage";
export function signInAPI() {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
}

export function getUserAuth() {
  // to change user account which stored in redux and return the new user object if it's
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
}

export function signOutAPI() {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((error) => alert(error.message));
  };
}


export function postArticleAPI(payload){
return(dispatch)=>{
  dispatch(actions.setLoading(true));
  if(payload.image){
  const storageRef =  ref(storage,`images/${payload.image.name}` );
  const uploadRef = uploadBytesResumable(storageRef, payload.image)
  uploadRef.on("state_changed", (snapshot)=>);
  }

}
}
