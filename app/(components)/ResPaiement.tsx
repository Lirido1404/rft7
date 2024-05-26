'use client'
import React, { useEffect } from 'react';
import Confetti from 'react-confetti';
import { useDateStore } from "@/app/(store)/store"; // Assurez-vous de fournir le bon chemin vers le store
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function ResPaiement({prixPaiement} : any) {
    const addBuyingDetail = useDateStore((state) => state.setBuyingDetails);
  const buyingdetails = useDateStore((state) => state.buyingdetails);


  const handleResetBuyingDetails = () => {
    addBuyingDetail([]); // Appeler setBuyingDetails avec un tableau vide pour réinitialiser les détails d'achat
};



    return (
        <div className='h-[80vh] flex justify-center flex-col items-center'>
            <img src="/images/logocar2.png" className='w-80 h-80' alt="" />
            <h2 className='text-3xl'> Paiement réussi ! </h2>
            <p className='text-lg'> RFT vous remercie d&apos;avoir effectué votre paiement de <span className='font-bold'>{prixPaiement} €.</span>  </p>
            <Link href={"/"}>
              <Button
                className="w-80 font-bold text-white mt-4"
                variant="destructive"
                onClick={handleResetBuyingDetails}
              >
                Retourner à l&apos;accueil
              </Button>
            </Link>
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={200} />
        </div>
    );
}

export default ResPaiement;
