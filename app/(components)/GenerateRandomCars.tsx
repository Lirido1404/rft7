"use client";
function GenerateRandomCars({ randomCars }:any) {
  return <button onClick={() => randomCars()}>Générer</button>;
}

export default GenerateRandomCars;
