import { type NextPage } from "next";

import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import SignupPage from "./signup";

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({ text: "from tRPC" });

  const { data: session, status } = useSession();

  return (
    <>
      <SignupPage />
    </>
  );
};

export default Home;
