import Calculater from "./Calculater";
import Image from "next/image";
import logo from "../public/logo.svg"


export default function Home() {
  return (
    <main className="flex flex-col bg-light-grayish-cyan h-full items-center">
      
      <Image src={logo} alt={logo}  className="py-10"/>
      <Calculater />
    </main>
  );
}
