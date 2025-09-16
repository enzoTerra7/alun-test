import Image from "next/image";
import Link from "next/link";

type PostCard = {
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  id: string;
};

export function PostCard({
  title,
  description,
  imageUrl,
  category,
  id,
}: PostCard) {
  return (
    <div className="flex flex-col gap-[1.625rem] border border-primary rounded-sm p-6 bg-background transition-shadow duration-200 hover:shadow-lg hover:shadow-primary/50">
      <div className="grid place-items-end place-content-end">
        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={300}
          className="row-start-1 row-end-2 col-start-1 col-end-2"
        />
        <div className="row-start-1 row-end-2 col-start-1 col-end-2 w-full max-w-[9.375rem] h-[1.875rem] bg-primary content-center">
          <p className="text-primary-foreground text-sm font-normal text-center">
            {category}
          </p>
        </div>
      </div>
      <h5 className="text-secondary font-chakra-petch text-xl font-bold text-balance line-clamp-2">
        {title}
      </h5>
      <p className="text-foreground text-sm font-normal line-clamp-3">
        {description}
      </p>
      <Link
        href={`/blog/${id}`}
        className="text-primary text-base font-bold w-fit"
      >
        Ler mais
      </Link>
    </div>
  );
}
