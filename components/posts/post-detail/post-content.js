import styles from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  title: "Getting started with NextJS",
  slug: "getting-started-with-nextjs",
  image: "getting-started-nextjs.png",
  date: "2022-02-01",
  content: "# Heading level 1",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {DUMMY_POST.content}
    </article>
  );
}
export default PostContent;
