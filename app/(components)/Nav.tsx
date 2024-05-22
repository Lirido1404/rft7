"use client";
import React, { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import "./Nav.css";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import ProfilStats from "./(MonCompte)/ProfilStats";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
function Nav({
  session,
  commentOfIdUser,
  participationOfIdUser,
}: {
  session: any;
  commentOfIdUser: number;
  participationOfIdUser: number;
}) {
  const userImage = session?.user?.image;
  const [dropDown, setDropDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // State pour gérer l'affichage du menu déroulant
  const [showCart, setShowCart] = useState(false); // State pour gérer l'affichage de la section du panier
  const [resPaiement, setResPaiement] = useState(false);
  const userId = session?.user?.id;
  const prenom = session?.user?.name?.split(" ")[0];
  const handleMouseEnter = () => {
    setDropDown(true);
  };

  const handleMouseLeave = () => {
    setDropDown(false);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu); // Inverser l'état d'affichage du menu déroulant
  };

  const toggleCart = () => {
    setShowCart(!showCart); // Inverser l'état d'affichage de la section du panier
  };

  return (
    <header className="w-full h-20 bg-[#1B1A18]">
      <nav className="flex justify-between w-full h-full items-center">
        <div className="flex gap-4 items-center relative">
          <Link href={"/"} className="ml-32">
            <Image
              src="/Images/logocar2.png"
              width={90}
              height={90}
              alt="logo"
            />
          </Link>
          
            <SheetTrigger asChild>
              <button>
                <img
                  src="/Images/shoppingCart.svg"
                  className="h-10 w-10"
                  alt=""
                />
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Panier</SheetTitle>
                <SheetDescription>
                  Votre panier est composé de x éléments.
                </SheetDescription>
              </SheetHeader>
              
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Payer</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
        </div>

        <div className="flex items-center gap-6 mr-60">
          <Link
            href={"/Admin"}
            className="text-white hover:bg-[#545454] py-1 px-4 ease-in-out duration-200 rounded text-lg"
          >
            Admin
          </Link>
          <div
            className="d1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/EspaceDeVente"
              className={`text-white cursor-pointer py-1 px-4 ease-in-out duration-200 rounded text-lg ${
                dropDown ? "bg-[#363636]" : ""
              }`}
            >
              Espace de vente
            </Link>
            {/* <div
              className={`absolute top-full left-0 bg-white rounded-md shadow-md opac w-full ${
                dropDown ? "" : "hidden"
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul>
                <li>
                  <Link href="/EspaceDeVente">
                    <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200 ease-in-out duration-200 rounded-md">
                      Du Magasin
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/EspaceDeVente">
                    <p className="block px-4 py-2 text-gray-800 hover:bg-gray-200 ease-in-out duration-200 rounded-md">
                      Entre Particuliers
                    </p>
                  </Link>
                </li>
              </ul>
            </div>*/}
          </div>

          <Link
            href={"/Rassemblements"}
            className="text-white hover:bg-[#545454] py-1 px-4 ease-in-out duration-200 rounded text-lg"
          >
            Rassemblements
          </Link>

          <div className="relative">
            {session ? (
              <>
                <img
                  src={userImage || "/Images/profilsvg1.svg"}
                  alt=""
                  className={`w-8 h-8 rounded-full cursor-pointer hover:outline-2 hover:outline-gray-500 outline outline-offset-1 ${
                    showMenu ? "outline-2 outline-[#C91313] " : ""
                  } ${userImage ? "" : "bg-white p-1"}  `}
                  onClick={toggleMenu}
                />
              </>
            ) : (
              <>
                <img
                  src={"/Images/profilsvg2.svg"}
                  alt=""
                  className={`w-8 h-8 rounded-full cursor-pointer hover:outline-2 hover:outline-gray-500 outline outline-offset-1 ${
                    showMenu ? "outline-2 outline-[#C91313] " : ""
                  } ${userImage ? "" : "bg-white p-1"}  `}
                  onClick={toggleMenu}
                />
              </>
            )}
            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ opacity: { duration: 0.35 } }}
                  className="absolute flex gap-4 bg-white shadow shadow-[#C91313] z-80 mt-2 rounded-md left-1/2 transform -translate-x-1/2 min-w-48 p-2 overflow-hidden"
                >
                  <div>
                    <div className="p-1">
                      <p className="text-left overflow-hidden whitespace-nowrap max-w-full">
                        <span> {userImage ? "Salut" : ""}</span>{" "}
                        <span className="font-bold ">{prenom}</span>
                      </p>
                      {session ? (
                        <p
                          className="text-sm text-gray-500 cursor-pointer hover:underline whitespace-nowrap hover:text-[#C91313] ease-in-out duration-200 italic "
                          onClick={() => signOut({ callbackUrl: "/" })}
                        >
                          Me déconnecter
                        </p>
                      ) : (
                        <Link
                          href={"/Account"}
                          className="text-sm text-center text-gray-500 cursor-pointer hover:underline whitespace-nowrap hover:text-[#1A73E8] ease-in-out duration-200 italic "
                        >
                          Me Connecter
                        </Link>
                      )}
                    </div>

                    {session && (
                      <ProfilStats
                        userId={userId}
                        commentOfIdUser={commentOfIdUser}
                        participationOfIdUser={participationOfIdUser}
                      />
                    )}
                  </div>
                  {resPaiement && (
                    <>
                      <div>
                        <p className="text-left p-1 font-bold overflow-hidden whitespace-nowrap max-w-full">
                          Résultat paiement:
                        </p>
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
