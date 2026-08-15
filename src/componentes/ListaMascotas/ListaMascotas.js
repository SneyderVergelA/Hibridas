
import TarjetaMascota from './TarjetaMascota'
import './ListaMascotas.css'

function ListaMascotas({ mascotas }) {


  return (
    <ul className="lista-mascotas">
      {mascotas.map((mascota) => (
        <TarjetaMascota key={mascota.id} mascota={mascota} />
      ))}
    </ul>
  )
}

export default ListaMascotas
