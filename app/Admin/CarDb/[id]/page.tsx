import Delete from "@/app/(components)/Delete";
import React from "react";


interface Props {
  params: {
    id: string;
  };
}

function page({ params }:Props) {
  return (
    <div>
      <Delete id={params.id} />
    </div>
  );
}

export default page;
