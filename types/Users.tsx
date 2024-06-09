export interface User {
  id: string;
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  profileUrl: string;
  phoneNumber: string;
  isActive: boolean;
  history: Array<any>;
  cash: number;
  homes: Array<{ homeID: string; qty: number }>;
  totalProfit: number;
  withdrawal: number;
  deposite: number;
}
