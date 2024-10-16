import Header from "@/components/shared/Header";
import RecentTransactions from "@/components/shared/RecentTransactions";
import RightSidebar from "@/components/shared/RightSidebar";
import TotalBalanceBox from "@/components/shared/TotalBalanceBox";
import { getAccount, getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { SearchParamProps } from "@/types";
import { redirect } from "next/navigation";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const currentPage = Number(page as string) || 1;

  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");

  const accounts = await getAccounts({ userId: loggedIn.$id });

  if (!accounts) return;

  const accountsData = accounts?.data;
  const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;

  const account = await getAccount({ appwriteItemId });

  console.log("Data", { accountsData, account });

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={
              loggedIn?.firstName
                ? loggedIn.firstName.charAt(0).toUpperCase() +
                  loggedIn.firstName.slice(1).toLowerCase()
                : ""
            }
            subtext="Access & manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={accountsData}
            totalBanks={accounts?.totalBanks}
            totalCurrentBalance={accounts?.totalCurrentBalance}
          />
        </header>

        {/* RECENT TRANSACTIONS */}
        <RecentTransactions
          accounts={accountsData}
          transactions={account?.transactions}
          appwriteItemId={appwriteItemId}
          page={currentPage}
        />
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={accounts.transactions}
        banks={accountsData?.slice(0, 2)}
      />
    </section>
  );
};

export default Home;
