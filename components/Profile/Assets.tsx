import React from "react";
import dynamic from "next/dynamic";
import { users } from "@/constants/UserInfos";
import { houses } from "@/constants/hot";
import { User } from "@/types/Users";
import MyLandCard from "./Assets/MyLandCard";
import AssetSummary from "./Assets/AssetSummary";

const TotalAssetsChart = dynamic(() => import("./Assets/TotalAssetsChart"), {
  ssr: false,
});

interface AssetsProps {
  userId: string;
}

const Assets: React.FC<AssetsProps> = ({ userId }) => {
  const user = users.find((user: User) => user.id === userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-center mb-2 ">دارایی های من</h1>
      <div className="grid grid-cols-1 xl:grid-cols-2   search-bg shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col ">
          <div className="px-8 mt-4 xl:mt-24">
            <AssetSummary
              cash={user.cash}
              lands={user.lands}
              houses={houses}
              totalDeposit={user.deposite}
              totalProfit={user.totalProfit}
              totalWithdrawal={user.withdrawal}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="">
            <TotalAssetsChart
              cash={user.cash}
              lands={user.lands}
              houses={houses}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {user.lands.map((land) => {
          const house = houses.find((house) => house.id === land.landID);
          if (!house) {
            return (
              <div key={land.landID}>
                House not found for landID: {land.landID}
              </div>
            );
          }
          const updatedHouse = { ...house};
          return (
            <div key={land.landID}>
              <MyLandCard house={updatedHouse} quantity={land.qty} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assets;
