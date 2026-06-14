import { notFound } from "next/navigation";

type WPPost = {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
};

export default async function BlogPost({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;

  const res = await fetch(
    `https://veter.es/wp-json/wp/v2/posts?slug=${slug}&_fields=id,slug,title,content,date`,
    { next: { revalidate: 3600 } }
  );

  const posts: WPPost[] = await res.json();

  if (!posts.length) notFound();

  const post = posts[0];

  const fecha = new Date(post.date).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <a href="/blog" className="text-sm text-[#104766] hover:underline mb-8 inline-block">
        ← Volver al blog
      </a>

      <h1
        className="text-3xl font-bold text-gray-900 mb-3 mt-4"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />

      <p className="text-sm text-gray-400 mb-10">{fecha}</p>

      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}
