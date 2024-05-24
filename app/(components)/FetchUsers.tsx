import React from "react";
import { fetchCarsss } from "@/app/api/Cars/fetchPrenomOfProprio";
import BulleUser from "./BulleUser";

async function FetchUsers() {
  const allUsers = await fetchCarsss();

  return (
    <div>
      <BulleUser allUsers={allUsers} />
    </div>
  );
}

export default FetchUsers;
