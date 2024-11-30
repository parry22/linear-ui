import Image from "next/image";
import React from "react";

const WalletCode = () => {
  return (
    <div className="bg-[#FFFFFF1A] w-full rounded-3xl overflow-y-auto h-[82vh] p-6">
      <div className="flex justify-between items-start gap-4">
        <div className="pt-8 pl-10 text-[#CCCCCC] flex flex-col gap-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            dolorum velit quod aliquid ut molestias nesciunt esse qui eos.
            Quisquam molestias molestiae rerum ab odit aliquam laboriosam, sed
            laborum voluptatem tempora repellat quod id maiores nostrum numquam
            inventore hic quam. Itaque, quasi! Beatae ipsa pariatur vitae
            tempora at odio sapiente!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            dolorum velit quod aliquid ut molestias nesciunt esse qui eos.
            Quisquam molestias molestiae rerum ab odit aliquam laboriosam, sed
            laborum voluptatem tempora repellat quod id maiores nostrum numquam
            inventore hic quam. Itaque, quasi! Beatae ipsa pariatur vitae
            tempora at odio sapiente!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            dolorum velit quod aliquid ut molestias nesciunt esse qui eos.
            Quisquam molestias molestiae rerum ab odit aliquam laboriosam, sed
            laborum voluptatem tempora repellat quod id maiores nostrum numquam
            inventore hic quam. Itaque, quasi! Beatae ipsa pariatur vitae
            tempora at odio sapiente!
          </p>
        </div>
        <div className="w-full flex justify-end">
          <Image src="/Copy.svg" height={50} width={50} alt="copy code" className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default WalletCode;
