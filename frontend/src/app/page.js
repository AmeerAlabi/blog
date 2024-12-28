import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <p>Explore articles, thoughts, and tutorials!</p>
      <Link href="/posts">View All Posts</Link>
    </div>
  );
}
