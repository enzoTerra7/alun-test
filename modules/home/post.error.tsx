export function PostError({ cause }: { cause: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-xl md:text-2xl text-secondary font-chakra-petch font-bold max-w-xl mx-auto text-center">
        {cause}
      </h2>
    </div>
  );
}
