import { NextPage, GetServerSideProps } from "next";
import HouseCard from "./Cards/HouseCard Responsive";
import { houses } from "@/constants/hot";
import LoadMore from "./LoadMore";

interface House {
  imageURL: string;
  price: number;
  discount?: number;
  name: string;
  capacity: number;
  sold: number;
  tagNames: Record<string, string>;
  tags: Record<string, boolean>;
  categories: string[];
}

const HousesList: NextPage<{ houses: House[] }> = async (context: any) => {
  const {
    props: { houses: houses2 , limit},
  } = await getServerSideProps(context);

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Houses</h2>
      </div>
      {houses2?.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {houses2.map((house: House, index: number) => (
            <HouseCard key={index} {...house} />
          ))}
        </div>
      )}
      <LoadMore limit={houses.length} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const baseHouses = [...houses];
  
    const search = context.searchParams?.search as string | undefined;
    const filter = context.searchParams?.filter as string | undefined;
    const shows = context.searchParams?.shows as string | undefined;
  
    const filteredByName = search
      ? baseHouses.filter(
          (house) =>
            typeof house.name === "string" &&
            house.name.toLowerCase().includes(search.toLowerCase())
        )
      : baseHouses;
  
    const categories = filter ? filter.split(",") : [];
  
    const finalFilteredHouses = filteredByName.filter(
      (house) =>
        !categories.length ||
        categories.some((category) => house.categories.includes(category.trim()))
    );
  
    const showsNumber = shows ? parseInt(shows, 10) : 8;
    const housesToShow = finalFilteredHouses.slice(0, showsNumber);
  
    return {
      props: {
        houses: housesToShow,
      },
    };
  };
  

export default HousesList;
