import Comments from "@/app/(models)/Comments";

export async function fetchAllComments(id:string) {
  try {
    const res = await Comments.find({ idOfRasso: id });
    return res;
  } catch (err) {
    console.log("err");
  }
}
