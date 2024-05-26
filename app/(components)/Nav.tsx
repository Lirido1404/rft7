"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { signOut } from "next-auth/react";
import ProfilStats from "./(MonCompte)/ProfilStats";
import Image from "next/image";
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDateStore } from "@/app/(store)/store"; // Assurez-vous de fournir le bon chemin vers le store
import { Separator } from "@/components/ui/separator";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Nav = ({
  session,
  commentOfIdUser,
  participationOfIdUser,
  fetchAnnoncesCount,
}: {
  session: any;
  commentOfIdUser: number;
  participationOfIdUser: number;
  fetchAnnoncesCount: number;
}) => {
  const userImage = session?.user?.image;
  const [showMenu, setShowMenu] = useState(false);
  const userId = session?.user?.id;
  const prenom = session?.user?.name?.split(" ")[0];

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  const addBuyingDetail = useDateStore((state) => state.setBuyingDetails);
  const buyingdetails = useDateStore((state) => state.buyingdetails);
  const removeBuyingDetail = useDateStore((state) => state.removeBuyingDetail);

  const totalPrice = buyingdetails.reduce((total, item) => {
    return total + (item.price || 0);
  }, 0);

  const handleRemoveItem = (index: number) => {
    removeBuyingDetail(index);
  };

  return (
    <header className="w-full h-20 bg-[#f4f4f7]">
      <nav className="flex justify-between w-[70%] mx-auto h-full items-center">
        <div className="flex items-center relative">
          <Link href={"/"}>
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
                alt="shopping cart"
              />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Panier</SheetTitle>
              <SheetDescription>
                Votre panier est composé de {buyingdetails.length} {buyingdetails.length > 1 ? "éléments" : "élément"} :
                <div>
                  {buyingdetails.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 my-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-20 w-32 rounded-lg border"
                      />
                      <div className="flex flex-col flex-grow">
                        <p className="font-bold">{item.name}</p>
                        <p>{item.price} €</p>
                      </div>
                      <button
                        className="bg-red-500 text-white p-2 rounded"
                        onClick={() => handleRemoveItem(index)}
                      >
                        Supprimer
                      </button>
                    </div>
                  ))}
                  <Separator className="" />
                </div>
              </SheetDescription>
            </SheetHeader>
            <SheetFooter className="mt-4">
              <SheetClose asChild>
                {totalPrice > 0 ? <Button type="submit">Payer {totalPrice} €</Button> : <Button>Payer {totalPrice} €</Button>}
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </div>
        <div className="flex items-center gap-3">
          <NavLink href="/Rassemblements">Rassemblements</NavLink>
          <NavLink href="/EspaceDeVente">Espace de vente</NavLink>
        </div>
        <div className="relative">
          {session ? (
            <>
              <button
                className="flex items-center gap-4 rounded-full bg-[#C91313] px-4 py-1 hover:shadow-md ease-in-out duration-150"
                onClick={toggleMenu}
              >
                <img
                  src={userImage || "/Images/profilsvg1.svg"}
                  alt="user profile"
                  className={`w-8 h-8 rounded-full cursor-pointer  ${
                    showMenu
                      ? "outline-2 outline outline-offset-1 outline-white "
                      : ""
                  } ${userImage ? "" : "bg-white p-1"}  `}
                />
                <div className="transition-transform duration-150 transform hover:translate-x-1 flex items-center gap-2">
                  <p className="text-lg text-white">Profil</p>
                  <img
                    src="/Images/chevronn4.svg"
                    alt=""
                    className={`h-6 w-6 ease-in-out duration-150 ${
                      showMenu && "-rotate-90"
                    } `}
                  />
                </div>
              </button>
            </>
          ) : (
            <>
              <button
                className="flex items-center gap-4 rounded-full bg-[#C91313] px-4 py-1 hover:shadow-md ease-in-out duration-150"
                onClick={toggleMenu}
              >
                <img
                  src={userImage || "/Images/profilsvg1.svg"}
                  alt="user profile"
                  className={`w-8 h-8 rounded-full cursor-pointer  ${
                    showMenu
                      ? "outline-2 outline outline-offset-1 outline-white "
                      : ""
                  } ${userImage ? "" : "bg-white p-1"}  `}
                />
                <div className="transition-transform duration-150 transform hover:translate-x-1 flex items-center gap-2">
                  <p className="text-lg text-white">Profil</p>
                  <img
                    src="/Images/chevronn4.svg"
                    alt=""
                    className={`h-6 w-6 ease-in-out duration-150 ${
                      showMenu && "-rotate-90"
                    }`}
                  />
                </div>
              </button>
            </>
          )}
          <AnimatePresence>
            {showMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.225, ease: "easeInOut" }}
                className="absolute flex flex-col gap-4 bg-white shadow-lg rounded-md left-1/2 transform -translate-x-1/2 mt-2 p-4 z-10 w-64"
              >
                <div>
                  <div className="p-2">
                    <p className="text-left overflow-hidden whitespace-nowrap max-w-full">
                      <span> {userImage ? "Salut" : ""}</span>{" "}
                      <span className="font-bold ">{prenom}</span>
                    </p>
                    {session ? (
                      <p
                        className="text-sm text-gray-500 cursor-pointer hover:underline whitespace-nowrap hover:text-[#C91313] ease-in-out duration-200 italic"
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        Me déconnecter
                      </p>
                    ) : (
                      <Link
                        href={"/Account"}
                        className="text-sm text-center text-gray-500 cursor-pointer hover:underline whitespace-nowrap italic"
                      >
                        <div className="flex items-center gap-2 hover:bg-gray-100 ease-in-out duration-200 rounded-lg p-2">
                          Me Connecter
                          <img
                            src="Images/logocar2.png"
                            className="h-12 w-12"
                            alt=""
                          />
                        </div>
                      </Link>
                    )}
                  </div>
                  {session && (
                    <ProfilStats
                      userId={userId}
                      fetchAnnoncesCount={fetchAnnoncesCount}
                      commentOfIdUser={commentOfIdUser}
                      participationOfIdUser={participationOfIdUser}
                    />
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Nav;

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link href={href} passHref>
    <motion.a
      className="text-black py-1 px-4 ease-in-out duration-200 rounded text-xl font-bold relative overflow-hidden"
      whileHover="hover"
      initial="initial"
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 h-1 w-full bg-[#C91313]"
        variants={{
          initial: { width: "0%" },
          hover: { width: "100%" },
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  </Link>
);

export { NavLink };
