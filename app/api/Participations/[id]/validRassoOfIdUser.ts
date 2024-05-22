import Particip from "@/app/(models)/Participation";


export async function validParticipationsOfIdUser(id: string) {
    try {
      const count = await Particip.find({ idOfUser: id,participation:true });
      return count;
    } catch (err) {
      console.log(err);
      throw err; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
    }
  }