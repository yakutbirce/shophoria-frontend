import React from "react";
import { useHistory } from "react-router-dom";

const AuthChoicePage = () => {
  const history = useHistory();

  return (
    <main className="flex flex-col items-center justify-center min-h-[320px] py-10 gap-6">
      <h1 className="text-2xl font-bold">Welcome </h1>

      <button
        onClick={() => history.push("/login")}
        className="px-8 py-3 w-60 rounded-lg bg-[#0069ec] text-white font-semibold hover:opacity-90"
      >
        Login
      </button>

      <button
        onClick={() => history.push("/signup")}
        className="px-8 py-3 w-60 rounded-lg bg-[#25A3FF] text-white font-semibold hover:opacity-90"
      >
        Sign&nbsp;Up
      </button>
    </main>
  );
};

export default AuthChoicePage;
