import React, { Suspense } from "react";
import FetchDataComp2 from "@/app/(components)/FetchDataComp2";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from "next";
import { fetchOneCar } from "@/app/api/Cars/[id]/fetchonecardataaa";


export async function generateMetadata(
  { params, searchParams }: any,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const car = await fetchOneCar(params.id);
  const titleforMetadata = `Vente - ${car.name}`
  return {
    title: titleforMetadata,
  };
}

function page({ params }: any) {
  return (
    <div>
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
        <FetchDataComp2 id={params} />
      </Suspense>
    </div>
  );
}

export default page;
