export interface HeaderProps {
  type?: "title" | "greeting";
  title: string;
  user?: string;
  subtext: string;
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

export interface TotalBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}

export interface DoughnutChartProps {
  accounts: Account[];
}
