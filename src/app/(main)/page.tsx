"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function page() {
  return (
    <main className="w-full min-h-screen text-white">
      <div className="w-full h-[90vh] flex justify-center items-center">
        <h1 className="text-center ">
          <TypeAnimation
            sequence={[
              // "Pet Shop",
              // 1000,
              // "Pet Grooming",
              // 2000,
              // "Pet Medicine",
              // 1000,
              // "Pet Care",
              // 2000,
              "Coming Soon..",
              2000,
              " ",
            ]}
            wrapper="span"
            speed={10}
            style={{
              fontSize: "5em",
              display: "inline-block",
              fontWeight: "bold",
            }}
            repeat={Infinity}
          />
        </h1>
      </div>

      <div></div>
    </main>
  );
}

export default page;
