"use client";

import { useRouter } from "next/navigation";
import React from "react";

function Delete({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`/api/Cars/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <p
      className="text-[#DB0955] text-3xl font-bold cursor-pointer"
      onClick={handleDelete}
    >
      Delete Car
    </p>
  );
}

export default Delete;
