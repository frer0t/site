import Image from "next/image";

const BlogImage = ({
  src,
  alt,
  caption,
  height = 360,
  rounded = 18,
}: {
  src?: string;
  alt?: string;
  caption?: string;
  height?: number;
  rounded?: number;
}) => {
  if (!src) return null;

  return (
    <figure className="my-8">
      <div className="relative w-full overflow-hidden" style={{ height, borderRadius: rounded }}>
        <Image src={src} alt={alt || caption || ""} fill className="object-cover" sizes="100vw" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-center font-mono text-[12.5px] text-metal-400 dark:text-metal-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage;
