"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function page() {
  return (
    <div className="max-w-7xl mx-auto text-white">
      <div>
        <h1 className="text-center ">
          <TypeAnimation
            sequence={[
              "Pet Shop",
              1000,
              "Pet Grooming",
              2000,
              "Pet Medicine",
              1000,
              "Pet Care",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
      </div>
    </div>
  );
}

export default page;
