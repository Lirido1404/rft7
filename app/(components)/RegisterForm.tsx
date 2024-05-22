"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FormData {
  email: string;
  password: string;
  nom: string;
}

function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    nom: "",
  });
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
      alert("not ok");
    } else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {" "}
          <p className="text-3xl font-bold">Inscription</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <form onSubmit={handleSubmit} method="post">
        <div className="space-y-1">
            <Label htmlFor="nom">Nom</Label>
            <Input
              type="text"
              name="nom"
              id="nom"
              onChange={handleChange}
              required={true}
              value={formData.nom}
              placeholder="Nom"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              name="email"
              id="email"
              onChange={handleChange}
              required={true}
              value={formData.email}
              placeholder="Email"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
              required={true}
              value={formData.password}
              placeholder="Mot de passe"
            />
          </div>
          <Button type="submit" className="mt-4">
            M&apos;enregistrer
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default RegisterForm;
