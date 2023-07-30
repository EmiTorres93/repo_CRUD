//modelo de productos
const productos = JSON.parse(localStorage.getItem("productos")) || [];

const cuerpoTabla = document.getElementById("cuerpoTabla");

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

const cargarTabla = () => {
  cuerpoTabla.innerHTML = "";

  productos.forEach((producto) => {
    const fila = document.createElement("tr");
    const celdas = `<tr>
     <th scope="row">${producto.id}</th>
     <td>${producto.nombre}</td>
     <td>${producto.detalle}</td>
     <td>${producto.precio}</td>
    </tr>`;

    fila.innerHTML = celdas;

    cuerpoTabla.append(fila);
  });
};

document
  .getElementById("formulario")
  .addEventListener("submit", crearProductos);

cargarTabla();
