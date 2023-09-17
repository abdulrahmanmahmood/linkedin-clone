import { useEffect } from "react";
import { connect } from "react-redux"
import { useNavigate } from "react-router-dom"

const RequireAuth = ( {user, children}) => {
  const navigate = useNavigate();
  useEffect(()=>{
    if(!user){
      navigate('/', {replace:true});
    return;
    }
  
  },[user]);
  return children
}

function mapStateToProps(state){
  return{
    user:state.userState.user,
  }
}

function mapDispatchToProps(){
return{}
}

export default connect(mapStateToProps , mapDispatchToProps)(RequireAuth)