import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import LibroService from "../../../service/LibroService";

function ActualizarLibroComponent() {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [fechaPublicacion, setFechaPublicacion] = useState("");
  const [genero, setGenero] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const actualizarLibro = (e) => {
    e.preventDefault();
    const libro = { titulo, autor, fechaPublicacion, genero };
    LibroService.actualizarLibro(id, libro)
      .then((response) => {
        navigate("/libros");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    LibroService.obtenerLibro(id)
      .then((response) => {
        setTitulo(response.data.titulo);
        setAutor(response.data.autor);
        setFechaPublicacion(response.data.fechaPublicacion);
        setGenero(response.data.genero);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div className="container pt-2">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h1>Actualizar libro</h1>
          <div className="card-body">
            <form onSubmit={(e) => actualizarLibro(e)}>
              <div className="">
                <label htmlFor="titulo" className="form-label">
                  Título:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Introduzca el título"
                  name="titulo"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="autor" className="form-label">
                  Autor:
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Introduzca el autor"
                  name="autor"
                  value={autor}
                  onChange={(e) => setAutor(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="fechaPublicacion" className="form-label">
                  Fecha de publicación:
                </label>
                <input
                  type="date"
                  className="form-control"
                  name="fechaPublicacion"
                  value={fechaPublicacion}
                  onChange={(e) => setFechaPublicacion(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="genero" className="form-label">
                  Género:
                </label>
                <select
                  className="form-select"
                  value={genero}
                  onChange={(e) => setGenero(e.target.value)}
                  required
                >
                  <option value="">Seleccione un género</option>
                  <option value="ROMANTICA">ROMANTICA</option>
                  <option value="CIENCIA_FICCION">CIENCIA_FICCION</option>
                  <option value="AVENTURA">AVENTURA</option>
                  <option value="FANTASIA">FANTASIA</option>
                </select>
              </div>
              <button type="submit" className="btn btn-success">
                Guardar cambios
              </button>
              &nbsp;&nbsp;
              <Link to={"/libros"} className="btn btn-danger">
                Cancelar
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActualizarLibroComponent;
