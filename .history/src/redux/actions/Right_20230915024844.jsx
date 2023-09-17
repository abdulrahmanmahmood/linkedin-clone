import styled from "styled-components";

const Right = () => {
  return <Container>
    <FollowCard>
      <Title>
        <h2>Add to your feed</h2>
        <img src="/images/feed-icon.svg" alt="" />
      </Title>
      <FeedList>
        <li>
          <a>
            <Avatar/>
          </a>
          <div>
            <span>#Linkedin</span>
            <button>Follow</button>
          </div>
        </li>
        <li>
          <a>
            <Avatar/>
          </a>
          <div>
            <span>#video</span>
            <button>Follow</button>
          </div>
        </li>
      </FeedList>
      <Recommendation>
        View all recommendation
        <img src="/images/right-icon.svg" alt="" />
      </Recommendation>
    </FollowCard>
    <BannerCard>
      <img src="/images/banner-image.jpg" alt="" />
    </BannerCard>
  </Container>
};

const Container = styled.div`
  grid-area: rightside;
`;
const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom:8px;
  background-color: #fff;
  border-radius:5px;
  position: relative;
  border:none;
  box-shadow;
  padding:12px;
`;
const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color:rgba(0, 0, 0, 0.6);
`;
const FeedList = styled.ul`
  margin-top:16px;
  li{
    display:flex;
    align-items:center;
    margin:12px;
    position:relative;
    font-size: 14px;
    
  }
`;
export default Right