import { formatAmount } from "@/lib/utils";
import { CreditCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BankCard = ({ userName, showBalance, account }: CreditCardProps) => {
  return (
    <div className="flex flex-col">
      <Link href="/" className="bank-card">
        <div className="bank-card_content">
          <div>
            <h1 className="text-16 font-semibold text-white">{account.name}</h1>
            <p className="font-black text-white">
              {formatAmount(account.currentBalance)}
            </p>
          </div>

          <article className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h1 className="text-12 font-semibold text-white">{userName}</h1>
              <h2 className="text-12 font-semibold text-white">●● / ●●</h2>
            </div>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● <span className="text-16">1234</span>
            </p>
          </article>
        </div>

        <div className="bank-card_icon">
          <Image
            src="/assets/icons/Paypass.svg"
            width={20}
            height={24}
            alt="paypass"
          />
          <Image
            src="/assets/icons/mastercard.svg"
            width={45}
            height={32}
            alt="mastercard"
            className="ml-2"
          />
        </div>

        <Image
          src="/assets/icons/lines.png"
          width={316}
          height={190}
          alt="lines"
          className="absolute left-0 top-0"
        />
      </Link>

      {/* COPY */}
    </div>
  );
};

export default BankCard;
