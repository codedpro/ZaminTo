"use client";
import React, { useState } from "react";
import { PieChart, Pie, Cell, Legend, Sector } from "recharts";

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

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";
  const rotateAngle =
    midAngle >= 0 && midAngle <= 180 ? midAngle - 90 : midAngle + 90;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
        transform={`rotate(${rotateAngle + 30}, ${ex}, ${ey})`}
      >
        {`${toPersianNumber(payload.value)}`}
      </text>
    </g>
  );
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

  const [activeIndex, setActiveIndex] = useState<number>(0);

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(2)}%`}
      </text>
    );
  };

  return (
    <div dir="ltr" className="text-center flex  justify-center items-center w-full">
      <PieChart width={550} height={500}>
        <Pie
          activeIndex={activeIndex}
          activeShape={renderActiveShape}
          data={data}
          cx={260}
          cy={200}
          innerRadius={100}
          outerRadius={160}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          onMouseEnter={onPieEnter}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default TotalAssetsChart;
