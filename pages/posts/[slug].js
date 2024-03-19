import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData } from "../../helpers/posts-util";

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const data = getPostData(slug);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data ? data : null,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

function SinglePostPage(props) {
  return <PostContent post={props.post} />;
}

export default SinglePostPage;
