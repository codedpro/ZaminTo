"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import { houseHistories } from '@/constants/houseHistory';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import 'chart.js/auto';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface Props {
  houseId: string;
}

const HousePriceChart: React.FC<Props> = ({ houseId }) => {
  const houseHistory = houseHistories.find((house) => house.id === houseId);

  if (!houseHistory) {
    return <div>تاریخجه قیمت برای زمین مورد نظر یافت نشد</div>;
  }

  const data = {
    labels: houseHistory.prices.map((entry) => entry.date),
    datasets: [
      {
        label: 'قیمت',
        data: houseHistory.prices.map((entry) => entry.price),
        borderColor: 'orange',
        backgroundColor: 'rgba(255, 165, 0, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'قیمت زمین ',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'زمان',
        },
      },
      y: {
        title: {
          display: true,
          text: 'قیمت',
        },
      }, 
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg border-t border-gray-200 w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default HousePriceChart;
