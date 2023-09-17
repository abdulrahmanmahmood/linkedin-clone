import { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const PostModel = (props) => {
  const [editorText, seteditorText] = useState("");
  const [assetArea, setassetArea] = useState("");
  const [shareImage, setshareImage] = useState("");

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
              {assetArea === "image" ? (<UploadImage>
                <input type="file" name="image" id="file" onChange={handleChange} style={{display:"none"}}/>
                <p>
                  <label htmlFor="file" style={{
                    cursor:"pointer",
                    display:"block",
                    marginBottom:"15px",
                  }}>
                    Select an image to share
                  </label>
                </p>
                {shareImage && (<img  alt="img"/>)}
              </UploadImage>): assetArea ===""(<UploadVideo>

              </UploadVideo>)}
            </Editor>
          </ShareContent>
        </Content>
      </Container>
    );
  else return;
};

const Container = styled.div``;
const Content = styled.div``;
const Header = styled.div``;
const ShareContent = styled.div``;
const UserInfo = styled.div``;
const Editor = styled.div``;

function mapStateToProps(state) {
  return {
    user: state.userState.user,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PostModel);
