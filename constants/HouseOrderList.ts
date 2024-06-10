// HouseOrderList.ts

export interface Order {
  id: number;
  price: number;
  amount: number;
}

export interface HouseOrder {
  houseId: string;
  bids: Order[];
  asks: Order[];
}

export const houseOrders: HouseOrder[] = [
  {
    houseId: "1",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
  {
    houseId: "2",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
  {
    houseId: "3",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
  {
    houseId: "4",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },

  {
    houseId: "5",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
  {
    houseId: "6",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
  {
    houseId: "7",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
  {
    houseId: "8",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
  {
    houseId: "9",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
  {
    houseId: "10",
    bids: [
      { id: 1, price: 150000, amount: 2 },
      { id: 2, price: 149000, amount: 1 },
      { id: 3, price: 148000, amount: 3 },
    ],
    asks: [
      { id: 4, price: 152000, amount: 1 },
      { id: 5, price: 153000, amount: 2 },
      { id: 6, price: 154000, amount: 1 },
    ],
  },
];
