import * as actions from "../actions/actionTypes";
export const initalState ={
  loading:tr,
  articles:[]
}


 const articleReducer = (state = initalState, action)=>{
  switch(action.type)
  {
    case actions.SET_LOADING_STATUS:
      return{
        ...state,
      }
      case actions.GET_ARTICLES:
      return{
        ...state,
        action: action.payload,

      }

    default :
    return state;
  }
}

export default articleReducer;