"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import "./UserFrom.css";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
function UserForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh] flex-col">
      {/*<div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 sm:w-1/4 border-slate-400 border-2 p-4 rounded-lg"
      >
        <div className="animopac">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            required={true}
            value={formData.name}
          />
        </div>
        <div className="animopac">
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            required={true}
            value={formData.email}
          />
        </div>
        <div className="animopac">
          <Label htmlFor="email">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            required={true}
            value={formData.password}
          />
        </div>
        <div className="sm:w-[35%] mx-auto">
          <Input
            type="submit"
            value={"Create user"}
            className="border-[#25723B] font-bold flex justify-center text-white hover:bg-[#25723B] ease-in-out duration-200 cursor-pointer"
          />
        </div>
      </form>
      <Link className="text-right underline" href={"/"}>
        Back to Menu
      </Link>
      <p className="text-red-400"> {errorMessage} </p>
  </div> */}

      <div>
        <Tabs defaultValue="Connexion" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="Connexion">Connexion</TabsTrigger>
            <TabsTrigger value="Inscription">Inscription</TabsTrigger>
          </TabsList>
          <TabsContent value="Connexion">
            <LoginForm />
          </TabsContent>
          <TabsContent value="Inscription">
            <RegisterForm />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default UserForm;
