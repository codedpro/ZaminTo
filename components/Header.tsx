import React from "react";
import MenuIcon from "./MenuIcon";
import { headerItems } from "@/constants/headerItems";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="flex items-center justify-between px-5 py-3 text-black uppercase">
      <MenuIcon headerItems={headerItems} />

        <div className="flex justify-center items-center lg:justify-start lg:flex-none transition duration-300 hover:text-orange-500">
          <img src="/company/logo/logo.svg" alt="logo" className="w-20" />
        </div>

        <div className="hidden lg:flex lg:flex-grow lg:justify-center">
          <ul className="flex items-center space-x-6">
            {headerItems.map((item, index) => (
              <li
                key={index}
                className="navItem cursor-pointer transition duration-300 hover:text-orange-500"
              >
                <a href={item.link}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:flex lg:justify-end">
          <button
            id="btnStart"
            className="px-4 py-2 text-black border border-black rounded-full transition duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg focus:outline-none focus:ring focus:ring-orange-500"
          >
            Start Now
          </button>
        </div>
      </nav>
    </header>
  );
}
