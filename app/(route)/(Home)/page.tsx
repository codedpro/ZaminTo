import Filters from "@/components/Filters";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Hot from "@/components/Hot";
import HousesList from "@/components/HousesList";
import SearchBG from "@/components/SearchBG";
interface Props {
  searchParams: { [key: string]: string | undefined }
}
const Home = async ({ searchParams }: Props) => {
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
        <div
          className="w-full flex flex-col items-center min-h-screen"
          style={{ backgroundImage: "url('searchbg.png')" }}
        >
          <SearchBG />
          <div className="flex justify-center">
            <Filters />
          </div>

          <HousesList searchParams={searchParams} />
        </div>

        <ul className="flex flex-col space-y-2">
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
export default Home;