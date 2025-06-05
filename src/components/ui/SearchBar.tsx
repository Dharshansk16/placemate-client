import React from "react";
import { Search } from "lucide-react";

type SearchBarProps = {
  div_variant?: string;
  input_variant?: string;
  placeholder?: string;
  onKeyDownMethod?: React.KeyboardEventHandler<HTMLInputElement>;
};

const SearchBar = ({
  div_variant,
  input_variant,
  placeholder,
  onKeyDownMethod,
}: SearchBarProps) => {
  return (
    <div className={div_variant}>
      <Search />
      <input
        type="text"
        placeholder={placeholder}
        className={input_variant}
        onKeyDown={onKeyDownMethod}
      />
    </div>
  );
};

export default SearchBar;
