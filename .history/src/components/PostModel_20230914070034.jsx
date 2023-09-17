import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import ReactPlayer from "react-player";

const PostModel = (props) => {
  const [editorText, seteditorText] = useState("");
  const [assetArea, setassetArea] = useState("");
  const [shareImage, setshareImage] = useState("");
  const [videoLink, setvideoLink] = useState("");

  if (props.showModel == true)
    return (
      <Container>
        <Content>
          <Header>
            <h2>Create a post</h2>
            <button onClick={props.handleClick}>
              <img src="/images/close-icon.svg" alt="" />
            </button>
          </Header>
          <ShareContent>
            <UserInfo>
              {props.user && props.user.photoURL ? (
                <img src={props.user?.photoURL} />
              ) : (
                <img src="/images/user.svg" alt="" />
              )}
            </UserInfo>
            <Editor>
              <textarea
                value={editorText}
                onChange={(e) => seteditorText(e.target.value)}
                placeholder="What do you want to talk about?"
                autoFocus={true}
              />
              {assetArea === "image" ? (
                <UploadImage>
                  <input
                    type="file"
                    name="image"
                    id="file"
                    // onChange={handleChange}
                    style={{ display: "none" }}
                  />
                  <p>
                    <label
                      htmlFor="file"
                      style={{
                        cursor: "pointer",
                        display: "block",
                        marginBottom: "15px",
                      }}
                    >
                      Select an image to share
                    </label>
                  </p>
                  {shareImage && <img src="" alt="img" />}
                </UploadImage>
              ) : (
                assetArea ===
                "media"(
                  <>
                    <input
                      type="text"
                      value={videoLink}
                      onChange={(e) => setvideoLink(e.target.value)}
                      placeholder="please input a video link"
                      style={{ width: "100%", height: "30px" }}
                    />
                    {videoLink && <ReactPlayer width="100%" url={videoLink} />}
                  </>
                )
              )}
            </Editor>
          </ShareContent>
          <ShareCreation>
            <AttachAssets>
              <AssetButton>
                <img src="/images/share-image.svg" alt="" />
              </AssetButton>
              <AssetButton>
                <img src="/images/share-video.svg" alt="" />
              </AssetButton>
            </AttachAssets>
            <ShareComment>
              <AssetButton>
                <img src="/images/share-comment.svg" alt="" />
                Anyone
              </AssetButton>
            </ShareComment>
            <PostButton disapled={!editorText ? true : false}>Post</PostButton>
          </ShareCreation>
        </Content>
      </Container>
    );
  else return;
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  color: black;
  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.3s;
`;
const Content = styled.div`
  with: 100%;
  max-width:552px;
  background-color:white;
  max-height:99%;
  overflow:initial;
  border-radius:5px;
  position:relative;
  display:flex;
  flex-direction:column;
  top:32px;
  margin:0 auto;
  button{
    border:none;
    display:flex;
    justify-content: center;
    align-items:center;
    transition:background 0.3s ease;
  }
`;
const Header = styled.div`
  display:flex;
  justify-content: space-between;
  padding:16px 20px;
  border-bottom: 1px solid rgba(0,0,0,0.15);
  align-items:center;
  h2{
    line-height:1.5;
    font-weight:400;
    font-size:18px;
    color:rgba(0, 0, 0, 0.6);
  }
  button{
    height:40px;
    width:40px;
    
  }
`;
const ShareContent = styled.div``;
const UserInfo = styled.div``;
const Editor = styled.div``;
const UploadImage = styled.div``;
const ShareCreation = styled.div``;
const AttachAssets = styled.div``;
const AssetButton = styled.div``;
const ShareComment = styled.div``;
const PostButton = styled.div``;

function mapStateToProps(state) {
  return {
    user: state.userState.user,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModel);
