import React from 'react'

function page({params}:any) {
    const prixPaiement = params.number
  return (
    <div> {prixPaiement} </div>
  )
}

export default page