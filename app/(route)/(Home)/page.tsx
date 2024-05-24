import Filters from "@/components/Filters";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HousesList from "@/components/HousesList";
import { houses } from "@/constants/hot";
import SearchBG from "@/components/SearchBG";
import ScrollableSection from "@/components/ScrollableSection";

interface Props {
  searchParams: { [key: string]: string | undefined };
}
const Home = async ({ searchParams }: Props) => {
  return (
    <div className="light" style={{ height: "100vh", overflow: "auto" }}>
      <Header />
      <div className="Hero" dir="rtl">
        <Hero
          title="زمینه تو"
          subtitle="اخرین جایی که میگردی"
          buttonText="بزن بریم"
          buttonLink="/start"
        />
      </div>

      <div className="relative bg-white  z-30 p-4 rounded-lg shadow-md  border border-gray-300">
        <ScrollableSection
          title="داغ ترین ها"
          houses={houses}
          scrollAmount={350}
          scrollInterval={3000}
          showArrows={true}
          customClass="hot-section"
        />
        <div
          className="w-full flex flex-col items-center min-h-screen"
          style={{ backgroundImage: "url('searchbg.png')" }}
        >
          <SearchBG />
          <div className="flex justify-center">
            <Filters />
          </div>
          <HousesList query={searchParams} />
        </div>
        <ScrollableSection
          title="تازه‌ترین‌ها"
          houses={houses}
          scrollAmount={300}
          scrollInterval={4000}
          showArrows={true}
          customClass="latest-section"
        />{" "}
      </div>
    </div>
  );
};
export default Home;
