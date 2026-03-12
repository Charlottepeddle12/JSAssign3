import Image from "next/image";
import logo from "@/public/images/logo.jpg"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Rick and Morty page</h1>
      <Image src={logo} height={300} width={500} alt="Rick And Morty Logo"/>
      <Link href ="/characters">Check out the characters here!</Link>
    </div>
  );
}
