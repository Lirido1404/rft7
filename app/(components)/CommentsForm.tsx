"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import Link from "next/link";

function CommentsForm({
  id0,
  nameOfProprio,
  userImage,
  idUser,
  nameOfSessionUser,
}: {
  id0: string;
  nameOfProprio: string;
  userImage: string;
  idUser: string;
  nameOfSessionUser:string
}) {
  const { data: session } = useSession();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    contentOfComment: "",
    idOfRasso: id0,
    nomOfProprio: nameOfProprio,
    profilePic: userImage,
    idOfUser: idUser,
    nomOfUser:nameOfSessionUser
  });
  const router = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (session) {
      e.preventDefault();
      const res = await fetch("/api/Comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      router.refresh();
    } else {
      e.preventDefault();
      toast({
        description: (
          <span className="text-sm flex items-center">
            <img src="/Images/crosss.svg" alt="" className="w-6 h-6" />
            <p>Connectez-vous pour accéder à ce service.</p>
          </span>
        ),
        action: (
          <ToastAction altText="Me connecter" className="border-[#C91313]">
            <Link href={"/Account"}>Me connecter</Link>
          </ToastAction>
        ),
      });
    }
  };

  return (
    <>
      <Separator className="w-[60%] mx-auto mt-8" />
      <form
        onSubmit={handleSubmit}
        className="flex justify-center gap-3 w-full mt-4  "
      >
        <input
          type="text"
          onChange={handleChange}
          name="contentOfComment"
          className=" border rounded-full p-1 w-96 bg-gray-200 hover:pl-5 ease-in-out duration-300 text-sm pl-4"
          placeholder="Mon message..."
          required
        />
        <button
          type="submit"
          className="flex justify-center items-center border bg-[#1A73E8] border-gray-200 rounded-full p-2 hover:border-[#1A73E8] hover:text-white ease-in-out duration-200 hover:-rotate-90"
        >
          <img src="/Images/sendd.svg" className="h-6 w-6" alt="send" />
        </button>
      </form>
    </>
  );
}

export default CommentsForm;
