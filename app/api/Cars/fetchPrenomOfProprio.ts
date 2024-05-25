import Cars from "@/app/(models)/Carsdetail";

export async function fetchCarsss() {
  try {
    const distinctCars = await Cars.distinct("userId");
    const uniqueCars = await Promise.all(
      distinctCars.map(async (userId) => {
        const car = await Cars.findOne({ userId }).select("userId nomProprio photoProfilProprio");
        return car;
      })
    );
    console.log("résultat unique", uniqueCars);
    return uniqueCars;
  } catch (err) {
    console.log(err);
  }
}
