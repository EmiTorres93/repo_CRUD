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
    const celdas = `<tr>
     <th scope="row">${producto.id}</th>
     <td>${producto.nombre}</td>
     <td>${producto.detalle}</td>
     <td>${producto.precio}</td>
     <td><button class="btn btn-danger" onClick="borrarProducto(${index})">X</button></td>
    </tr>`;

    fila.innerHTML = celdas;

    cuerpoTabla.append(fila);
  });
};

document
  .getElementById("formulario")
  .addEventListener("submit", crearProductos);

cargarTabla();
