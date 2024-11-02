import { notFound } from "next/navigation";
import { CustomMDX } from "~/components/CustomMDX";
import { getAllContentSlugs, getContentData } from "~/utils/mdx";

export async function generateStaticParams() {
  const slugs = getAllContentSlugs().map((item) => item.toString());
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = getContentData(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function page({ params }: { params: { slug: string } }) {
  const post = getContentData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-8 px-4 text-white mt-16 flex flex-col items-center sm:py-12 md:py-16 lg:py-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold mb-4 text-primary-500 text-center">
        {post.title}
      </h1>
      <CustomMDX source={post.content} />
    </article>
  );
}
