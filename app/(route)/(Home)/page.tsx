import Filters from "@/components/Filters";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hot from "@/components/Hot";
import SearchBG from "@/components/SearchBG";

export default function Home() {
  return (
    <div className="light" style={{ height: "100vh", overflow: "auto" }}>
      <Header />
      <div className="Hero">
        <Hero
          title="ZamineTo"
          subtitle="Zamine to ba ma bekhar"
          buttonText="Start Now"
          buttonLink="/start"
        />
      </div>

      <div className="relative bg-white z-30 p-4 rounded-lg shadow-md  border border-gray-300">
        <Hot />
        <SearchBG imageUrl="/houses/searchBG.jpg"/>

        <div className="flex justify-center">

          <Filters />
        </div>

        <ul className="flex flex-col space-y-2">
          <li className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
            Search
          </li>
          <li className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
            Houses
          </li>
          <li className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
            Favorites
          </li>
          <li className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
            About Us
          </li>
          <li className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
            Blogs
          </li>
          <li className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md cursor-pointer">
            Footer
          </li>
        </ul>
      </div>
    </div>
  );
}
