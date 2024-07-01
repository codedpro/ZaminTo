"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const links = [
  "شخصی",
  "دریا",
  "جنگل",
  "سند تک برگ",
  "سند شورایی",
  "تجاری",
];
const Filters = () => {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    const params = new URLSearchParams(searchParams);

    if (active === link) {
      setActive("");
      params.delete("filter");
    } else {
      setActive(link);
      params.set("filter", link);
    }

    const newUrl = `/?${params.toString()}`;
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex justify-center py-6">
      <ul className="flex flex-wrap sm:flex-nowrap gap-2 overflow-auto max-w-full">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => handleFilter(link)}
            className={`${
              active === link
                ? "bg-orange-500 text-white"
                : "bg-white text-orange-500"
            } whitespace-nowrap rounded-lg border border-orange-500 px-8 py-2.5 capitalize transition-colors duration-200`}
          >
            {link}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
