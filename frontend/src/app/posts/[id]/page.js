import api from '../../../utils/api'; 

export default async function PostDetails({ params }) {
  const { id } = params; 

  try {
    const response = await api.get(`/posts/${id}`);
    const post = response.data;

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  } catch (error) {
    console.error('Error fetching post:', error.message);
    return <p>Error fetching post.</p>;
  }
}
