// DateForm.tsx
"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { DrawerClose } from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";


function DateForm({userId}:{userId:string}) {
  
  const router = useRouter();

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState<{
    date: Date | undefined;
    title: string;
    lieu: string;
    horaire: string;
    duree: string;
    tag1: string;
    tag2: string;
    tag3: string;
    objectif: string;
    content: string;
    idOfUser:typeof userId;
  }>({
    date: undefined,
    title: "",
    lieu: "",
    horaire: "",
    duree: "",
    tag1: "",
    tag2: "",
    tag3: "",
    objectif: "",
    content: "",
    idOfUser:userId,
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    setErrorMessage("");

    // Convertir la date en chaîne de caractères au format local
    const dateString = date?.toLocaleDateString();

    const dataToSend = {
      ...formData,
      date: dateString,
    };

    console.log("Les données envoyés :" + dataToSend);

    const res = await fetch("/api/Date", {
      method: "POST",
      body: JSON.stringify(dataToSend),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
      // Afficher un message d'erreur plus descriptif que "not ok"
      alert(response.message);
    } else {
      router.refresh();
      
      
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="post"
      className="flex w-full justify-center gap-10 items-center "
    >
      <div className="flex justify-center">
        <div className="space-y-1">
          <Label htmlFor="date" className="text-black">
            Date
          </Label>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow bg-white text-black w-64"
          />

          <p className="text-black text-center">{date?.toLocaleDateString()}</p>
        </div>
      </div>
      <Separator orientation="vertical" className="h-80 bg-[#C91313]" />
      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <Label htmlFor="title" className="text-black">
            Titre
          </Label>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={handleChange}
            required
            value={formData.title}
            placeholder="Titre"
            className="text-black w-64"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="lieu" className="text-black">
            Lieu
          </Label>
          <Input
            type="text"
            name="lieu"
            id="lieu"
            onChange={handleChange}
            required
            value={formData.lieu}
            placeholder="Lieu"
            className="text-black w-64"
          />
        </div>
        <div className=" flex items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="horaire" className="text-black">
              Horaires
            </Label>
            <select
              name="horaire"
              id="horaire"
              onChange={handleChange}
              required
              value={formData.horaire}
              className="  border border-gray-200 shadow-sm p-2 rounded-[7px] text-sm text-gray-700"
            >
              <option value="Définir">Définir</option>
              {(() => {
                const options = [];
                for (let hour = 0; hour < 24; hour++) {
                  options.push(
                    <option key={hour} value={hour}>
                      {hour}:00
                    </option>
                  );
                }
                return options;
              })()}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="duree" className="text-black">
              Durée
            </Label>
            <select
              name="duree"
              id="duree"
              onChange={handleChange}
              required
              value={formData.duree}
              className="text-gray-700  border border-gray-200 shadow-sm p-2 rounded-[7px] text-sm"
            >
              <option value="Définir">Définir</option>
              {(() => {
                const options = [];
                for (let hour = 0; hour < 5; hour++) {
                  options.push(
                    <option key={hour} value={hour}>
                      {hour}:00
                    </option>
                  );
                }
                return options;
              })()}
              <option value="5">5: et plus</option>
            </select>
          </div>
        </div>
        <div className="flex max-w-64 flex-wrap gap-4 justify-between">
          <div className="flex flex-col gap-1 ">
            <Label htmlFor="tag1" className="text-black">
              Type Rasso
            </Label>
            <select
              name="tag1"
              id="tag1"
              onChange={handleChange}
              required
              value={formData.tag1}
              className="text-gray-700 w-24 border border-gray-200 shadow-sm p-2 rounded-[7px] text-sm"
            >
              <option value="Définir">Définir</option>
              <option value="Parking">Parking</option>
              <option value="Exploration">Exploration</option>
              <option value="Course">Course</option>
              <option value="Fête">Fête</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="tag2" className="text-black">
              Nbr Parts
            </Label>
            <select
              name="tag2"
              id="tag2"
              onChange={handleChange}
              required
              value={formData.tag2}
              className="text-gray-700 w-24 border border-gray-200 shadow-sm p-2 rounded-[7px] text-sm"
            >
              {" "}
              <option value="Définir">Définir</option>
              <option value="+20">+20 participants</option>
              <option value="+50">+50 participants</option>
              <option value="+100">+100 participants</option>
              <option value="+250">+250 participants</option>
              <option value="+500">+500 participants</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="tag3" className="text-black">
              Type Voiture
            </Label>
            <select
              name="tag3"
              id="tag3"
              onChange={handleChange}
              required
              value={formData.tag3}
              className="text-gray-700 w-24 border border-gray-200 shadow-sm p-2 rounded-[7px] text-sm"
            >
              {" "}
              <option value="Définir">Définir</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Audi">Audi</option>
              
            </select>
          </div>
        </div>
      </div>
      <Separator orientation="vertical" className="h-80 bg-[#C91313]" />

      <div className="flex flex-col gap-4">
        <div className="space-y-1">
          <Label htmlFor="objectif" className="text-black">
            Objectifs
          </Label>
          <Input
            type="text"
            name="objectif"
            id="objectif"
            onChange={handleChange}
            required
            value={formData.objectif}
            placeholder="Objectifs"
            className="text-black w-64"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="content" className="text-black">
            Contenu
          </Label>
          <Textarea
            name="content"
            id="content"
            onChange={handleChange}
            required
            value={formData.content}
            placeholder="Contenu"
            className="text-black w-96"
            rows={5}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button type="submit" className="mt-4 w-full bg-[#1A73E8] ">
          Ajouter
        </Button>
        <DrawerClose className="w-full ">
          <Button className="w-full hover:bg-[#c7c7c7]" variant={"secondary"}>
            Annuler
          </Button>
        </DrawerClose>
      </div>

      {/* Suite à mettre ici pour rajouter les colonnes */}
    </form>
  );
}

export default DateForm;
