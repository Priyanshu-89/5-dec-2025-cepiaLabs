import Link from "next/link";

type BlogCardProps = {
  id: number;
  title: string;
  body: string;
};

export default function BlogCard({ id, title, body }: BlogCardProps) {
  return (
    <div className="bg-[#4f5e6c] shadow-md p-5 rounded-lg w-full hover:shadow-xl transition duration-200">
      <h2 className="text-xl font-semibold text-[#c19d74]">{title}</h2>
      <p className="text-[#CDBCA8]/90 mt-2">{body.slice(0, 50)}...</p>

      <Link
        href={`/blogs/${id}`}
        className="text-[#CDBCA8] mt-4 inline-block font-medium hover:underline"
      >
        Read More →
      </Link>
    </div>
  );
}
