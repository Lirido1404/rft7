import Comments from "@/app/(models)/Comments";

export async function POST(req: Request) {
  try {
    const commentData = await req.json(); // Récupérer directement les données du corps de la requête

    return await Comments.create(commentData);
  } catch (err) {
    console.log(err);
  }
}


