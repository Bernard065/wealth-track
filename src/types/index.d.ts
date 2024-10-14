export interface HeaderProps {
  type?: "title" | "greeting";
  title: string;
  user?: string;
  subtext: string;
}

export interface User {
  $id: string;
  email: string;
  userId: string;
  dwollaCustomerUrl?: string;
  dwollaCustomerId?: string;
  firstName: string;
  lastName: string;
  name: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
}

export interface Account {
  id: string;
  availableBalance: number;
  currentBalance: number;
  officialName: string;
  mask: string;
  institutionId: string;
  name: string;
  type: string;
  subtype: string;
  appwriteItemId: string;
  shareableId: string;
}

export interface Transaction {
  id: string;
  $id: string;
  name: string;
  paymentChannel: string;
  type: string;
  accountId: string;
  amount: number;
  pending: boolean;
  category: string;
  date: string;
  image: string;
  type: string;
  $createdAt: string;
  channel: string;
  senderBankId: string;
  receiverBankId: string;
}

export interface Bank {
  $id: string;
  accountId: string;
  bankId: string;
  accessToken: string;
  fundingSourceUrl: string;
  userId: string;
  shareableId: string;
}

export interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
}

export interface TotalBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

export interface DoughnutChartProps {
  accounts: Account[];
}

export interface SidebarProps {
  user: User;
}

export interface MobileNavProps {
  user: User;
}

export interface CreditCardProps {
  account: Account;
  userName: string;
  showBalance?: boolean;
}
