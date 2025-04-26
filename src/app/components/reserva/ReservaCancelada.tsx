'use client'

import { useState } from 'react'; 

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import '../../globals.css'

export default function ReservaCancelada() {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false); // Estado del modal

  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/dist/cancelacion.js'
    script.defer = true
    document.body.appendChild(script)
  }, [])

  return (
    <div className="container text-center p-6 space-y-4">
      <h1 className="text-2xl font-bold text-[#212E5E]">Reserva Cancelada</h1>

      

      <div className="text-6xl">
 {/* el emoji  */}
  <img 
    src="https://cdn.pixabay.com/photo/2014/10/06/04/29/sad-476039_1280.png" 
    alt="Reserva cancelada"
    className="w-40 h-35 mx-auto" // Ajusta tamaño según necesites
    loading="lazy"
  />
</div>

      <p className="text-gray-700">
        La reserva fue cancelada<br />
        Puedes intentar reservar nuevamente
      </p>

      <button
        id="buscarBtn"
        //onClick={() => router.push('/home')}
        onClick={() => setShowModal(true)} // Abre el modal en lugar de redirigir
        className="bg-[#FCA311] hover:bg-[#E0910F] text-white px-4 py-2 rounded"
      >
        Buscar Otro
      </button>

      <div id="modal" className={`modal ${showModal ? '' : 'hidden'}`}>
        <div className="modal-content">
        <p>¿Seguro que quieres buscar otra reserva?</p>
          <div className="modal-buttons flex justify-center gap-4 mt-4">
            <button id="confirmYes" onClick={() => router.push('/home')} className="bg-[#FCA311] text-white px-3 py-1 rounded">Sí</button>
            <button id="confirmNo" onClick={() => setShowModal(false)} className="bg-[#FCA311] text-white px-3 py-1 rounded">No</button>

          </div>
        </div>
      </div>
    </div>
  )
}
