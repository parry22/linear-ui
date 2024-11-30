import React from "react";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="border-r border-[#FFFFFF33] w-full flex justify-center pt-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={180} height={180} />
        </div>
        <div className=" text-white flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Getting Started</h3>
          <div className="border-l border-[#FFFFFF33] text-[#CCCCCC] ml-2 pl-3 pt-2">
            <p className="hover:text-[#FFFFFF]">Prerequisites</p>
            <p className="hover:text-[#FFFFFF]">Installation</p>
            <p className="hover:text-[#FFFFFF]">Documentation</p>
          </div>
        </div>
        <div className=" text-white flex flex-col gap-2">
          <h3 className="text-xl font-semibold">Components</h3>
          <div className="border-l border-[#FFFFFF33] text-[#CCCCCC] ml-2 pl-3 pt-2">
            <Link href="/connect-wallet">
              <p className="hover:text-[#FFFFFF]">Connect Wallet</p>
            </Link>
            <p className="hover:text-[#FFFFFF]">Crypto Swap</p>
            <p className="hover:text-[#FFFFFF]">Address Display</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
