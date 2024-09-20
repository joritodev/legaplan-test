import Image from "next/image";
import { dateFormatter} from "./dateFormatter";
import "./header.scss"

export function Header() {
  const date = new Date();
  
  return (
    <header>
       <Image
        src="logo.svg"
        alt="Logo"
        width={150}
        height={36}
        priority
      />
      <p className="welcome">Bem vindo de volta, João</p>
      <p className="date">{dateFormatter(date)}</p>
    </header>
  );
}
