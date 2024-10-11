"use client";

import { TotalBalanceBoxProps } from "@/types";
import React from "react";
import CountUp from "react-countup";
import DoughnutChart from "./DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* DoughnutChart */}
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance</p>

          <div className="total-balance-amount">
            <CountUp
              decimals={2}
              decimal="."
              prefix="$"
              end={totalCurrentBalance}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
