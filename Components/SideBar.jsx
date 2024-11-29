import React from "react";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  return (
    <div className="border-r border-gray-200 w-full flex justify-center pt-10">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={180} height={180} />
        </div>
        <div className=" text-white">
          <h3>Getting Started</h3>
          <div className="border-l text-[#CCCCCC] ml-2 pl-2">
            <p>Prerequisites</p>
            <p>Installation</p>
            <p>Documentation</p>
          </div>
        </div>
        <div className=" text-white">
          <h3>Components</h3>
          <div className="border-l text-[#CCCCCC] ml-2 pl-2">
            <Link href="/connect-wallet">
            <p>Connect Wallet</p>
            </Link>
            <p>Crypto Swap</p>
            <p>Address Display</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
