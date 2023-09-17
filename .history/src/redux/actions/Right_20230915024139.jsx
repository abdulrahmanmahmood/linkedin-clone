
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
        
      </Recommendation>
    </FollowCard>
  </Container>
}

export default Right