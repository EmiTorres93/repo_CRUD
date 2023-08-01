//modelo de productos
const productos = JSON.parse(localStorage.getItem("productos")) || [];

const cuerpoTabla = document.getElementById("cuerpoTabla");

const myModal = new bootstrap.Modal(document.getElementById("updateModal"));

const abrirModal = () => {
  document.querySelector(".modal-body").innerHTML = " ";
  const formularioUpdate = document.createElement("form");
  const contenidoFormulario =
    /* HTML */
    `<div class="mb-3">
        <label class="form-label">Nombre</label>
        <input
          type="text"
          class="form-control"
          id="nombreProd"
          placeholder="Nombre del producto"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Detalle</label
        >
        <textarea class="form-control" id="detalleProd" rows="3"></textarea>
      </div>
      <div class="d-flex justify-content-between mb-4">
        <div class="col-8 me-2">
          <label class="form-label">URL de la imagen</label>
          <input
            type="text"
            class="form-control"
            id="imagenProd"
            placeholder="Escribir URL de la imagen"
          />
        </div>
        <div class="col">
          <label class="form-label">Precio</label>
          <input type="number" class="form-control" id="precioProd" />
        </div>
      </div>

      <div class="d-flex justify-content-end">
        <button class="btn btn-info">Crear</button>
      </div>`;

  formularioUpdate.innerHTML = contenidoFormulario;
  document.querySelector(".modal-body").append(formularioUpdate);

  myModal.show();
};

const crearProductos = (e) => {
  e.preventDefault();

  const id = new Date().getTime();

  const nombre = document.getElementById("nombreProd").value;
  const detalle = document.getElementById("detalleProd").value;
  const imagen = document.getElementById("imagenProd").value;
  const precio = document.getElementById("precioProd").value;

  const item = {
    id: id,
    nombre: nombre,
    detalle: detalle,
    imagen: imagen,
    precio: precio,
  };
  console.log(item);

  productos.push(item);
  localStorage.setItem("productos", JSON.stringify(productos));

  document.getElementById("formulario").reset();
  document.getElementById("nombreProd").focus();
  cargarTabla();
};

const borrarProducto = (index) => {
  let validar = confirm(
    `¿Está seguro de que quiere borrar ${productos[index].nombre}?`
  );

  if (validar) {
    productos.splice(index, 1);
    localStorage.setItem("productos", JSON.stringify(productos));
    cargarTabla();
  }
};

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";

  productos.forEach((producto, index) => {
    const fila = document.createElement("tr");
    const celdas =
      /* HTML */
      `<tr>
        <th scope="row">${producto.id}</th>
        <td>${producto.nombre}</td>
        <td>${producto.detalle}</td>
        <td>${producto.precio}</td>
        <td>
          <button class="btn btn-danger" onClick="borrarProducto(${index})">
            X
          </button>
        </td>
        <td><button class="btn btn-warning" onCLick="abrirModal()">Edit&#9998</button></td>
      </tr>`;

    fila.innerHTML = celdas;

    cuerpoTabla.append(fila);
  });
};

document
  .getElementById("formulario")
  .addEventListener("submit", crearProductos);

cargarTabla();
