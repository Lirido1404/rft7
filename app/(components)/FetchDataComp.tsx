import React from "react";
import { fetchDataCar } from "@/app/api/Cars/FetchDataOfCar";
import CompForFetch1 from "./CompForFetch1";




async function FetchDataComp({ page, query,marquequery }: { page: number; query: string;marquequery:string }) {
  page = !page || page < 1 ? 1 : page;
  const perPage = 4;

  const res = await fetchDataCar(perPage, page, query,marquequery);
  const itemCount = res?.itemCount ?? 0; // Utilisation de l'opérateur de coalescence nulle pour définir itemCount sur 0 si res ou res.itemCount est undefined
  const totalPages = Math.ceil(itemCount / perPage);
  const prevPage = page - 1 > 0 ? page - 1 : 1;
  const nextPage = page + 1;

  const pageNumbers = [];
  const offsetNumber = 3;
  for (let i = page - offsetNumber; i<=page + offsetNumber;i++){
    if(i>=1 && i <= totalPages){
      pageNumbers.push(i)
    }
  }

  return (
    <div>
      <CompForFetch1
        res={res}
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
        totalPages={totalPages}
        query={query}
        pageNumbers={pageNumbers}
        offsetNumber={offsetNumber}
      />
    </div>
  );
}

export default FetchDataComp;
