import Cars from "@/app/(models)/Carsdetail"; // Assurez-vous que le chemin est correct

export async function fetchAnnoncesFromUser(id: any) {
  try {
    const AnnonceCount = await Cars.countDocuments({ userId: id });

    return AnnonceCount;
  } catch (err) {
    console.error("Erreur lors de la recherche de la voiture:", err);
    throw new Error("Erreur lors de la recherche de la voiture");
  }
}
