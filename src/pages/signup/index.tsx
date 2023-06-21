import { useRouter } from "next/router";
import React, { useState } from "react";
import { api } from "~/utils/api";

const SignupPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Sign Up</h1>
        <div className="mt-4 w-full max-w-md">
          <input
            className="w-full rounded-md border px-4 py-2 outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mt-4 w-full rounded-md border px-4 py-2 outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-4 w-full rounded-md bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};
