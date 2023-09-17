import * as actions from './actionTypes'
export const setUser = (payload)=>{
  return{
    type: actions.SET_USER,
    user:payload,
  }
};


export const 