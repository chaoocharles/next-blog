import axios from "axios";
import { baseurl } from "../baseurl";
import PostCard from "../components/content/PostCard";

export default function Home({ posts }) {
  return (
    <div>
      {console.log(posts)}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get(baseurl + "/api/posts?populate=*");

  return {
    props: {
      posts: res.data.data,
    },
  };
}
