"use client"
import React, { useState, useEffect, useRef } from "react";
import { MdMenu, MdClose } from "react-icons/md";

interface HeaderItem {
  label: string;
  link: string;
}

export default function MenuIcon({
  headerItems,
}: {
  headerItems: HeaderItem[];
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <>
      <div
        className="lg:hidden transition duration-300 hover:text-orange-500 cursor-pointer"
        onClick={toggleSidebar}
      >
        <MdMenu className="w-8 h-8" />
      </div>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50">
          <div
            className="absolute inset-y-0 left-0 w-64 bg-white shadow-lg transition-transform transform"
            ref={sidebarRef}
          >
            <div className="flex justify-end p-4">
              <MdClose
                className="w-6 h-6 cursor-pointer hover:text-orange-500"
                onClick={closeSidebar}
              />
            </div>
            <ul className="py-6 px-4 space-y-2">
              <a
                href="/login"
                className="text-lg transition duration-300 hover:text-orange-500"
              >
                Login
              </a>
              {Array.isArray(headerItems) &&
                headerItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-lg transition duration-300 hover:text-orange-500"
                  >
                    {typeof item === "object" && item !== null ? (
                      <a href={item.link}>{item.label}</a>
                    ) : (
                      "Invalid item"
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
