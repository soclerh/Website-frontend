import BlogHero from "@/components/blog/BlogHero";
import AllBlogs from "@/components/blog/AllBlogs";
import { getBlogData } from "@/data/loader";
import { getDictionary } from "@/app/dictionaries"; // Import the dictionary

export default async function Blog({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // 1. Fetch Static Translations
  const dict = await getDictionary(lang);

  // 2. Fetch Dynamic Data (Strapi)
  const response = await getBlogData(lang);
  const blogs = response?.data || [];

  return (
    <div className="flex flex-col">
      {/* Pass the dictionary to components */}
      <BlogHero dict={dict.blog} />
      <AllBlogs data={blogs} dict={dict.blog} />
    </div>
  );
}
