import { Suspense } from "react";

import Filters from "@/components/Filters";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HousesList from "@/components/HousesList";
import { houses } from "@/constants/hot";
import SearchBG from "@/components/SearchBG";
import ScrollableSection from "@/components/ScrollableSection";
import Footer from "@/components/Footer";

interface Props {
  searchParams: { [key: string]: string | undefined };
}
const land = async ({ searchParams }: Props) => {
  return (
    <div className="light" style={{ height: "100vh", overflow: "auto" }}>
      <Header />
      <div className="Hero" dir="rtl">
        <Hero
          title="زمینه تو"
          subtitle="اخرین جایی که میگردی"
          buttonText="بزن بریم"
          buttonLink="/Profile/2"
        />
      </div>
      <div className="relative bg-white  z-30 p-4 rounded-t-lg shadow-md  border border-gray-300">
        <ScrollableSection
          title="داغ ترین ها"
          houses={houses}
          scrollAmount={350}
          scrollInterval={3000}
          showArrows={true}
          customClass="hot-section"
        />
        <div
          className="w-full flex flex-col items-center min-h-screen search-bg"
        >
          <Suspense fallback={<div>Loading Search...</div>}>
            <SearchBG />
          </Suspense>
          <div className="flex justify-center">
            <Suspense fallback={<div>Loading Filters...</div>}>
              <Filters />{" "}
            </Suspense>
          </div>
          <Suspense fallback={<div>Loading Houses...</div>}>
            <HousesList query={searchParams} />
          </Suspense>
        </div>
        <ScrollableSection
          title="تازه‌ترین‌ها"
          houses={houses}
          scrollAmount={300}
          scrollInterval={4000}
          showArrows={true}
          customClass="latest-section"
        />{" "}
      </div>{" "}
      <div className="relative z-30" dir="rtl">
        {" "}
        <Footer />
      </div>
    </div>
  );
};
export default land;
