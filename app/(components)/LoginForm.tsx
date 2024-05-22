"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoogleSection from "./GoogleSection";
import { Separator } from "@/components/ui/separator";

function LoginForm() {
  const router = useRouter();
  //  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*  const handleError = () => {
      toast({
        variant: "destructive",
        title: (
          <h3 className="text-white font-bold">
            Identifiants incorrects, veuillez réessayer.
          </h3>
        ),
      });
    }; */

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    if (result && !result.error) {
      // handleError();
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
          <p className="text-3xl font-bold">Connexion</p>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <GoogleSection />
        <Separator className="my-4" />

        <form onSubmit={handleSignIn} method="post">
          <div className="space-y-1">
            <Label htmlFor="email" className="text-black">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password" className="text-black">
              Mot de passe
            </Label>
            <Input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="mt-4">
            Me connecter
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default LoginForm;
