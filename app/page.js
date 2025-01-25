import Image from "next/image";
import SideBar from "@/Components/SideBar";
import Body from "@/Components/body/body";
import Footer from "@/Components/footer/Footer";
import Header from "@/Components/Header/Header";
export default function Home() {
  return (
    <div className="bg-black w-full min-h-screen flex">
      {/* <div className="flex w-[15%]">
        <SideBar />
      </div> */}
      <div className="w-full">
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}
