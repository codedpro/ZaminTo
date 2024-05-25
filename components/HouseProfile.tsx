import React from "react";
import { House } from "@/types/House";
interface Props {
  house: House;
}

const HouseProfile: React.FC<Props> = ({ house }) => {
  return (
    <div>
      <h2>{house.name}</h2>
      <img src={house.imageURL} alt={house.name} />
      <p>Price: ${house.price}</p>
      <p>Discount: {house.discount}%</p>
      <p>Capacity: {house.capacity}</p>
      <p>Sold: {house.sold}</p>
      <p>Tag 1: {house.tagNames.tag1}</p>
      <p>Tag 2: {house.tagNames.tag2}</p>
      <p>Tag 3: {house.tagNames.tag3}</p>
      <p>Tag 4: {house.tagNames.tag4}</p>
      {/* Assuming you have more tags */}
      {/* Render other details as needed */}
    </div>
  );
};

export default HouseProfile;
