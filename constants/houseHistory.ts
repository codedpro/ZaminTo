export interface HouseHistory {
    id: string;
    prices: { date: string; price: number }[];
  }
  
  export const houseHistories: HouseHistory[] = [
    {
      id: "1",
      prices: [
        { date: '2022-01-01', price: 100000 },
        { date: '2022-02-01', price: 110000 },
        { date: '2022-03-01', price: 120000 },
        { date: '2022-04-01', price: 115000 },
        { date: '2022-05-01', price: 117000 },
        { date: '2024-04-01', price: 162000 },
        { date: '2024-05-01', price: 164000 },
        { date: '2024-06-01', price: 166000 },
      ],
    },
  ];
  