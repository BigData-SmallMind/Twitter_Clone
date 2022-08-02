import Post from "./Post";

const Posts = (props) => {
  const { posts, liftedLoadingState } = props;
  return (
    <ul>
      {posts.map((post) => {
        return (
          <Post key={post.id} post={post} liftedState={liftedLoadingState} />
        );
      })}
    </ul>
  );
};

export default Posts;
