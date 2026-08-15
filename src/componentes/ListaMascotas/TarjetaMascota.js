
function TarjetaMascota({ mascota }) {
  return (
    <li className="tarjeta-mascota">
      <div>
        <strong>Nombre: {mascota.nombreMascota}</strong>
        <p>Especie: {mascota.especie} - Raza: {mascota.raza} · {mascota.edad} años</p>
        <p>Dueño: {mascota.nombreDueno} - Telefono: {mascota.telefono}</p>
      </div>
    </li>
  )
}

export default TarjetaMascota