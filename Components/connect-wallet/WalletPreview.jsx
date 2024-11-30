import Image from "next/image";
import React from "react";

const WalletPreview = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <Image
        src="/WalletConnect.svg"
        height={500}
        width={400}
        alt="wallet-preview"
      />
    </div>
  );
};

export default WalletPreview;
