import Cars from "@/app/(models)/Carsdetail";

export async function fetchDataCar2() {
  try {
    

    const res = await Cars.find();
    return res;
  } catch (err) {
    console.log(err);
  }
}
