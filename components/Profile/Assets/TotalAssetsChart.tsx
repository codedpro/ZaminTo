"use client"

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

interface Home {
  homeID: string;
  qty: number;
}

interface House {
  id: string;
  imageURL: string;
  price: number;
}

const TotalAssetsChart = ({ cash, homes, houses }: { cash: number; homes: Home[]; houses: House[] }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const data = [
    { name: 'Cash', value: cash },
    ...homes.map((home) => {
      const house = houses.find((house) => house.id === home.homeID);
      return house ? { name: `House ${home.homeID}`, value: home.qty * house.price } : { name: 'Unknown', value: 0 };
    })
  ];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default TotalAssetsChart;
