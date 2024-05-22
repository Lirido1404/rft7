import Comments from "@/app/(models)/Comments";

export async function countAllComments2() {
  try {
    const count = await Comments.find();
    return count;
  } catch (err) {
    console.log(err);
    throw err; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
  }
}
