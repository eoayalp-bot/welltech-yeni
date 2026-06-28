import Image from 'next/image';

interface MDXImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  caption?: string;
}

export default function MDXImage({ src, alt, width = 800, height = 500, caption }: MDXImageProps) {
  return (
    <figure className="my-10 flex flex-col items-center justify-center not-prose group">
      <div 
        className="relative w-full overflow-hidden rounded-2xl shadow-md border border-gray-200 transition-all duration-500 group-hover:shadow-xl" 
        style={{ maxWidth: width }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 50vw"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 text-sm text-center text-gray-500 font-medium bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}