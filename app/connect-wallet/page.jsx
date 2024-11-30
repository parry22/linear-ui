import Wallet from "@/Components/connect-wallet/Wallet";
import SideBar from "@/Components/SideBar";
import React from "react";

const page = () => {
  return (
    <div className="bg-[#120C0C] w-full flex">
      <div className="flex w-[15%] h-screen sticky top-0">
        <SideBar />
      </div>
      <div className="flex justify-center w-[85%] min-h-screen overflow-y-auto">
        <Wallet />
      </div>
    </div>
  );
};

export default page;
