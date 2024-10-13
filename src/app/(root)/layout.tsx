import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggeIn = { firstName: "Bernard", lastName: "Omboga" };
  return (
    <main className="flex h-screen w-full font-geistSans">
      <Sidebar />

      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image
            src="/assets/icons/logo.svg"
            width={30}
            height={30}
            alt="menu-logo"
          />
          <div>
            <MobileNav user={loggeIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
