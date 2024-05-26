import React, { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import CalandarComp from "../(components)/CalendarComp";
import CardCalendar from "../(components)/CardCalendar";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import DateForm from "../(components)/DateForm";
import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";
import DrawerTriggercomp from "../(components)/DrawerTriggercomp";

async function page() {
  const session = await getServerSession(options);
 const userId = session?.user?.id;
 const ppUser = session?.user?.image;
  return (
    <div className="h-[80vh] flex flex-col justify-center relative">
              <div className="blob3 absolute top-20 right-20 opacity-70 w-[400px] h-[400px] "></div>

      <Drawer>
        <div className="flex flex-col gap-2 pl-16">
          <h2 className="font-bold text-5xl">Dates de rassemblements</h2>
           {session ? <DrawerTrigger className="w-60 rounded text-white bg-[#1A73E8] px-4 py-2 shadow">
          Je crée mon rasso !
          </DrawerTrigger> : <DrawerTriggercomp/> }
        </div>
        <div className="flex flex-col lg:flex-row justify-center  gap-4 w-[70%] mx-auto relative ">
        <div className="blob2 absolute -bottom-40 -left-12 opacity-70 w-80 h-80 "></div>

          <div className="flex flex-col lg:flex-row gap-4">
            <CalandarComp />
            <div className="p-4 hidden lg:flex">
              <Separator orientation="vertical" />
            </div>
            <div className="p-4 lg:hidden">
              <Separator />
            </div>
          </div>

          <Suspense
            fallback={
              <>
                <div className="h-screen w-screen  flex justify-center items-center">
                  <Image
                    src={"/Images/logocar2.png"}
                    width={1000}
                    height={1000}
                    alt="logo"
                    className="opacload"
                  />
                </div>
              </>
            }
          >
            <CardCalendar userId={userId} />
          </Suspense>
        </div>

        <DrawerContent>
          <div className="mt-10 flex justify-center items-center mb-10">
            <DateForm userId={userId} ppUser={ppUser} />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default page;
