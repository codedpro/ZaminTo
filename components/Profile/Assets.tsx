import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { users } from "@/constants/UserInfos";
import { houses } from "@/constants/hot";
import { User } from "@/types/Users";

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

  const totalValue =
    user.cash +
    user.homes.reduce((acc, home) => {
      const house = houses.find((house) => house.id === home.homeID);
      return acc + (house ? home.qty * house.price : 0);
    }, 0);

  return (
    <div>
      <TotalAssetsChart cash={user.cash} homes={user.homes} houses={houses} />
      <div>
        <h2>Cash: {user.cash}</h2>
        <h2>Total Profit: {user.totalProfit}</h2>
        <h2>Withdrawal: {user.withdrawal}</h2>
        <h2>Deposit: {user.deposite}</h2>
      </div>
      <div>
        {user.homes.map((home) => {
          const house = houses.find((house) => house.id === home.homeID);
          if (!house) {
            return (
              <div key={home.homeID}>
                House not found for homeID: {home.homeID}
              </div>
            );
          }
          return (
            <div key={home.homeID}>
              <h3>{house.name}</h3>
              <p>Quantity: {home.qty}</p>
              <p>Price: {house.price}</p>
              <p>Capacity: {house.capacity}</p>
              <Link href={`/House/${house.id}`} passHref>
                <img
                  src={house.imageURL}
                  alt={house.name}
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Assets;
