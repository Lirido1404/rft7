"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";


import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import Image from "next/image";
import { useRouter } from "next/navigation";




function FeedBackForm({ idOfProduct }:{idOfProduct:string}) {
  const router = useRouter();
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const res = await fetch("/api/FeedBack", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    router.refresh();
    router.push(`/EspaceDeVente/${idOfProduct}`);
  };

  const [formData, setFormData] = useState({
    nom: "",
    titre: "",
    description: "",
    note: 0,
    idOfProduct: idOfProduct,
  });

  const handleChange = (e: any) => {
    const value =
      e.target.name === "note" ? parseInt(e.target.value) : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={handlesubmit}
        className="flex flex-col gap-8 mt-8  w-1/4 mx-auto"
      >
        <div className="flex justify-between gap-4">
          <div className="flex flex-col max-w-64">
            <label htmlFor="">Votre nom :</label>

            <Input
              type="text"
              name="nom"
              id="nom"
              onChange={handleChange}
              value={formData.nom}
              placeholder="Hugo"
            />
          </div>

          <div className="flex flex-col max-w-64">
            <label htmlFor="">Titre :</label>

            <Input
              type="text"
              name="titre"
              id="titre"
              onChange={handleChange}
              placeholder="Belle voiture"
            />
          </div>
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="">Description</label>

          <Textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
            placeholder="Donnez nous votre avis !"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="">Note</label>

          <select
            defaultValue={0}
            onChange={handleChange}
            name="note"
            id="note"
            className="border-[1px] rounded-md p-2"
          >
            <option value="0">0 étoile</option>
            <option value="1">1 étoile</option>
            <option value="2">2 étoiles</option>
            <option value="3">3 étoiles</option>
            <option value="4">4 étoiles</option>
            <option value="5">5 étoiles</option>
          </select>
        </div>

        <DrawerFooter>
          <Button className="bg-[#1A73E8]">
            <input
              type="submit"
              value={"Envoyer"}
              className="w-full h-full cursor-pointer "
            />
          </Button>
          <DrawerClose asChild>
            <Button variant="outline">Annuler</Button>
          </DrawerClose>
        </DrawerFooter>
      </form>
    </>
  );
}

export default FeedBackForm;
