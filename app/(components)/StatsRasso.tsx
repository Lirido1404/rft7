"use client";
import React from "react";
import { motion } from "framer-motion";

function StatsRasso({
  verificationPart,
  resParticipations,
  res0,
}: {
  verificationPart: string;
  resParticipations: any;
  res0: number;
}) {
  return (
    <motion.div
      className="flex gap-4 border-l-2 border-[#C91313]"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      key={`${verificationPart}-${res0}`}
      >
      <motion.p
        className="ml-4 flex gap-1 items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        <img src="/Images/peoplee.svg" alt="Personnes" className="h-8 w-8" />
        <span className="text-[#C91313] font-bold">
          {" "}
          {resParticipations}{" "}
          {resParticipations <= 1 ? "participant" : "participants"}{" "}
        </span>
      </motion.p>
      <motion.p
        className="ml-4 flex gap-1 items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <img
          src="/Images/commentss.svg"
          alt="Commentaires"
          className="h-8 w-8"
        />
        <span className="text-[#C91313] font-bold">
          {res0} {res0 <= 1 ? "commentaire" : "commentaires"}
        </span>
      </motion.p>
      {verificationPart ? (
        <motion.p
          className="ml-4 flex gap-1 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img src="/Images/checkk.svg" className="h-8 w-8" alt="Check" />
          <span className="text-[#C91313] font-bold"> status : Inscrit </span>
        </motion.p>
      ) : (
        <motion.p
          className="ml-4 flex gap-1 items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img src="/Images/crosss.svg" className="h-8 w-8" alt="Check" />
          <span className="text-[#C91313] font-bold">
            {" "}
            status : Non inscrit{" "}
          </span>
        </motion.p>
      )}
    </motion.div>
  );
}

export default StatsRasso;
