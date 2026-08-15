
import { useMascotas } from '../hooks/useMascotas'
import FormularioMascota from '../componentes/FormularioMascota/FormularioMascota'
import ListaMascotas from '../componentes/ListaMascotas/ListaMascotas'

function Inicio() {
  const { mascotas, agregarMascota } = useMascotas()

  return (
    <div className="contenedor">
      <header className="encabezado">
        <h1> Formulario de Mascotas</h1>
      </header>

      <main>
        <FormularioMascota onAgregarMascota={agregarMascota} />

        <section>
          <h2>Mascotas registradas</h2>
          <ListaMascotas mascotas={mascotas} />
        </section>
      </main>
    </div>
  )
}

export default Inicio
