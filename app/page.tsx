import Calculater from "./Calculater";
import Image from "next/image";
import logo from "../public/logo.svg"


export default function Home() {
  return (
    <main className="flex flex-col bg-light-grayish-cyan h-[100vh] w-[100vw] items-center">
      
      <Image src={logo} alt={logo}  className="py-10"/>
      <Calculater />
    </main>
  );
}
