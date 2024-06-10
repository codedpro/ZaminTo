"use client";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { houseOrders } from "@/constants/HouseOrderList";

interface HouseOrderListProps {
  selectedHouseId: string;
}

const HouseOrderList: React.FC<HouseOrderListProps> = ({ selectedHouseId }) => {
  const houseOrder = houseOrders.find(
    (order) => order.houseId === selectedHouseId
  );

  if (!houseOrder) {
    return <div>هیچ معامله ای برای زمین مورد نظر یافت نشد</div>;
  }

  const { bids, asks } = houseOrder;

  return (
    <div dir="rtl" className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">معاملات</h1>
      <Tabs>
        <TabList className="flex">
          <Tab className="inactive-tab mr-1 px-4 py-2  bg-gray-100 rounded-t-lg border-none focus:outline-none">
            معاملات
          </Tab>
          <Tab className="inactive-tab mx-1 px-4 rounded-t-lg  bg-gray-100 py-2 border-none focus:outline-none">
            تاریخچه
          </Tab>
          <Tab className="inactive-tab ml-1 px-4 py-2  bg-gray-100  rounded-t-lg border-none focus:outline-none">
            معاملات من
          </Tab>
        </TabList>

        <TabPanel>
          <div className="p-6 bg-white rounded-lg border border-gray-300 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-bold text-green-700 mb-2">خرید</h3>
                <div className="overflow-auto rounded-lg shadow">
                  <table className="min-w-full bg-white">
                    <thead className="bg-green-200">
                      <tr>
                        <th className="px-4 py-2">قیمت</th>
                        <th className="px-4 py-2">مقدار</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bids
                        .sort((a, b) => b.price - a.price)
                        .map((bid) => (
                          <tr
                            key={bid.id}
                            className="bg-green-100 even:bg-green-200"
                          >
                            <td className="px-4 py-2 border">{bid.price}</td>
                            <td className="px-4 py-2 border">{bid.amount}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-red-700 mb-2">فروش</h3>
                <div className="overflow-auto rounded-lg shadow">
                  <table className="min-w-full bg-white">
                    <thead className="bg-red-200">
                      <tr>
                        <th className="px-4 py-2">قیمت</th>
                        <th className="px-4 py-2">مقدار</th>
                      </tr>
                    </thead>
                    <tbody>
                      {asks
                        .sort((a, b) => a.price - b.price)
                        .map((ask) => (
                          <tr
                            key={ask.id}
                            className="bg-red-100 even:bg-red-200"
                          >
                            <td className="px-4 py-2 border">{ask.price}</td>
                            <td className="px-4 py-2 border">{ask.amount}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-300 shadow-md">
            برای دیدن این صفحه باید وارد اکانت خود شوید
          </div>
        </TabPanel>

        <TabPanel>
          <div className="text-center p-6 bg-white rounded-lg border border-gray-300 shadow-md">
            برای دیدن این صفحه باید وارد اکانت خود شوید
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HouseOrderList;
