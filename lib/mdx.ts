import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const rootDirectory = process.cwd();
const akademiDirectory = path.join(rootDirectory, 'akademi');

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
};

export function getPostBySlug(slug: string, lang: string) {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(akademiDirectory, lang, `${realSlug}.mdx`);
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      meta: data as Omit<PostMetadata, 'slug'>,
      content,
    };
  } catch (error) {
    console.error(`Makale bulunamadı: ${fullPath}`);
    return null;
  }
}

export function getAllPosts(lang: string): PostMetadata[] {
  const langDirectory = path.join(akademiDirectory, lang);
  
  if (!fs.existsSync(langDirectory)) {
    return [];
  }

  const files = fs.readdirSync(langDirectory);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const post = getPostBySlug(file, lang);
      if (!post) return null;
      return {
        ...post.meta,
        slug: post.slug,
      };
    })
    .filter(Boolean) as PostMetadata[];

  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}