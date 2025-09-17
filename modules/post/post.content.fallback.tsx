import { Skeleton } from "@/components/skeleton";

export function PostContentFallback() {
  return (
    <div className="space-y-16">
      <section
        aria-labelledby="Conteúdo da postagem - Carregando..."
        className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-8 auto-rows-[25rem]"
      >
        <Skeleton className="size-full rounded-sm" />
        <Skeleton className="size-full rounded-sm" />
      </section>
      <Skeleton className="h-25 w-full" />
    </div>
  );
}
