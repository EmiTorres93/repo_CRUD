//modelo de productos
const productos = [];

const crearProductos = (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombreProd").value;
  const detalle = document.getElementById("detalleProd").value;
  const imagen = document.getElementById("imagenProd").value;
  const precio = document.getElementById("precioProd").value;

  const item = {
    nombre: nombre,
    detalle: detalle,
    imagen: imagen,
    precio: precio,
  };
  console.log(item);
};

document
  .getElementById("formulario")
  .addEventListener("submit", crearProductos);
