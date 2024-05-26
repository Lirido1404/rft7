"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Remplacer next/navigation par next/router

function DeleteAnnonce({ idPost }: { idPost: string }) {
  const router = useRouter();
  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Empêcher le comportement par défaut du lien
    e.stopPropagation(); // Arrêter la propagation de l'événement

    const res = await fetch(`/api/Annonces/${idPost}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh(); // Utiliser router.reload() pour actualiser la page
    }
  };

  return (
    <button
      className="bg-red-500 text-white h-8 w-8 flex justify-center items-center absolute rounded-lg top-2 right-2"
      onClick={(e) => handleDelete(e)}
    >
      X
    </button>
  );
}

export default DeleteAnnonce;
