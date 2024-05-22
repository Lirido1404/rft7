import Particip from "@/app/(models)/Participation";

export async function verifParticipation(id:any,sessionid:any) {
  try {
    

    // Vérifier si une participation existe déjà pour cette paire idOfUser et idOfRasso
    const existingParticipation = await Particip.findOne({
      idOfUser: sessionid,
      idOfRasso: id,
      participation:true,
    });

    return existingParticipation;
  } catch (err) {
    console.log(err);
  }
}




