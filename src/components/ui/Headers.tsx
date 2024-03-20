import Link from "next/link";
import React from "react";

function Header() {
  return (
    <nav className="w-full px-8 py-4 text-white">
      <ul className="w-5/6 flex justify-between items-center max-w-7xl mx-auto text-lg font-medium">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Grooming</Link>
        </li>
        <li>
          <Link href={"/"}>Consultation</Link>
        </li>
        <li className="font-italiana font-bold text-5xl">
          <Link href={"/"}>Pet Shop</Link>
        </li>
        <li>
          <Link href={"/"}>Product</Link>
        </li>
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>
            <button className="border rounded-xl border-white px-7 py-2">
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
