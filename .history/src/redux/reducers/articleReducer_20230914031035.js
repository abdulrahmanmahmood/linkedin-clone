import * as actions from "../actions/actionTypes";
export const initalState ={
  loading:false,
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
        loading: action.sta

      }

    default :
    return state;
  }
}

export default articleReducer;