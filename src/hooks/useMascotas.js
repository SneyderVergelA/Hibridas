
import { useState, useEffect } from 'react'
import { obtenerMascotas, agregarMascota as agregarMascotaServicio } from '../servicios/servicioMascotas'

export function useMascotas() {
  const [mascotas, setMascotas] = useState([])

  useEffect(() => {
    setMascotas(obtenerMascotas())
  }, [])

  const agregarMascota = (nuevaMascota) => {
    setMascotas(agregarMascotaServicio(mascotas, nuevaMascota))
  }

  return { mascotas, agregarMascota }
}
