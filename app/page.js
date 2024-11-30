import Image from "next/image";
import SideBar from "@/Components/SideBar";
export default function Home() {
  return (
    <div className="bg-[#120C0C] w-full min-h-screen flex">
      <div className="flex w-[15%]">
        <SideBar />
      </div>
    </div>
  );
}
