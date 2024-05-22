import PageComms from "@/app/(components)/(MonCompte)/PageComms";
import PageRasso from "@/app/(components)/(MonCompte)/PageRasso";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function page({params}:any) {
  const idOfAccount = params.id;
  return (
    <div>
      <Suspense
        fallback={
          <>
            <div>
              <div className="flex items-center gap-2 p-24">
                <Skeleton width={125} height={125} circle />
                <div>
                  <Skeleton width={150} height={20} />
                  <Skeleton width={250} height={15} />
                </div>
              </div>

              <div className="grid w-[80%] mx-auto grid-cols-3 gap-8">
                <Skeleton className="w-full" height={220} />
                <Skeleton className="w-full" height={220} />
                <Skeleton className="w-full" height={220} />
                <Skeleton className="w-full" height={220} />
                <Skeleton className="w-full" height={220} />
                <Skeleton className="w-full" height={220} />
                <Skeleton className="w-full" height={220} />
                <Skeleton className="w-full" height={220} />
                <Skeleton className="w-full" height={220} />
              </div>
            </div>
          </>
        }
      >
        <PageRasso idOfAccount={idOfAccount} />
      </Suspense>
    </div>
  );
}

export default page;
