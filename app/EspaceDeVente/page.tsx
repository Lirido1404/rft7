import React, { Suspense } from "react";
import FetchDataComp from "../(components)/FetchDataComp";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
function Page({ searchParams }: any) {
  let page = parseInt(searchParams.page, 10);
  const querycar = searchParams?.car || "";
  const queryfiltrebarrelaterale = searchParams?.marque || "";

  return (
    <div>
      <Link href={"/Offre"} className="flex w-full ">
            <Button className="py-2 w-full font-bold text-white" variant="destructive">
              Déposer mon offre
            </Button>
          </Link>
      <Suspense
        fallback={
          <>
            {" "}
            <div className="h-screen w-screen  flex justify-center items-center">
              <Image
                src={"/Images/logocar2.png"}
                width={1000}
                height={1000}
                alt="logo"
                className="opacload"
              />
            </div>{" "}
          </>
        }
      >
        <FetchDataComp page={page} query={querycar} marquequery={queryfiltrebarrelaterale} />
      </Suspense>
    </div>
  );
}

export default Page;
