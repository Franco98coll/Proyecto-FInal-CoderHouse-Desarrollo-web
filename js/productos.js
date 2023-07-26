
// Obtenemos el id del producto desde los parámetros de la URL
const urlParams = new URLSearchParams(window.location.search);
const idProductoSeleccionado = urlParams.get('id');

// Aquí puedes usar el id del producto para obtener los detalles del producto
// desde tu base de datos JSON almacenada en el Local Storage o desde otra fuente de datos.
// Por ejemplo, puedes buscar el producto por su id en la lista de productos.
// Luego, puedes mostrar los detalles del producto en el HTML.
const productosJSON = localStorage.getItem('productos');
const productos = JSON.parse(productosJSON);
const productoSeleccionado = productos.find(producto => producto.id === parseInt(idProductoSeleccionado));

// Función para calcular el valor de cada cuota
function valorCuota(precio) {
    let cuota = precio / 6;
    return cuota.toFixed(2);
}

// Mostramos los detalles del producto en el HTML
if (productoSeleccionado) {
    const titulo = document.getElementById('titulo');
    titulo.innerHTML = `
        <h4>${productoSeleccionado.nombre}</h4>
        <p> ${productoSeleccionado.descripcion}</p>
    `;

    const precio = document.getElementById('precio');
    precio.innerHTML = `
        <h5>$${productoSeleccionado.precio}</h5>
        <p>6 cuotas sin interes de $${valorCuota(productoSeleccionado.precio)}</p>
    `;

    const fotoPrincipal = document.getElementById('foto-principal');
    fotoPrincipal.innerHTML = `
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
    `;

    const fotoCostado = document.getElementById('foto-costado');
    fotoCostado.innerHTML = `
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagen}" alt="Imagen del producto">
    `;
} else {
    // Si el producto no se encontró, muestra un mensaje de error o redirige a una página de error.
    const detallesProducto = document.getElementById('detalles-producto');
    detallesProducto.innerHTML = '<p>Producto no encontrado.</p>';
}