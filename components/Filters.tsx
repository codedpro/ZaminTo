"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const links = ["Luxury", "Big", "Small", "Apartment", "Pool"];

const Filters = () => {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilter = (link: string) => {
    if (active === link) {
      setActive("");
    } else {
      setActive(link);
    }

    const newUrl = active === link ? "/" : `/?filter=${link}`;
    router.push(newUrl, { scroll: false });
  };

  return (
    <div className="flex justify-center py-12">
      <ul className="no-scrollbar flex w-full max-w-full gap-2 overflow-auto sm:max-w-2xl">
        {links.map((link) => (
          <button
            key={link}
            onClick={() => handleFilter(link)}
            className={`${
              active === link ? "bg-orange-500 text-white" : "bg-white text-orange-500"
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
