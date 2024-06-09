"use client"
import React from "react";
import dynamic from "next/dynamic";
import { users } from "@/constants/UserInfos";
import { houses } from "@/constants/hot";
import { User } from "@/types/Users";
import MyLandCard from "./Assets/MyLandCard";

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
    <div dir="ltr" className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">دارایی های من</h1>

      <TotalAssetsChart cash={user.cash} lands={user.lands} houses={houses} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {user.lands.map((land) => {
          const house = houses.find((house) => house.id === land.landID);
          if (!house) {
            return (
              <div key={land.landID}>
                House not found for landID: {land.landID}
              </div>
            );
          }
          const updatedHouse = { ...house, discount: house.discount || 0 };
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
