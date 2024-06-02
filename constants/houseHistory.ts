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
        { date: '2022-06-01', price: 119000 },
        { date: '2022-07-01', price: 122000 },
        { date: '2022-08-01', price: 125000 },
        { date: '2022-09-01', price: 123000 },
        { date: '2022-10-01', price: 126000 },
        { date: '2022-11-01', price: 128000 },
        { date: '2022-12-01', price: 130000 },
        { date: '2023-01-01', price: 132000 },
        { date: '2023-02-01', price: 134000 },
        { date: '2023-03-01', price: 136000 },
        { date: '2023-04-01', price: 138000 },
        { date: '2023-05-01', price: 140000 },
        { date: '2023-06-01', price: 142000 },
        { date: '2023-07-01', price: 144000 },
        { date: '2023-08-01', price: 146000 },
        { date: '2023-09-01', price: 148000 },
        { date: '2023-10-01', price: 150000 },
        { date: '2023-11-01', price: 152000 },
        { date: '2023-12-01', price: 154000 },
        { date: '2024-01-01', price: 156000 },
        { date: '2024-02-01', price: 158000 },
        { date: '2024-03-01', price: 160000 },
        { date: '2024-04-01', price: 162000 },
        { date: '2024-05-01', price: 164000 },
        { date: '2024-06-01', price: 166000 },
      ],
    },
  ];
  