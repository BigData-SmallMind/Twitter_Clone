import Post from "./Post";

const Posts = (props) => {
  const { posts } = props;
  return (
    <ul>
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default Posts;
