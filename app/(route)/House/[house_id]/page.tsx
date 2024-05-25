import HouseProfile from "@/components/HouseProfile";
import { houses } from "@/constants/hot";

interface House {
  id: string;
  name: string;
  imageURL: string;
  price: number;
  discount: number;
  capacity: number;
  sold: number;
  tagNames: {
    tag1: string;
    tag2: string;
    tag3: string;
    tag4: string;
  };
  tags: {
    tag1: boolean;
    tag2: boolean;
    tag3: boolean;
    tag4: boolean;
  };
  categories: string[];
}

interface Props {
  house: House | null;
}

async function fetchHouseById(house_id: string): Promise<House | null> {
  const house = houses.find((h) => h.id === house_id);
  if (house) {
    return {
      ...house,
      discount: house.discount ?? 0,
    };
  }
  return null;
}

const HousePage = async ({ params }: { params: { house_id: string } }) => {
  const house = await fetchHouseById(params.house_id);

  if (!house) {
    return <div>House not found</div>;
  }

  return (
   <HouseProfile house={house}/>
  );
};

export default HousePage;
