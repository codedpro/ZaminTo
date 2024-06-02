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
    // More house orders can be added here
  ];
  