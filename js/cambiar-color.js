let azul = document.getElementById("azul");
let rojo = document.getElementById("rojo");
let negro = document.getElementById("negro");
let blanco = document.getElementById("blanco");

azul.addEventListener("click",cambiarAzul)
rojo.addEventListener("click",cambiarRojo)
negro.addEventListener("click",cambiarNegro)
blanco.addEventListener("click",cambiarBlanco)

function cambiarAzul(){
    const fotoPrincipal = document.getElementById('foto-principal');
    fotoPrincipal.innerHTML = `
        <img src="${productoSeleccionado.imagenAzul}" alt="Imagen del producto">
    `;

    const fotoCostado = document.getElementById('foto-costado');
    fotoCostado.innerHTML = `
        <img src="${productoSeleccionado.imagenAzul}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagenAzul}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagenAzul}" alt="Imagen del producto">
        `
}
function cambiarRojo(){
    const fotoPrincipal = document.getElementById('foto-principal');
    fotoPrincipal.innerHTML = `
        <img src="${productoSeleccionado.imagenRojo}" alt="Imagen del producto">
    `;

    const fotoCostado = document.getElementById('foto-costado');
    fotoCostado.innerHTML = `
        <img src="${productoSeleccionado.imagenRojo}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagenRojo}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagenRojo}" alt="Imagen del producto">
        `
}
function cambiarNegro(){
    const fotoPrincipal = document.getElementById('foto-principal');
    fotoPrincipal.innerHTML = `
        <img src="${productoSeleccionado.imagenNegro}" alt="Imagen del producto">
    `;

    const fotoCostado = document.getElementById('foto-costado');
    fotoCostado.innerHTML = `
        <img src="${productoSeleccionado.imagenNegro}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagenNegro}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagenNegro}" alt="Imagen del producto">
        `
}
function cambiarBlanco(){
    const fotoPrincipal = document.getElementById('foto-principal');
    fotoPrincipal.innerHTML = `
        <img src="${productoSeleccionado.imagenBlanco}" alt="Imagen del producto">
    `;

    const fotoCostado = document.getElementById('foto-costado');
    fotoCostado.innerHTML = `
        <img src="${productoSeleccionado.imagenBlanco}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagenBlanco}" alt="Imagen del producto">
        <img src="${productoSeleccionado.imagenBlanco}" alt="Imagen del producto">
        `
}