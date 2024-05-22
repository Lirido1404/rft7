import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full h-24 bg-black flex justify-center items-center mt-12">
      <Link href={"https://portfolio2024-lime.vercel.app/"}>
        <p className="text-white text-md underline cursor-pointer">
          Réalisé par Maxime Prévot - tous droits réservés ®
        </p>
      </Link>
    </footer>
  );
}

export default Footer;
