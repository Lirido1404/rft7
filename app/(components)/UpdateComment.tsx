"use client";
// Import des modules nécessaires
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

function UpdateComment({
  idOfComment,
  contentOfComment,
}: {
  idOfComment: string;
  contentOfComment: string;
}) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    contentOfComment: contentOfComment,
  });

  // Fonction de gestion du changement d'entrée
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async () => {
    const res = await fetch(`/api/Comments/${idOfComment}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        key="form"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <form onSubmit={handleSubmit} className="flex gap-2">
          {/* Champ de saisie de texte avec animation */}
          <motion.input
            type="text"
            onChange={handleChange}
            value={formData.contentOfComment}
            name="contentOfComment"
            className="font-bold rounded-full bg-gray-200 w-[70%] pl-2 "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Bouton d'envoi avec animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <button
              type="submit"
              className="flex justify-center items-center bg-[#1A73E8] border-gray-200 rounded-full p-2 hover:border-[#1A73E8] hover:text-white ease-in-out duration-200 hover:-rotate-90"
              >
              {/* Icône d'envoi avec animation */}
              <motion.img
                src="/Images/sendd.svg"
                className="h-6 w-6"
                alt="send"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
            </button>
          </motion.div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}

export default UpdateComment;
