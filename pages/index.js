import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

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

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POST} />
    </Fragment>
  );
}

export default HomePage;
