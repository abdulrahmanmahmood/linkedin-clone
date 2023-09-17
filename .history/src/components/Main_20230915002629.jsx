import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModel from "./PostModel";

const Main = (props) => {
  const [showModel, setShowModel] = useState(false);
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
        <div>
          <button>
          <img src="/images/photo-icon.svg" alt="" />
          <span>photo</span>
          </button>
          <button>
          <img src="/images/video-icon.svg" alt="" />
          <span>video</span>
          </button>
          <button>
          <img src="/images/article-icon.svg" alt="" />
          <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <Content></Content>
      <PostModel showModel={showModel} handleClick={handleClick}/>
    </Container>
  );
};

const Container = styled.div`
  grid-area: main;
`;
const CommonCard = styled.div`
text-align: center;
overflow: hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
position: relative;
box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 1px rgb(0 0 0 / 20%);
`
const ShareBox = styled(CommonCard)`
display: flex;
flex-direction: column;
color: #958b7b;
margin: 0 0 8px;
background: white;
div {
  button {
    outline: none;
    color: rgba(0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
    min-height: 48px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s ease;
    border-radius: 5px;
    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }
  &:first-child {
    display: flex;
    align-items: center;
    padding: 8px 16px 8px 16px;
    img {
      width: 48px;
      border-radius: 50%;
      margin-right: 8px;
    }
    button {
      margin: 4px 0;
      flex-grow: 1;
      border-radius: 35px;
      padding-left: 16px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      background: white;
      color: rgba(0, 0, 0, 0.7);
      font-weight: 500;
      font-size: 14px;
      &:hover {
        background: rgba(0, 0, 0, 0.08);
      }
      text-align: left;
    }
  }
  &:nth-child(2) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 4px;
    button {
      img {
        margin: 0 4px;
      }
      span {
        color: #70b5f9;
        margin-top: 2px;
      }
    }
  }
}
`;
const Content = styled.div``;
// const PostModel = styled.div``;

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
