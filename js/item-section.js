// Agregamos un evento clic a todos los elementos con la clase 'producto'
const productos = document.querySelectorAll('.cartita');
productos.forEach(cartita => {
    cartita.addEventListener('click', () => {
    // Obtenemos el id del producto seleccionado desde el atributo data-id
    const idProductoSeleccionado = cartita.getAttribute('data-id');

    // Redireccionamos a la página de detalles del producto con el id como parámetro
    window.location.href = `producto.html?id=${idProductoSeleccionado}`;
});
});