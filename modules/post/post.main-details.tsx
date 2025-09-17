import { buttonVariants } from "@/components/button";
import Image from "next/image";

export function PostMainDetails({
  imageUrl,
  title,
  category,
  tags,
}: {
  imageUrl: string;
  title: string;
  category: string;
  tags: string[];
}) {
  return (
    <header className="flex flex-col-reverse lg:flex-row items-stretch gap-x-6 gap-y-8">
      <div className="flex flex-col flex-1 gap-y-6">
        <h1 className="text-secondary font-chakra-petch text-xl md:text-2xl lg:text-5xl font-bold text-balance">
          {title}
        </h1>
        <div className="flex flex-col gap-y-5">
          <p className="text-foreground text-sm md:text-base font-bold">
            Categoria:
          </p>
          <div
            className={buttonVariants({
              variant: "default",
              className: "w-fit pointer-events-none",
            })}
          >
            {category}
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <p className="text-foreground text-sm md:text-base font-bold">
            Tags:
          </p>
          <ul className="flex gap-x-3.5 items-center">
            {tags.map((tag) => (
              <li key={tag} className={buttonVariants({ variant: "outline", className: "pointer-events-none" })}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Image
          src={imageUrl}
          alt={`Banner da postagem ${title}`}
          width={400}
          height={300}
          className="w-full max-h-96 object-center object-cover"
        />
      </div>
    </header>
  );
}
