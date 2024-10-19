import PaymentTransferForm from "@/components/forms/PaymentTransferForm";
import Header from "@/components/shared/Header";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Page = async () => {
  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({
    userId: loggedIn.$id,
  });

  if (!accounts) return;

  const accountsData = accounts?.data;

  return (
    <section className="payment-transfer">
      <Header
        title="Payment Transfer"
        subtext="Please provide any specific details or notes related to the payment transfer"
      />

      <section className="size-full pt-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-18 font-semibold">Transfer Details</h2>
          <p className="text-14 font-normal ">
            Enter the details of the recipient
          </p>
        </div>

        <div className="pt-5">
          <PaymentTransferForm accounts={accountsData} />
        </div>
      </section>
    </section>
  );
};

export default Page;
