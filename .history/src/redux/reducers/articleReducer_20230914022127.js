const initalState ={
  loading:false,
  articles:[]
}

export const articleReducer = (state = initalState, action)=>{
  switch(action.type)
  {
    case "":
      return

    default :
    return state;
  }
}