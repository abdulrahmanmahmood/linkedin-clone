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
const FollowCard = st

export default Right