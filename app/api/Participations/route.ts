import Particip from "@/app/(models)/Participation";
import { NextResponse } from "next/server";

export async function POST(req: Request, res:Response) {
  try {
    const participationsData = await req.json();

    // Vérifier si une participation existe déjà pour cette paire idOfUser et idOfRasso
    const existingParticipation = await Particip.findOne({
      idOfUser: participationsData.idOfUser,
      idOfRasso: participationsData.idOfRasso,
    });

    // Si une participation existe déjà, renvoyer une réponse appropriée
    if (existingParticipation) {
      return NextResponse.json({ message: "Vous êtes déjà inscrit." }, { status: 200 });
    } else {
      await Particip.create(participationsData);
      return NextResponse.json({ message: "Vous êtes inscrit." }, { status: 200 });
    }
  } catch (err) {
    return NextResponse.json({ message: "Erreur pendant votre inscription" }, { status: 200 });
  }
}


