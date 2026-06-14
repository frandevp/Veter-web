 
type Post = {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

export default async function Blog() {
  const res = await fetch("https://veter.es/wp-json/wp/v2/posts?per_page=10");
  const posts: Post[] = await res.json();

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-gray-800 mb-10">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <a href={`/blog/${post.slug}`} key={post.id} className="bg-white rounded-xl shadow p-6 hover:shadow-md transition">
            <h2 className="font-semibold text-lg text-gray-800 mb-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="text-gray-500 text-sm"
              dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}