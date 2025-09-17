export function PostContentText({ content }: { content: string }) {
  return (
    <p className="text-foreground text-base font-normal whitespace-pre-wrap text-justify">
      {content}
    </p>
  );
}
