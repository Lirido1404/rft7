import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full h-24 bg-[#F4F4F7] flex justify-center items-center mt-8">
      <Link href={"https://portfolio2024-lime.vercel.app/"}>
        <p className="text-black text-md underline cursor-pointer">
          Réalisé par Maxime Prévot®
        </p>
      </Link>
    </footer>
  );
}

export default Footer;
