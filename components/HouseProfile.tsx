import React from "react";
import { House } from "@/types/House";
import Gallery from "./Houses/Gallery";
import dynamic from "next/dynamic";
import HouseInfo from "./Houses/HouseInfo";
import HouseTags from "./Houses/HouseTags";
import HouseOptions from "./Houses/HouseOptions";
import HousePriceChart from "./Houses/HousePriceChart";
import HouseOrderList from "./Houses/HouseOrderList";

const DynamicMap = dynamic(() => import("./Houses/Map"), {
  ssr: false,
  loading: () => (
    <p className="text-center justify-center items-center">
      در حال بارگذاری نقشه...
    </p>
  ),
});

interface Props {
  house: House;
}

const HouseProfile: React.FC<Props> = ({ house }) => {
  return (
    <div className="md:flex md:flex-row min-h-screen bg-white p-4 mt-14">
      <div className="md:w-1/2 md:flex md:flex-col gap-y-4 md:sticky top-0 max-h-screen z-20">
        <div className="overflow-auto rounded-lg m-4">
          <Gallery images={house.galleryImages} />
        </div>
        <div className="flex-grow m-2 rounded-lg hidden md:flex">
          <DynamicMap latitude={house.latitude} longitude={house.longitude} />
        </div>
      </div>
      <div className="md:w-1/2 md:overflow-y-auto p-4 z-30">
        <p className="text-2xl text-center text-black mb-4 font-bold">
          {house.name}
        </p>
        <div className="w-full items-center search-bg">
          <div className="mb-4">
            <HouseInfo house={house} />
          </div>

          <div className="bg-white rounded-xl m-6 shadow-md">
            <HouseTags tags={house.tags} tagNames={house.tagNames} />
          </div>

          <div dir="rtl" className="p-6">
            <HouseOptions
              options={house.Options}
              optionsNames={house.OptionsName}
            />
          </div>
        </div>

        <div dir="rtl" className="bg-white p-6">
          <HousePriceChart houseId={house.id} />
        </div>
        <div dir="rtl" className="bg-white p-6">
          <HouseOrderList selectedHouseId={house.id} />
        </div>
        <div className=" w-full  h-64 md:hidden reletive flex-grow m-2 rounded-xl flex z-40">
          <DynamicMap latitude={house.latitude} longitude={house.longitude} />
        </div>
      </div>
    </div>
  );
};

export default HouseProfile;
