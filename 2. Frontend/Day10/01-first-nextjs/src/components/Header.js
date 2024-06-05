"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header(){
    const pathname = usePathname();
    return (
      <header style={{backgroundColor: "skyblue"}}>
        <h1>HEADER</h1>
        <nav>
          <ul>
            <li><Link href="/" className={pathname === "/" ? "active" : "" }>Home</Link></li>
            <li><Link href="/about" className={pathname === "/about" ? "active" : "" }>About</Link></li>
            <li><Link href="/contact" className={pathname === "/contact" ? "active" : "" }>Contact</Link></li>
          </ul>
        </nav>
      </header>
    )
}