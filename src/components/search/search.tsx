"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { useDebounce } from "@/src/hooks/useDebounce";

interface CommonSearchProps {
  placeholder?: string;
  delay?: number;
  onSearch: (value: string) => void;
  className?: string;
}

 const SearchComponent=({
  placeholder = "Search...",
  delay = 500,
  onSearch,
  className = "",
}: CommonSearchProps)=> {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, delay);

  // Trigger search when debounced value updates
  // (user stops typing)
useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <div
      className={`flex items-center gap-2 border rounded-xl px-3 py-2 w-full bg-white ${className}`}
    >
      <Search size={18} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full outline-none bg-transparent text-sm"
        placeholder={placeholder}
      />
    </div>
  );
}


export default SearchComponent;