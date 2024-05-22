import Date from "@/app/(models)/DatePost";

export async function dataDesRassos(ids:any) {
    try {
        const results = await Date.find({_id:ids})
        return results;
    } catch (err) {
        console.log(err);
        throw err; // Vous pouvez choisir de gérer l'erreur différemment si nécessaire
    }
}
