import AuthForm from "@/components/forms/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();

  console.log("Logged in User", loggedInUser);
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
    </section>
  );
};

export default SignUp;
