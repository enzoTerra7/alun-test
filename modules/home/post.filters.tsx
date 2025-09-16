"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { POST_ALLOWED_CATEGORIES_FILTER } from "@/constants/posts";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "@/components/input";
import { SearchIcon } from "lucide-react";
import { Button } from "@/components/button";

export function PostFilters() {
  const params = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState(params?.get("category") ?? "");

  const handleQueryChange = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchParams = prepareSearchParams("tag", e.target.value);
      pushFilters(searchParams);
    },
    500
  );

  function handleCategoryChange(e: string) {
    if (category === e) {
      setCategory("");
      const searchParams = prepareSearchParams("category", "");
      pushFilters(searchParams);
      return;
    }

    setCategory(e);
    const searchParams = prepareSearchParams("category", e);
    pushFilters(searchParams);
  }

  function prepareSearchParams(key: string, value: string) {
    const searchParams = new URLSearchParams(params ?? "");
    searchParams.delete("page");
    searchParams.set(key, value);
    return searchParams.toString();
  }

  function pushFilters(params: string) {
    router.push(`/?${params}`, { scroll: false });
  }

  return (
    <div className="w-full flex items-center justify-between gap-x-4">
      <div className="flex items-center gap-x-8">
        <h1 className="font-chakra-petch text-secondary text-2xl font-bold">
          Minha postagens
        </h1>
        <SearchFilter
          defaultValue={params?.get("tag") ?? ""}
          haveCategory={!!category}
          onChange={handleQueryChange}
        />
      </div>
      <CategoryFilter
        defaultValue={category}
        haveTag={!!params?.get("tag")}
        onChange={handleCategoryChange}
      />
    </div>
  );
}

function SearchFilter({
  defaultValue,
  haveCategory,
  onChange,
}: {
  defaultValue: string;
  haveCategory: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  if (haveCategory) {
    return null;
  }
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Buscar..."
        aria-label="Pesquisar postagens"
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <SearchIcon className="absolute right-2 top-1/2 -translate-y-1/2 text-primary" />
    </div>
  );
}

function CategoryFilter({
  haveTag,
  defaultValue,
  onChange,
}: {
  haveTag: boolean;
  defaultValue: string;
  onChange: (e: string) => void;
}) {
  const CATEGORY_LIST = useMemo(() => {
    if (defaultValue) {
      return POST_ALLOWED_CATEGORIES_FILTER.filter(
        (ctg) => ctg.slug === defaultValue
      );
    }
    return POST_ALLOWED_CATEGORIES_FILTER;
  }, [defaultValue]);
  if (haveTag) {
    return null;
  }
  return (
    <div className="flex items-center gap-x-8">
      <p className="font-chakra-petch text-secondary text-2xl font-bold">
        Categorias
      </p>
      <div className="flex items-center gap-x-4 max-w-[17.25rem] overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        {CATEGORY_LIST.map((ctg) => (
          <Button
            key={ctg.slug}
            variant={defaultValue === ctg.slug ? "destructive" : "default"}
            onClick={() => onChange(ctg.slug)}
            className="w-fit whitespace-nowrap"
          >
            {ctg.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
