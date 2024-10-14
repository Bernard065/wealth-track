import Image from "next/image";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between">
      {children}
      <div className="auth-asset">
        <div>
          <Image
            src="/assets/icons/auth.svg"
            fill
            alt="auth"
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
