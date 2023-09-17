import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PostModel from "./PostModel";
import ReactPlayer from "react-player";

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
            <img src="/images/event-icon.svg" alt="" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" alt="" />
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>

      {props.articles.length === 0 ? (
        <p>There are no artilces</p>
      ) : (
        <Content>
          {props.loading && <img src="images/loader.svg" />}
          {props.articles.length > 0 &&
            props.articles.map((article, index) => (
              <Article key={index}>
                <SharedActor>
                  <a>
                    <img src={article.actor.image} alt="" />
                    <div>
                      <span>{article.actor.title}</span>
                      <span>{article.actor.description}</span>
                      <span>
                        {article.actor.data.toDate().toLocalDataString()}
                      </span>
                    </div>
                  </a>
                  <button>
                    <img src="/images/ellipsis.svg" alt="" />
                  </button>
                </SharedActor>
                <Description>{article.description}</Description>
                <SharedImage>
                  <a>
                    {!article.shareImg && article.video ? (
                      <ReactPlayer width="100%" url={article.video} />
                    ) : (
                      article.shareImg && <img src={article.shareImg} />
                    )}
                  </a>
                </SharedImage>
                <SocialCounts>
                  <li>
                    <button>
                      <img src="https://static-exp1.licdn.com/sc/h/2uxqgankkcxm505qn812vqyss" alt="" />
                      <img src="https://static-exp1.licdn.com/sc/h/f58e354mjsjpdd67eq51cuh49" alt="" />
                      <span>75</span>
                    </button>
                  </li>
                  <li>
                    <a>{article.comments} comment</a>
                  </li>
                  <li>
                    <a>1 share</a>
                  </li>
                </SocialCounts>
                <SocialActions>
                  <button>
                    <img src="/images/like-icon.svg" alt="" />
                    <span>Like</span>
                  </button>
                  <button>
                    <img src="/images/comment-icon.svg" alt="" />
                    <span>Comment</span>
                  </button>
                  <button>
                    <img src="/images/share-icon.svg" alt="" />
                    <span>Share</span>
                  </button>
                  <button>
                    <img src="/images/send-icon.svg" alt="" />
                    <span>Send</span>
                  </button>
                </SocialActions>
              </Article>
            ))}
        </Content>
      )}
      <PostModel showModel={showModel} handleClick={handleClick} />
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
`;
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
const Content = styled.div`
  text-align:center;
  &>img{
    width:70px;
  }
`;
const Article = styled(CommonCard)`
  padding:0;
  margin: 0 0 8px;
  overflow: visible;
`;
const SharedActor =styled.div`
  flex-wrap:nowrap;
  padding:12px  16px 0;
  margin-bottom:8px;
  align-items:center;
  display:flex;
  a{
    margin-right:12px;
    flex-grow:1;
    overflow:hidden;
    display:flex;
    text-decoration:none;
    
    img{
      width:48px;
      height:48px;
      border-radius:50%;
    }
    &>div{
      display:flex;
      flex-direction:column;
      flex-grow:1;
      flex-
    }
  }
`; 
function mapStateToProps(state) {
  return {
    loading: state.articleState.loading,
    user: state.userState.user,
    articles: state.articleState.articles,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
