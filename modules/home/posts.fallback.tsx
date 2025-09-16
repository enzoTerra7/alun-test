import { Skeleton } from "@/components/skeleton";

export function PostsFallback() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <Skeleton key={index} className="h-[300px] w-full" />
      ))}
    </div>
  );
}
