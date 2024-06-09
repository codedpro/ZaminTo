import React from "react";
import { users } from "@/constants/UserInfos";
import CalculationComponent from "./Assets/CalculationComponent";

type TransactionHistoryProps = {
  userId: string;
};

const History: React.FC<TransactionHistoryProps> = ({ userId }) => {
  const user = users.find((user) => user.id === userId);

  if (!user || !userId) {
    return <div>کاربر یافت نشد</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">تاریخچه معاملات</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                نام
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                تعداد
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                قیمت خرید
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                قیمت فروش
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                درصد تغییرات
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                سود / زیان
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                تاریخ
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                وضعیت
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {user.history.map((transaction, index) => (
              <CalculationComponent
                key={index}
                user={user}
                transaction={transaction}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
