import * as actions from "../actions/actionTypes";
export const initalState ={
  loading:false,
  articles:[]
}

.GET_ARTICLES const articleReducer = (state = initalState, action)=>{
  switch(action.type)
  {
    case actions.SET_LOADING_STATUS:
      return{
        ...state,
      }
      case actions.GET_ARTICLES

    default :
    return state;
  }
}