import styled from "styled-components";

const PostModel = (props) => {
  if (props.showModel == true)
  return <Container>
    <Content>
      <Header>
        <h2>Create a post</h2>
        <button>
          <img src="/images/" alt="" />
        </button>
      </Header>
    </Content>
  </Container>
  else
  return ;
}

const Container = styled.div``;
const Content = styled.div``;
const Header = styled.div``;

export default PostModel