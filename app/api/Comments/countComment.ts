import Comments from "@/app/(models)/Comments";

export async function countAllComments(id: string) {
    try {
      const count = await Comments.countDocuments({ idOfRasso: id });
      return count;
    } catch (err) {
      console.log(err);
      throw err; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
    }
  }