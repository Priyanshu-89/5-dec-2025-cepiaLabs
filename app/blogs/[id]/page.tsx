type Props = {
  params: { id: string };
};

export default async function BlogDetailPage(
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

 
  const postRes = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await postRes.json();


  const userRes = await fetch(
    `https://jsonplaceholder.typicode.com/users/${post.userId}`
  );
  const user = await userRes.json();

  return (
    <div className="w-full min-h-screen bg-slate-700 py-12">
      <div className="p-6 rounded-lg shadow max-w-3xl bg-[#CDBCA8] mx-auto">
        <h1 className="text-3xl font-bold text-[#46586b]">{post.title}</h1>
        <p className="mt-4 text-[#435160] leading-relaxed">{post.body}</p>

        <div className="mt-6 p-4 bg-slate-700 rounded-lg">
          <h3 className="font-semibold text-lg text-[#CDBCA8]">
            Author: <span className="italic font-light text-[#CDBCA8]">{user.name}</span>
          </h3>
          <p className="text-[#CDBCA8] font-semibold text-sm">{user.email}</p>
        </div>

        <a
          href="/blogs"
          className="mt-6 inline-block text-[#324b63] hover:underline"
        >
          ← Back to Blogs
        </a>
      </div>
    </div>
  );
}
