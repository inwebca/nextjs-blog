import AllPosts from "../../components/posts/all-posts";

const DUMMY_POST = [
  {
    title: "Getting started with NextJS",
    slug: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    date: "2022-02-01",
    excerpt: "NextJS is the react framework for production",
  },
  {
    title: "Getting started with NextJS",
    slug: "getting-started-with-nextjs2",
    image: "getting-started-nextjs.png",
    date: "2022-02-01",
    excerpt: "NextJS is the react framework for production",
  },
  {
    title: "Getting started with NextJS",
    slug: "getting-started-with-nextjs3",
    image: "getting-started-nextjs.png",
    date: "2022-02-01",
    excerpt: "NextJS is the react framework for production",
  },
  {
    title: "Getting started with NextJS",
    slug: "getting-started-with-nextjs4",
    image: "getting-started-nextjs.png",
    date: "2022-02-01",
    excerpt: "NextJS is the react framework for production",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POST} />;
}

export default AllPostsPage;
