"use client";

import { FilterType } from "@/types/filter-types";
import { createContext, ReactNode, useState } from "react";

export const FilterContext = createContext({
  search: "",
  page: 0,
  type: FilterType.ALL,
  setSearch: (value: string) => {},
  setPage: (value: number) => {},
  setType: (value: FilterType) => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function FIlterContextProvider({ children }: ProviderProps) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [type, setType] = useState(FilterType.ALL);

  return (
    <FilterContext.Provider
      value={{ search, page, type, setSearch, setType, setPage }}
    >
      {children}
    </FilterContext.Provider>
  );
}
