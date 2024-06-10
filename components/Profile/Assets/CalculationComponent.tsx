import React from "react";
import { houses } from "@/constants/hot";
import moment from "moment-jalaali";

type CalculationComponentProps = {
  user: any;
  transaction: any;
  index: number;
};

type TransactionStatus = "orange" | "green" | "gray";

interface CalculatedValues {
  status: string;
  updatedQty?: number;
  priceBought: number;
  latestLivePrice?: number;
  changePercentage: number;
  profitLoss: number;
  statusLabel: string;
}

const toPersianNumber = (number: number) => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  const isNegative = number < 0;
  const numberString = String(Math.abs(number));
  let result = "";

  for (let i = 0; i < numberString.length; i++) {
    if (i > 0 && i % 3 === 0) {
      result = "،" + result;
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

const CalculationComponent: React.FC<CalculationComponentProps> = ({
  user,
  transaction,
  index,
}) => {
  const house = houses.find((house) => house.id === transaction.landID);
  if (!house) return null;

  const getTransactionStatus = (): TransactionStatus => {
    const sellQuantity = user.history
      .filter(
        (t: any) =>
          t.type === "Sell" &&
          t.landID === transaction.landID &&
          t.id === transaction.id
      )
      .reduce((acc: number, cur: any) => acc + cur.qty, 0);

    if (sellQuantity === 0) return "orange";
    else if (sellQuantity === transaction.qty) return "green";
    else if (sellQuantity < transaction.qty) return "gray";
    else return "green";
  };

  const calculateValues = (): CalculatedValues | null => {
    if (transaction.type === "Buy") {
      const soldQuantity = user.history
        .filter(
          (t: any) =>
            t.type === "Sell" &&
            t.landID === transaction.landID &&
            t.id === transaction.id
        )
        .reduce((acc: number, cur: any) => acc + cur.qty, 0);

      const remainingQty = transaction.qty - soldQuantity;

      if (remainingQty <= 0) return null;

      const latestLivePrice = house.price;
      const updatedQty = remainingQty;
      const priceBought = transaction.price;
      const changePercentage =
        ((latestLivePrice - priceBought) / priceBought) * 100;
      const profitLoss = (latestLivePrice - priceBought) * updatedQty;
      const statusLabel = "باز";

      return {
        status: "search-bg ",
        updatedQty,
        priceBought,
        latestLivePrice,
        changePercentage,
        profitLoss,
        statusLabel,
      };
    } else {
      const status = getTransactionStatus();
      const statusLabel =
        status === "orange"
          ? "باز"
          : status === "green" || status === "gray"
          ? "بسته"
          : "سایر";

      const priceBought = user.history
        .slice(0, index)
        .find(
          (t: any) =>
            t.type === "Buy" &&
            t.landID === transaction.landID &&
            t.id === transaction.id
        ).price;

      const changePercentage =
        ((transaction.price - priceBought) / priceBought) * 100;
      const profitLoss = (transaction.price - priceBought) * transaction.qty;

      return {
        status: profitLoss > 0 ? "bg-green-100" : "bg-red-100",
        priceBought,
        changePercentage,
        profitLoss,
        statusLabel,
      };
    }
  };

  const calculatedValues = calculateValues();

  if (!calculatedValues) return null;

  const {
    status,
    updatedQty,
    priceBought,
    latestLivePrice,
    changePercentage,
    profitLoss,
    statusLabel,
  } = calculatedValues;

  const jalaliDate = moment(transaction.date).format("jYYYY/jMM/jDD");
  const profit = changePercentage.toFixed(2);

  return (
    <tr key={index} className={status}>
      <td className="px-6 py-4 whitespace-nowrap">{house.name}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        {toPersianNumber(updatedQty || transaction.qty)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {toPersianNumber(priceBought)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        {toPersianNumber(latestLivePrice || transaction.price)}
      </td>
      <td
        dir="ltr"
        className={`${
          profitLoss > 0 ? "text-green-600" : "text-red-600"
        } px-6 py-4 whitespace-nowrap text-right`}
      >
        {profit}%
      </td>
      <td
        dir="ltr"
        className={`${
          profitLoss > 0 ? "text-green-600" : "text-red-600"
        } px-6 py-4 whitespace-nowrap text-right`}
      >
        {toPersianNumber(profitLoss)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{jalaliDate}</td>
      <td className="px-6 py-4 whitespace-nowrap">{statusLabel}</td>
    </tr>
  );
};

export default CalculationComponent;
