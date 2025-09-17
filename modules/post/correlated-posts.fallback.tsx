import { Skeleton } from "@/components/skeleton";

export function CorrelatedPostsFallback() {
  return (
    <section aria-label="Posts relacionados - Carregando...">
      <Skeleton className="h-10 w-full" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[25rem] gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="size-full rounded-sm" />
        ))}
      </div>
    </section>
  );
}
