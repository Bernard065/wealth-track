import Header from "@/components/shared/Header";
import TotalBalanceBox from "@/components/shared/TotalBalanceBox";

export default function Home() {
  const loggedIn = { firstName: "Bernard" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Header
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access & manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
}
