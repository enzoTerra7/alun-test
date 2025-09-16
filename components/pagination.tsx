import { Button } from "./button";
import { usePagination } from "@/hooks/use-pagination";

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  const pages = usePagination({ currentPage, totalPages });
  return (
    <div className="flex justify-center gap-x-4">
      {pages.map((page) => (
        <Button
          variant={"pagination"}
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
        >
          {page}
          <span className="sr-only">
            {page === currentPage ? "Página atual" : `Ir para a página ${page}`}
          </span>
        </Button>
      ))}
    </div>
  );
}
