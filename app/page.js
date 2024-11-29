import Image from "next/image";
import SideBar from "@/Components/SideBar";
export default function Home() {
  return (
    <div className="bg-gray-900 w-full min-h-screen flex">
      <div className="flex w-[15%]">
        <SideBar />
      </div>
    </div>
  );
}
