import React from "react";
import { fetchCarsss } from "@/app/api/Cars/fetchPrenomOfProprio";
import BulleUser from "./BulleUser";
import {fetchDataCar3} from "@/app/api/Cars/ExCar"
async function FetchUsers() {
  const allUsers = await fetchCarsss();
  const twoCars = await fetchDataCar3();

  return (
    <div>
      <BulleUser allUsers={allUsers} twoCars={twoCars} />
    </div>
  );
}

export default FetchUsers;
