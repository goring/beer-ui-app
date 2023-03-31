import { getBeers } from "@/lib/api";
import React from "react";
import AsyncSelect from "react-select/async";
import { MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export type SearchProps = {};

const Search = (props: SearchProps) => {
  const router = useRouter();

  const loadOptions = async (inputValue: string) => {
    const data = await getBeers({
      beer_name: inputValue,
    });

    return data.map((beer: any) => ({
      label: beer.name,
      value: beer.id,
    }));
  };

  return (
    <div className="">
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        noOptionsMessage={() => "Start typing..."}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            // primary25: "#f7fafc",
            // primary: "#FFFCF8",
          },
        })}
        placeholder="Search beers..."
        onChange={(value) => {
          if (!value) return;

          router.push(`/beer/${value.value}`);
        }}
        components={{
          IndicatorSeparator: () => <div className="px-2" />,
          DropdownIndicator: () => (
            <SearchIcon className="h-6 w-5 text-slate-700 -ml-4 mr-2" />
          ),
        }}
        styles={{
          container: (provided) => ({
            ...provided,
            width: 300,
          }),
        }}
      />
    </div>
  );
};

export default Search;
