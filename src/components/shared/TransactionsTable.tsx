import { Transaction, TransactionTableProps } from "@/types";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatAmount, getTransactionStatus } from "@/lib/utils";

const TransactionsTable = ({ transactions }: TransactionTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead className="px-2">Transaction</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction: Transaction) => {
          const status = getTransactionStatus(new Date(transaction.date));

          const amount = formatAmount(transaction.amount);

          const isDebit = transaction.type === "debit";
          const isCredit = transaction.type === "credit";

          return (
            <TableRow key={transaction.id}>
              <TableCell>
                <h1>{transaction.name}</h1>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
