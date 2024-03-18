import styles from "./posts-grid.module.css";
import PostItem from "./post-item";

function PostsGrid(props) {
  const { posts } = props;
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
}

export default PostsGrid;
