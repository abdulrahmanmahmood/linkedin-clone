import styled from "styled-components"

const Main = () => {
  return <Container>
      <ShareBox>
        <div>
          {props.user && props.user?.photoURL? (<img/>)}
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