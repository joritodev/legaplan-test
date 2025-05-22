import Image from "next/image";
import { dateFormatter} from "./dateFormatter";
import "./header.scss"
import { useState, useEffect } from "react";

export function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  
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
      <p className="date">{dateFormatter(currentDate)}</p>
    </header>
  );
}
