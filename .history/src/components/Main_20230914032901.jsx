import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const Main = (props) => {
  const [showModel, setShowModel] = useState(true);
  const handleClick = () => {
    setShowModel(!showModel);
  };
  return (
    <Container>
      <ShareBox>
        <div>
          {props.user && props.user.photoURL ? (
            <img src="/images/user.svg" alt="" />
          ) : (
            <img src="/images/user.svg" />
          )}
          <button onClick={handleClick} disabled={props.loading ? true : false}>
            Start a post
          </button>
        </div>
      </ShareBox>
      <Content></Content>
      <PostModel></PostModel>
    </Container>
  );
};

const Container = styled.div``;
const ShareBox = styled.div``;
const Content = styled.div``;
const PostModel = styled.div``;

function mapStateToProps(state) {
  return {
    loading:state.article
    user: state.userState.user,
    
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
