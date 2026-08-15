

const CLAVE_ALMACENAMIENTO = 'mascotas_registradas'

export function obtenerMascotas() {
  const datos = localStorage.getItem(CLAVE_ALMACENAMIENTO)
  return datos ? JSON.parse(datos) : []
}

export function guardarMascotas(mascotas) {
  localStorage.setItem(CLAVE_ALMACENAMIENTO, JSON.stringify(mascotas))
}

export function agregarMascota(mascotas, nuevaMascota) {
  const mascotaConId = {
    ...nuevaMascota,
    id: Date.now(),
  }
  const listaActualizada = [...mascotas, mascotaConId]
  guardarMascotas(listaActualizada)
  return listaActualizada
}
