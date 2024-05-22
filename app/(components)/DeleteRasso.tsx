import React from 'react'
import {useRouter} from "next/navigation"
import { useToast } from "@/components/ui/use-toast";

function DeleteRasso({idOfRasso}:{idOfRasso:string}) {
  const { toast } = useToast();

    const router = useRouter();
    const handleDelete = async (e:any) => {
      e.preventDefault();
      const res = await fetch(`/api/Date/${idOfRasso}`, {
        method: "DELETE",
      });
      if (res.ok) {
        // Si la création de la participation est réussie, afficher un toast avec le message retourné
        toast({
          description: <div className="flex gap-1 items-center"> <img src="/Images/checkk.svg" alt="checkk" className="h-6 w-6" /> Evènement supprimé. </div>          
        });
        router.refresh();
      } else {
        // Si la création de la participation échoue, afficher un toast avec le message d'erreur retourné
        toast({
          description: <div className="flex gap-1 items-center"> <img src="/Images/checkk.svg" alt="checkk" className="h-6 w-6" /> Erreur lors de la supression.</div>          
        });
      }
    };
  
    return (
      <button className='bg-white p-1 border-2 border-[#1A73E8] text-white rounded-lg hover:bg-[#1A73E8] ease-in-out duration-150' onClick={handleDelete}>
        <img src="/Images/trashcann.svg" className="w-6 w-6" alt="" />
      </button>
    );
}

export default DeleteRasso