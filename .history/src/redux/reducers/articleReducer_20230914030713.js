import * as acions from "../actions/actionTypes";
export const initalState ={
  loading:false,
  articles:[]
}

 const articleReducer = (state = initalState, action)=>{
  switch(action.type)
  {
    case acions.SET_LOADING_STATUS:
      return{
        ...state,
      }

    default :
    return state;
  }
}