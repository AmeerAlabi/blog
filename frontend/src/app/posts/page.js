import Link from "next/link";
import api from "../utils/api";

export default async function Posts() {
  try {
    const response = await api.get('/posts'); 
    const posts = response.data;

    return (
      <div>
        <h1>All Blog Posts</h1>
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post) => (
            <div key={post._id}>
              <h2>{post.title}</h2>
              <p>{post.content.substring(0, 100)}...</p>
              <Link href={`/posts/${post._id}`}>Read More</Link>
            </div>
          ))
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    return <p>Error fetching posts.</p>;
  }
}
