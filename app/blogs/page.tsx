import Link from "next/link";
import BlogCard from "../components/BlogCard";
import { IoHomeOutline } from "react-icons/io5";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default async function BlogsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div className="w-full bg-slate-700 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 flex gap-x-2 items-center text-[#CDBCA8]">
          <Link href="/">
            <IoHomeOutline />
          </Link>
          All Blogs
        </h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
