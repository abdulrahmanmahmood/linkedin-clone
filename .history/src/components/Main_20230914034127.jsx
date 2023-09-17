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

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
  text-align:center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position:relative;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%) , 0 0 1px rgb(0 0 0 / 20%);

`

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  div {
    button {
      outline: none;
      color: rgba(0, 0, 0.6);
      font-size:14px;
      line-height:1.5;
      min-height:48px;
      background: transparent;
      border:none;
      display:flex;
      align-items:center;
      font-weight: 500;
      cursor: pointer;
      transition: background 0,3s ease;
      border-radu

    }
  }
`;
const Content = styled.div``;
const PostModel = styled.div``;

function mapStateToProps(state) {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
