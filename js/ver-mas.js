let boton = document.getElementById("btn-ver-mas");
boton.addEventListener('click', aparecer);

function aparecer() {
    let row2 = document.getElementById("r3");
    row2.classList.toggle("r3");
    boton.textContent = row2.classList.contains("r3") ? "Ver Más" : "Ver Menos";
}
