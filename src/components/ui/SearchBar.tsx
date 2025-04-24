import React from "react";
import { Search } from "lucide-react";

type SearchBarProps = {
  div_variant?: string;
  input_variant?: string;
  placeholder?: string;
};

const SearchBar = ({
  div_variant,
  input_variant,
  placeholder,
}: SearchBarProps) => {
  return (
    <div className={div_variant}>
      <Search />
      <input type="text" placeholder={placeholder} className={input_variant} />
    </div>
  );
};

export default SearchBar;
