import Cars from "@/app/(models)/Carsdetail"; 

export async function fetchAnnoncesFromUserNoCount(id: any) {
  try {
    const AnnonceCount = await Cars.find({ userId: id });

    return AnnonceCount;
  } catch (err) {
    console.error("Erreur lors de la recherche de la voiture:", err);
    throw new Error("Erreur lors de la recherche de la voiture");
  }
}
