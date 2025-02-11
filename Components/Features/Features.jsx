import Image from "next/image";
import React from "react";
import styles from "./features.module.css";
import image1 from "../../public/Coin chart.png";
import image2 from "../../public/Crypto swap.png";
import image3 from "../../public/Wallet connect.png";

const Features = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-6 flex flex-col gap-6">
      <h2 className="text-white text-[36px] text-center leading-[50px] my-[40px] ">
        Some stuff we are great at
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-[66.6%_33.3%] gap-[24px] px-4 rounded-lg">
        {/* Card 1 */}
        <div
          className={`h-[400px] flex  p-6 ${styles.borderGradient} bg-gradient`}
        >
          <div>
            <h3 className="text-white text-2xl font-semibold">
              Open-Source & Community-Driven
            </h3>
            <p className="text-gray-300 mt-2">
              Be part of a growing community, contribute, and shape a UI kit
              built by developers, for developers.
            </p>
          </div>
        </div>

        <div
          className={`h-[400px] flex p-6 ${styles.borderGradient} bg-gradient`}
        >
          <div>
            <h3 className="text-white text-xl font-semibold">
              Type-Safe & Developer-Friendly
            </h3>
            <p className="text-gray-300 mt-2">
              WAI-ARIA compliant and optimized for devices of all sizes.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[41.5%_58.5%] gap-6 px-4 rounded-lg">
        <div className="flex flex-col gap-6">
          <div
            className={`h-[400px] flex  p-6 ${styles.borderGradient} bg-gradient`}
          >
            <div>
              <h3 className="text-white text-xl font-semibold">
                Accessibility & Responsiveness
              </h3>
              <p className="text-gray-300 mt-2">
                WAI-ARIA compliant and optimized for devices of all sizes.
              </p>
            </div>
          </div>

          <div
            className={`h-[400px] flex  p-6 ${styles.borderGradient} bg-gradient`}
          >
            <div>
              <h3 className="text-white text-xl font-semibold">
                Tailwind-Powered Customization
              </h3>
              <p className="text-gray-300 mt-2">
                Easily adapt components to your brand with utility-first styling
                and responsive designs.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`row-span-2 h-[824px] flex  p-4 ${styles.borderGradient} bg-gradient`}
        >
          <div>
            <h3 className="text-white text-xl font-semibold">
              Ready-Made Web3 Components
            </h3>
            <p className="text-gray-300 mt-2 pb-[69px]">
              Save time pre-built components designed for seamless integration
              and scalability.
            </p>
            <div className="w-full h-[300px] mb-4">
              <Image
                src={image1}
                alt="Web3 Components - Main"
                width={603}
                height={297}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2 h-[300px]">
                <Image
                  src={image2}
                  alt="Web3 Components - Left"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="w-1/2 h-[300px]">
                <Image
                  src={image3}
                  alt="Web3 Components - Right"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
