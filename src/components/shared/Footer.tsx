import { logoutUser } from "@/lib/actions/user.actions";
import { FooterProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = ({ user, type }: FooterProps) => {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await logoutUser();

    if (loggedOut) router.push("/sign-in");
  };
  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.firstName[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {`${user?.firstName ? user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1).toLowerCase() : ""} ${user?.lastName ? user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1).toLowerCase() : ""}`}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
      </div>

      <div className="footer_image" onClick={handleLogout}>
        <Image src="/assets/icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  );
};

export default Footer;
