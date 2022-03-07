import Link from "next/link";
import Image from "next/image";
import { baseurl } from "../../baseurl";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <Link href={`post/${post.id}`}>
        <div>
          <div className="thumbnail">
            {post.attributes.thumbnail.data?.attributes.url ? (
              <Image
                src={baseurl + post.attributes.thumbnail.data?.attributes.url}
                width={post.attributes.thumbnail.data.attributes.width}
                height={post.attributes.thumbnail.data.attributes.height}
              />
            ) : null}
          </div>
          <h2>{post.attributes.title}</h2>
          <p>{post.attributes.summary}</p>
        </div>
      </Link>

      <style jsx>{`
        .post-card {
          border: 2px solid gray;
          padding: 9px;
          margin-bottom: 30px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default PostCard;
