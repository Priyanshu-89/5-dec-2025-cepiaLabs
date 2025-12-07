import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center bg-slate-700 w-full h-screen py-16">
      <h1 className="text-4xl font-bold text-[#CDBCA8]">Blog Explorer</h1>
      <p className="mt-4 text-lg text-[#CDBCA8]">
        Browse blogs from JSONPlaceholder
      </p>
      <Link
        href="/blogs"
        className="mt-6 inline-block px-6 py-2 bg-[#CDBCA8] text-[#6B7A89] rounded-lg font-semibold hover:bg-[#BFB195] transition"
      >
        View All Blogs
      </Link>
    </div>
  );
}
