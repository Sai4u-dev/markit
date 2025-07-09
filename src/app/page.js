import Container from "../components/Container";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className=" w-screen fixed text-center">
        <div className="home-logo text-[350px] text-amber-400 font-bold tracking-[2rem]">Mark<span className=" text-amber-600">I</span>t</div>
      </div>
    </>
  );
}
