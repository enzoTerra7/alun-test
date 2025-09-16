export function usePagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  const current = Math.min(currentPage, totalPages);
  const total = Math.max(1, totalPages);

  if (total <= 3) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  if (current < 3) {
    return [1, 2, 3];
  }

  if (current === total) {
    return [total - 2, total - 1, current];
  }

  return [current - 1, current, current + 1];
}