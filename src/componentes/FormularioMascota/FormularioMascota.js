
import { useState } from 'react'
import './FormularioMascota.css'

const formularioInicial = {
  nombreMascota: '',
  nombreDueno: '',
  especie: 'Perro',
  raza: '',
  edad: '',
  telefono: '',
}

function FormularioMascota({ onAgregarMascota }) {
  const [datosFormulario, setDatosFormulario] = useState(formularioInicial)

  const manejarCambio = (e) => {
    const { name, value } = e.target
    setDatosFormulario((anterior) => ({ ...anterior, [name]: value }))
  }

  const manejarEnvio = (e) => {
    e.preventDefault()

    if (!datosFormulario.nombreMascota || !datosFormulario.nombreDueno || !datosFormulario.telefono) {
      alert('llene todos los campos')
      return
    }

    onAgregarMascota(datosFormulario)
    alert(`mascota registrada con éxito `)
    setDatosFormulario(formularioInicial)
  }

  return (
    <form className="formulario-mascota" onSubmit={manejarEnvio}>
      <h2>Registro de Mascota</h2>

      <div className="grupo-campo">
        <label htmlFor="nombreMascota">Nombre de la mascota</label>
        <input id="nombreMascota" name="nombreMascota" type="text" value={datosFormulario.nombreMascota} onChange={manejarCambio} />
      </div>

      <div className="grupo-campo">
        <label htmlFor="nombreDueno">Nombre del dueño</label>
        <input id="nombreDueno" name="nombreDueno" type="text" value={datosFormulario.nombreDueno} onChange={manejarCambio} />
      </div>

      <div className="grupo-campo">
        <label htmlFor="especie">Especie</label>
        <select id="especie" name="especie" value={datosFormulario.especie} onChange={manejarCambio}>
          <option value="Perro">Perro</option>
          <option value="Gato">Gato</option>
          <option value="Ave">Ave</option>
          <option value="Otro">Otro</option>
        </select>
      </div>

      <div className="grupo-campo">
        <label htmlFor="raza">Raza</label>
        <input id="raza" name="raza" type="text" value={datosFormulario.raza} onChange={manejarCambio} />
      </div>

      <div className="grupo-campo">
        <label htmlFor="edad">Edad (años)</label>
        <input id="edad" name="edad" type="number" value={datosFormulario.edad} onChange={manejarCambio} />
      </div>

      <div className="grupo-campo">
        <label htmlFor="telefono">Teléfono del dueño</label>
        <input id="telefono" name="telefono" type="tel" value={datosFormulario.telefono} onChange={manejarCambio} />
      </div>

      <button type="submit">Registrar mascota</button>
    </form>
  )
}

export default FormularioMascota
