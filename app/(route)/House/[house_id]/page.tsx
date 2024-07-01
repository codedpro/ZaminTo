import HouseProfile from "@/components/HouseProfile";
import { houses } from "@/constants/hot";
import { House } from "@/types/House";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  house: House | null;
}

async function fetchHouseById(house_id: string): Promise<House | null> {
  const house = houses.find((h) => h.id === house_id);
  if (house) {
    return {
      ...house,
      metrage: (house.metrage ?? 0) as number,
      bar: (house.bar ?? 0) as number,
      karbari: (house.karbari ?? "") as string,
      provience: (house.provience ?? "") as string,
      city: (house.city ?? "") as string,
      address: (house.address ?? "") as string,
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
    <div className="flex flex-col min-h-screen z-30">
      <Header />
      <HouseProfile house={house} />
      <Footer />
    </div>
  );
};

export default HousePage;
