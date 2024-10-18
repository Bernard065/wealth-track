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
  dwollaCustomerUrl: string;
  dwollaCustomerId: string;
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

export interface SignUpParams {
  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
  email: string;
  password: string;
}

export interface signInProps {
  email: string;
  password: string;
}

export interface FooterProps {
  user: User;
  type?: "mobile" | "desktop";
}

export interface PlaidLinkProps {
  user: User;
  variant?: "primary" | "ghost";
  dwollaCustomerId?: string;
}

export interface exchangePublicTokenProps {
  publicToken: string;
  user: User;
}

export interface createBankAccountProps {
  accessToken: string;
  userId: string;
  accountId: string;
  bankId: string;
  fundingSourceUrl: string;
  shareableId: string;
}

export interface TransferParams {
  sourceFundingSourceUrl: string;
  destinationFundingSourceUrl: string;
  amount: string;
}

export interface AddFundingSourceParams {
  dwollaCustomerId: string;
  processorToken: string;
  bankName: string;
}

export interface NewDwollaCustomerParams {
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  dateOfBirth: string;
  ssn: string;
}

export interface CreateFundingSourceOptions {
  customerId: string; // Dwolla Customer ID
  fundingSourceName: string; // Dwolla Funding Source Name
  plaidToken: string; // Plaid Account Processor Token
  _links: object; // Dwolla On Demand Authorization Link
}

export interface getUserInfoProps {
  userId: string;
}

export interface getAccountProps {
  appwriteItemId: string;
}

export interface getAccountsProps {
  userId: string;
}

export interface getInstitutionProps {
  institutionId: string;
}

export interface getTransactionsProps {
  accessToken: string;
}

export interface getBanksProps {
  userId: string;
}

export interface getBankProps {
  documentId: string;
}

export interface SearchParamProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface RecentTransactionsProps {
  accounts: Account[];
  transactions: Transaction[];
  appwriteItemId: string;
  page: number;
}

export interface BankTabItemProps {
  account: Account;
  appwriteItemId?: string;
}

export interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

export type AccountTypes =
  | "depository"
  | "credit"
  | "loan "
  | "investment"
  | "other";

export interface BankInfoProps {
  account: Account;
  appwriteItemId?: string;
  type: "full" | "card";
}

export interface TransactionTableProps {
  transactions: Transaction[];
}

export interface CreateTransactionProps {
  name: string;
  amount: string;
  senderId: string;
  senderBankId: string;
  receiverId: string;
  receiverBankId: string;
  email: string;
}

export interface getTransactionsByBankIdProps {
  bankId: string;
}

export interface CategoryBadgeProps {
  category: string;
}

export type Category = "Food and Drink" | "Travel" | "Transfer";

export interface CategoryCount {
  name: string;
  count: number;
  totalCount: number;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
}
