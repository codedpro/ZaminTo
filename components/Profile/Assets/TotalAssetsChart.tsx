import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, LabelList } from "recharts";

interface Land {
  landID: string;
  qty: number;
}

interface House {
  id: string;
  name: string;
  imageURL: string;
  price: number;
}

const toPersianNumber = (number: number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const isNegative = number < 0;
  const numberString = String(Math.abs(number));
  let result = "";

  for (let i = 0; i < numberString.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result = "," + result;
    }
    result =
      persianDigits[
        parseInt(numberString.charAt(numberString.length - 1 - i))
      ] + result;
  }

  if (isNegative) {
    result = "-" + result;
  }

  return result;
};

const TotalAssetsChart: React.FC<{
  cash: number;
  lands: Land[];
  houses: House[];
}> = ({ cash, lands, houses }) => {
  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF6666",
    "#6699FF",
  ];

  const data = [
    { name: "موجودی حساب", value: cash },
    ...lands.map((land) => {
      const house = houses.find((house) => house.id === land.landID);
      return house
        ? { name: `${house.name}`, value: land.qty * house.price }
        : { name: "نامعلوم", value: 0 };
    }),
  ];
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    value,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="#fff"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={14}
      >
        {`${toPersianNumber(value)} (${(
          (value / data.reduce((acc, curr) => acc + curr.value, 0)) *
          100
        ).toFixed(2)}%)`}
      </text>
    );
  };

  return (
    <div className="text-center">
      <PieChart width={600} height={400}>
        <Pie
          data={data}
          cx={300}
          cy={200}
          innerRadius={100}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <LabelList
            dataKey="value"
            position="inside"
            fill="#fff"
            fontSize={14}
            formatter={(value: any, entry: any) =>
              ` ${(
                (value / data.reduce((acc, curr) => acc + curr.value, 0)) *
                100
              ).toFixed(2)}%`
            }
          />
        </Pie>
        <Tooltip formatter={(value: number) => toPersianNumber(value)} />
        <Legend />
      </PieChart>
    </div>
  );
};

export default TotalAssetsChart;
