import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/posts");

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //removes file extension

  const filePath = path.join(postsDir, `${postSlug}.md`);

  try {
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const postData = {
      slug: postSlug,
      ...data,
      content: content,
    };
    return postData;
  } catch (error) {
    console.error("Erreur lors de la lecture du fichier:", error);
  }
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDir);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return allPosts.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
