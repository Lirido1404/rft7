import React from 'react'
import BadgesMarques from './BadgesMarques'
import {fetchDatesByMarque} from "@/app/api/Date/fetchDateByMarque"
async function FetchMarque({ queryMarqueHome }: { queryMarqueHome :string}) {
  const resRassoMarque = await fetchDatesByMarque(queryMarqueHome);
  return (
    <>
      <BadgesMarques resRassoMarque={resRassoMarque} />
    </>
  );
}

export default FetchMarque