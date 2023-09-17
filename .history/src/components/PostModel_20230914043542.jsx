import styled from "styled-components";

const PostModel = (props) => {
  if (props.showModel == true)
  return <Container>
    <Content>
      <Header>
        <h2>Create a post</h2>
        <button onClick={props.handleClick}>
          <img src="/images/close-icon.svg" alt="" />
        </button>
      </Header>
      <ShareContent>
        <UserInfo>
          {
            props.user
          }
        </UserInfo>
      </ShareContent>
    </Content>
  </Container>
  else
  return ;
}

const Container = styled.div``;
const Content = styled.div``;
const Header = styled.div``;
const ShareContent = styled.div``;
const UserInfo = styled.div``;


export default PostModel