"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const predefinedSuggestions = [
  "مدرن",
  "استخر دار",
  "اپارتمان",
  "حیاط دار",
  "باغ",
];

const SearchBG: React.FC = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value) {
      const filteredSuggestions = predefinedSuggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);

    if (query.trim() === "") {
      params.set("search", query);
      params.delete("search");
      const newUrl = `/?${params.toString()}`;
      router.push(newUrl, { scroll: false });
      return;
    } else {
      console.log(query);
      params.set("search", query);
      const newUrl = `/?${params.toString()}`;
      router.push(newUrl, { scroll: false });
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="bg-opacity-70 backdrop-blur-lg p-6 rounded-lg w-full max-w-lg mx-4">
        <h1 className="text-orange-500 text-center text-5xl py-2 rounded mb-6">
          زمینه تو پیدا کن
        </h1>
        <div className="flex">
          <input dir="rtl"
            type="text"
            value={query}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="دنبال چی میگردی؟"
            className="flex-1 p-3 border rounded-l-lg focus:outline-none"
          />
          <button
            onClick={handleSearch}
            className="bg-orange-500 text-white p-3 rounded-r-lg flex items-center justify-center hover:bg-orange-600"
          >
            <FaSearch />
          </button>
        </div>
        {suggestions.length > 0 && (
          <ul
            dir="rtl"
            className="mt-2 border border-gray-300 rounded-lg bg-white bg-opacity-70 backdrop-blur-lg"
          >
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setQuery(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchBG;
