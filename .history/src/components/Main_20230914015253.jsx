import styled from "styled-components"

const Main = () => {
  return <Container>
      <ShareBox>
        <div>
          {props.user && props.user?.photoURL? (<img  src="/images/user.svg" alt=""/>):(<img src="/images/user.svg" />)}
          <button onClick={}>
            Start a post
          </button>
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