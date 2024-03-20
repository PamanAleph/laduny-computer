import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="py-4 text-white">
      <ul className="flex justify-between items-center max-w-7xl mx-auto">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/"}>Grooming</Link>
        </li>
        <li>
          <Link href={"/"}>Consultation</Link>
        </li>
        <li className="font-italiana text-5xl font-extralight">
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

export default Navbar;
