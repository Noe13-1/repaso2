import Targeta from "./Targeta"
function Pagina3() {
  return (
    <>
      <div>
        <h1>hola desde pagina 3</h1>
      </div>
      <div className="contenedor1">
        <Targeta ruta="public\286053-Sepik.jpg" titulo="Queen" contenido="Mi banda Favorita we" id_targeta="1"></Targeta>
        <Targeta ruta="public\286053-Sepik.jpg" titulo="Queen" contenido="2" id_targeta="2"></Targeta>
        <Targeta ruta="public\286053-Sepik.jpg" titulo="Queen" contenido="3" id_targeta="3"></Targeta>
        <Targeta ruta="public\286053-Sepik.jpg" titulo="Queen" contenido="4" id_targeta="4"></Targeta>

      </div>
    </>
  )
}

export default Pagina3