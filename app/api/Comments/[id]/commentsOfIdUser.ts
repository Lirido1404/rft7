import Comments from "@/app/(models)/Comments";

export async function commentsOfIdUser(id: string) {
    try {
      const count = await Comments.find({ idOfUser: id });
      return count;
    } catch (err) {
      console.log(err);
      throw err; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
    }
  }