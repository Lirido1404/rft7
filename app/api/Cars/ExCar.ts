import Cars from "@/app/(models)/Carsdetail";

export async function fetchDataCar3() {
  try {
    // Utilisation de l'agrégation pour sélectionner 5 documents de manière aléatoire
    const res = await Cars.aggregate([{ $sample: { size: 2 } }]);
    return res;
  } catch (err) {
    console.log(err);
  }
}
