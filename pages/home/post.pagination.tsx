"use client";
import { Pagination } from "@/components/pagination";
import { useRouter, useSearchParams } from "next/navigation";

type PostPaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function PostPagination({
  currentPage,
  totalPages,
}: PostPaginationProps) {
  const params = useSearchParams();
  const router = useRouter();

  function handlePageChange(page: number) {
    const searchParams = new URLSearchParams(params ?? "");
    searchParams.set("page", page.toString());
    router.push(`/?${searchParams.toString()}`, { scroll: false });
  }

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}
