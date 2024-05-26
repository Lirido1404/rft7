"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Link from "next/link";
import { motion } from "framer-motion";
function CarsForm({
  sessionName,
  sessionProfilPictureProprio,
  mailDuProprio,
  id,
}: {
  sessionName: string;
  sessionProfilPictureProprio: string;
  mailDuProprio: string;
  id: string;
}) {
  const router = useRouter();
  const [image, setImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    performance: "",
    price: undefined,
    tag: "",

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

  const returnTag = (tag: string) => {
    switch (tag) {
      case "bmw":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/bmwlogo.svg"
                alt="bmwlogo"
                className="h-6 w-6"
              />
            </div>
          </>
        );
        break;
      case "mercedes":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/mercedeslogo.svg"
                alt="merceslogo"
                className="h-6 w-6"
              />{" "}
            </div>
          </>
        );
        break;
      case "audi":
        return (
          <>
            <div className="flex gap-2 items-center p-1">
              {" "}
              <img
                src="/Images/audilogo.svg"
                alt="audilogo"
                className="h-6 w-6"
              />{" "}
            </div>
          </>
        );
        break;
    }
  };
  return (
    <div className="grid grid-cols-2">
      <form
        onSubmit={handlesubmit}
        className="grid grid-cols-2 gap-6 mt-8 w-[80%] mx-auto relative"
      >
              <div className="blob4 absolute -top-10 -left-20 opacity-70 w-20 h-20 rotate-12"></div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Image :</label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleChange}
            className="bg-slate-200 rounded "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Nom de la voiture :</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            value={formData.name}
            className="bg-slate-200 rounded "
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Tag :</label>
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

        <div className="flex flex-col gap-1">
          <label htmlFor="">Description :</label>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            value={formData.description}
            className="bg-slate-200 rounded w-full"
            rows={4}
          />
        </div>

        

        

        <div className="flex flex-col gap-1">
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

        <div className="flex flex-col gap-1">
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

        <div className="mt-6">
          <input
            type="submit"
            value={"Envoyer"}
            className="bg-[#1C74E9] px-4 py-1 text-white rounded-lg cursor-pointer "
          />
        </div>
      </form>
      <div className="grid grid-cols-2 gap-8 p-8 relative">
      <div className="blob absolute top-40 right-20 opacity-70 w-80 h-80 rotate-12"></div>

        <div className="flex flex-col ">
          {formData.image !== "" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={formData.image}
            >
              <h1 className="text-center font-bold text-xl">
                Prévisualisation de l&apos;offre
              </h1>
              <Card className="hover:shadow-lg ease-in-out duration-150 relative border-2 border-[#C91313] w-full">
                <div className="absolute flex flex-col gap-1 -left-6 top-4">
                  <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-white rounded-full px-2 text-black hover:bg-white shadow">
                    <span className="flex gap-1 items-center">
                      {returnTag(formData.tag)}
                      <p className="font-bold"> {formData.name} </p>
                    </span>
                  </Badge>

                  <Link
                    href={`/MonCompte/Messages/${formData.userId}`}
                    className="mt-2"
                  >
                    <Badge className="flex gap-1 items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-[#C91313] hover:text-white shadow">
                      <img
                        src={
                          formData.photoProfilProprio ||
                          "/Images/profilsvg1.svg"
                        }
                        className="h-6 w-6 rounded-full border"
                        alt=""
                      />
                      {formData.nomProprio}
                    </Badge>
                  </Link>

                  <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-white shadow">
                    <span className="flex gap-1 items-center">
                      <img src="/Images/coinn.svg" alt="" className="h-6 w-6" />
                      <p className="font-bold">{formData.price} €</p>
                    </span>
                  </Badge>

                  <Badge className="inline-flex items-center bg-[#f4f4f7] border-2 border-[#C91313] rounded-full px-2 text-black hover:bg-white shadow">
                    <span className="flex gap-1 items-center">
                      <img src="/Images/roadd.svg" alt="" className="h-6 w-6" />
                      <p className="font-bold">{formData.performance} Km</p>
                    </span>
                  </Badge>
                </div>
                <img
                  src={formData.image}
                  alt=""
                  className="h-full w-full rounded-lg hover:testimgborderblack"
                />
              </Card>
            </motion.div>
          ) : (
            <>
              <h1 className=" font-bold text-xl">
                Prévisualisation de l&apos;offre
              </h1>
              <div className="w-80 h-40 border-2 border-red-500 rounded-lg">

              </div>
            </>
          )}
        </div>

        <div className="w-80 h-40 flex justify-center flex-col items-center mt-4">
          <h1 className="text-center text-gray-500 font-bold text-xl cacherr">
            Prévisualisation de l&apos;offre
          </h1>
          <Skeleton width={320} height={160} />
        </div>

        <div className="w-80 h-40 flex justify-center flex-col items-center">
          <h1 className="text-center text-gray-500 font-bold text-xl cacherr">
            Prévisualisation de l&apos;offre
          </h1>
          <Skeleton width={320} height={160} />
        </div>
        
        

      
      </div>
      {/* {image !== "" && image !== null ? (
        <Image src={image} width={100} height={100} alt="Image" />
      ) : null} */}
    </div>
  );
}

export default CarsForm;
