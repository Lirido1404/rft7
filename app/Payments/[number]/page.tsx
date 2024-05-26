import ResPaiement from '@/app/(components)/ResPaiement'
import React from 'react'

function page({params}:any) {
    const prixPaiement = params.number
  return (
    <div> <ResPaiement prixPaiement={prixPaiement} /> </div>
  )
}

export default page