import Image from "next/image";

const Gallery = ({ images }: { images: { src?: string; caption: string }[] }) => {
  const withSrc = images.filter((img) => img.src);
  if (withSrc.length === 0) return null;

  return (
    <div className="my-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3">
      {withSrc.map((img, i) => (
        <div key={i}>
          <div className="relative h-[150px] w-full overflow-hidden rounded-2xl">
            <Image
              src={img.src as string}
              alt={img.caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="mt-2 text-center font-mono text-[11.5px] text-metal-400 dark:text-metal-500">
            {img.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
