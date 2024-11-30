"use client";
import React, { useState } from "react";
import WalletCode from "./WalletCode";
import WalletPreview from "./WalletPreview";

const Wallet = () => {
  const [choose, setChoose] = useState(false);

  return (
    <div className="flex justify-center py-10 w-[85%]">
      <div className="w-full flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-[#FFFFFF]">
          Wallet Connect
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setChoose(false)}
              className={`cursor-pointer w-[6rem] rounded-2xl py-2 ${
                choose
                  ? "bg-transparent text-[#CCCCCC]"
                  : "bg-[#FFFFFF1A] text-[#FFFFFF]"
              }`}
            >
              Preview
            </button>
            <button
              onClick={() => setChoose(true)}
              className={`cursor-pointer w-[6rem] rounded-2xl py-2 ${
                choose
                  ? "bg-[#FFFFFF1A] text-[#FFFFFF]"
                  : "bg-transparent text-[#CCCCCC]"
              }`}
            >
              Code
            </button>
          </div>

          <div className="w-full border border-[#FFFFFF1A] rounded-3xl p-6 h-[90vh] flex">
            {choose ? <WalletCode /> : <WalletPreview />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
