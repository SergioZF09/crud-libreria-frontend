import axios from "axios";

const BASE_URL_LIBRO_API = "http://localhost:8080/api/v1/libros";

class LibroService {
  registrarLibro(libro) {
    return axios.post(BASE_URL_LIBRO_API, libro);
  }

  obtenerTodosLosLibros() {
    return axios.get(BASE_URL_LIBRO_API);
  }

  obtenerLibro(id) {
    return axios.get(BASE_URL_LIBRO_API + "/" + id);
  }

  actualizarLibro(id, libro) {
    return axios.put(BASE_URL_LIBRO_API + "/" + id, libro);
  }

  eliminarLibro(id) {
    return axios.delete(BASE_URL_LIBRO_API + "/" + id);
  }
}

export default new LibroService();
