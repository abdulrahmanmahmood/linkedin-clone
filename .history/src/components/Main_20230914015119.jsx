import styled from "styled-components"

const Main = () => {
  return <Container>
      <ShareBox>
        <div>
          {props.user && props.user?.photoURL? ()}
        </div>
      </ShareBox>
      <Content>

      </Content>
      <PostModel>

      </PostModel>
  </Container>
}

const Container = styled.div``;

export default Main