import axios from "axios";
import { useRouter } from "next/router";
import MarkdownIt from "markdown-it";
import parse from "html-react-parser";
import { baseurl } from "../../baseurl";
import Image from "next/image";

const Post = ({ post }) => {
  const router = useRouter();
  const md = new MarkdownIt();

  const { title, summary, content, thumbnail } = post.attributes;
  console.log("post", post);

  return (
    <>
      <button className="back-btn" onClick={() => router.back()}>
        Back
      </button>
      <article>
        <div className="thumbnail">
          {thumbnail.data?.attributes.url ? (
            <Image
              src={baseurl + thumbnail.data?.attributes.url}
              width={thumbnail.data.attributes.width}
              height={thumbnail.data.attributes.height}
            />
          ) : null}
        </div>
        <header>
          <h1>{title}</h1>
          <p>{summary}</p>
        </header>
        <section className="article">{parse(md.render(content))}</section>
      </article>

      <style jsx>{`
        .back-btn {
          cursor: pointer;
          outline: none;
          border: none;
          background: black;
          padding: 7px 12px;
          border-radius: 3px;
          color: white;
        }
        .thumbnail {
          margin: 20px 0;
        }
      `}</style>
    </>
  );
};

export default Post;

export async function getStaticProps({ params }) {
  const res = await axios.get(
    baseurl + "/api/posts/" + params.id + "?populate=*"
  );

  return {
    props: {
      post: res.data.data,
    },
  };
}

export async function getStaticPaths() {
  const res = await axios.get(baseurl + "/api/posts");

  const paths = res.data.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });

  return {
    paths: paths,
    fallback: false,
  };
}
