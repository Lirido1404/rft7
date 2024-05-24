"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

function CarsForm({
  sessionName,
  sessionProfilPictureProprio,
  mailDuProprio,
  id,
}: {
  sessionName: string;
  sessionProfilPictureProprio: string;
  mailDuProprio: string;
  id:string;
}) {
  const router = useRouter();
  const [image, setImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    power: "",
    consumption: "",
    emission: "",
    performance: "",
    price: undefined,
    tag:"",

    nomProprio: sessionName,
    photoProfilProprio: sessionProfilPictureProprio,
    mailProprio: mailDuProprio,
    userId: id,
  });

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/Cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    router.push("/EspaceDeVente");
    router.refresh();
  };

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;

    // Si le champ est un champ de type file, c'est pour l'image
    if (files && name === "image") {
      const file = files[0];
      // Vérifie s'il y a un fichier sélectionné
      if (file) {
        // Convertis l'image en base64
        convertToBase64(file);
      }
    } else {
      // Sinon, c'est un champ de texte normal
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const convertToBase64 = (file: any) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.result) {
        setImage(reader.result as string);
        setFormData((prevState) => ({
          ...prevState,
          image: reader.result as string,
        }));
      }
    };
  };

  return (
    <>
      <form onSubmit={handlesubmit} className="flex flex-col gap-8 mt-8">
        <div className="flex gap-4">
          <label htmlFor="">Car name :</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Image :</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
            className="bg-slate-200 rounded w-[350px]"
            rows={4}
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Power</label>
          <input
            type="text"
            name="power"
            id="power"
            onChange={handleChange}
            value={formData.power}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Consumption</label>
          <input
            type="text"
            name="consumption"
            id="consumption"
            onChange={handleChange}
            value={formData.consumption}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">emission</label>
          <select
            name="emission"
            id="emission"
            onChange={handleChange}
            value={formData.emission}
            className="bg-slate-200 rounded"
          >
            <option value="null"></option>
            <option value="Faible">Faible</option>
            <option value="Moyenne">Moyenne</option>
            <option value="Forte">Forte</option>
          </select>
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Kilométrage</label>
          <input
            type="number"
            name="performance"
            id="performance"
            onChange={handleChange}
            value={formData.performance}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Prix</label>
          <input
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={formData.price}
            className="bg-slate-200 rounded "
          />
        </div>

        <div className="flex gap-4">
          <label htmlFor="">Tag</label>
          <select
            name="tag"
            id="tag"
            onChange={handleChange}
            value={formData.tag}
            className="bg-slate-200 rounded"
          >
            <option value="null"></option>
            <option value="bmw">BMW</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
        </div>

        <div>
          <input
            type="submit"
            value={"Send"}
            className="bg-slate-200 rounded cursor-pointer "
          />
        </div>
      </form>
      {image !== "" && image !== null ? (
        <Image src={image} width={100} height={100} alt="Image" />
      ) : null}
    </>
  );
}

export default CarsForm;
