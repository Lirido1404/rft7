"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { useDateStore } from "@/app/(store)/store";

function PPPourProfil({
  profilPic,
  idOfUser,
  nomOfUser,
  sessionid,
  allComments,
}: {
  profilPic: string;
  idOfUser: string;
  nomOfUser: string;
  sessionid: string;
  allComments: any;
}) {
  const [menuVisible, setMenuVisible] = useState(false);

  const commentFilterBasedOnUser = allComments.filter(
    (comment: any) => comment.idOfUser === idOfUser
  );

  const setSrcImage2 = useDateStore((state) => state.setSrcImage2);
  const srcImage2 = useDateStore((state) => state.srcImage2);
  const [profileSrc, setProfileSrc] = useState(profilPic);

  const setUserId = useDateStore((state) => state.setUserId);
  const userId = useDateStore((state) => state.userId);
  useEffect(() => {
    if (profileSrc) {
      setSrcImage2(profileSrc);
    }
  }, [profileSrc, setSrcImage2, idOfUser]);

  useEffect(() => {
    setUserId(idOfUser);
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="relative flex items-end">
      <img
        src={profilPic || "/Images/profilsvg1.svg"}
        alt="img"
        className="h-16 w-16 rounded-full border border-gray-200 cursor-pointer"
        onClick={toggleMenu}
      />
      {idOfUser}
      <AnimatePresence>
        {menuVisible && sessionid !== idOfUser && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
            className="absolute flex flex-col -top-32 left-0 bg-white border border-red-500 rounded shadow-md p-2"
          >
            <h2>
              Profil de <span className="font-bold text-lg"> {nomOfUser}</span>
            </h2>

            <Separator className="bg-[#C91313] w-[60%] mx-auto mt-3" />

            <div className="flex flex-col gap-2">
              <Link
                href={`/MonCompte/Messages/${idOfUser}`}
                className=" py-2 px-16 whitespace-nowrap text-center mt-3 bg-blue-500 text-white rounded hover:bg-blue-600 "
              >
                Voir messages ({commentFilterBasedOnUser.length})
              </Link>
              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PPPourProfil;
