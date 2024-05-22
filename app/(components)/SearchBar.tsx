'use client'
import React from 'react'
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDateStore } from "@/app/(store)/store";

function SearchBar() {

  const rechercheTag = useDateStore((state) => state.rechercheTag); 
  const setRechercheTag = useDateStore((state) => state.setRechercheTag); 
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = (term:string) => {
    setRechercheTag("")
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("car", term);
    } else {
      params.delete("car");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <input
      className="px-4 py-2 border border-black rounded-md"
      placeholder="Rechercher"
      id="default-search"
      type="search"
      onChange={(e) => {
        handleSearch(e.target.value);
      }}
    />
  );
}

export default SearchBar;