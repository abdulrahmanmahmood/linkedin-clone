import styled from "styled-components";

const PostModel = (props) => {
  if (props.showModel == true)
  return <Container>
    <Content>

    </Content>
  </Container>
  else
  return ;
}

const Container = styled.div``;
const Content = styled.div``;

export default PostModel