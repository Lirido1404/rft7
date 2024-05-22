import Cars from "@/app/(models)/Carsdetail";

export async function fetchDataCar(
  perPage: number,
  page: number,
  query: string,
  marquequery:string,
) {
  try {
    console.log("la voiture est : " + query);
    let items; // Déclaration de la variable en dehors des blocs if/else
    if(marquequery == ""){
      if (query == "") {
        items = await Cars.find()
          .skip(perPage * (page - 1))
          .limit(perPage);
       
     } else {
       items = await Cars.aggregate([
         { $match: { name: { $regex: query, $options: "i" } } },
         { $sample: { size: perPage } },
       ]);
     }
    }else{
      items = await Cars.find({tag:marquequery})
          
    }

    const itemCount = await Cars.countDocuments();

    const response = { items, itemCount };
    return response;
  } catch (err) {
    console.log(err);
  }
}
