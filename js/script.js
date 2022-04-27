//ejecutar funcion en el evento click

document.getElementById("btn_open").addEventListener("click", open_close_menu);

//declaracion de variable

let side_menu = document.getElementById("menu_side");
let btn_open = document.getElementById("btn_open");
let body = document.getElementById("body");

//evento para mostrar y ocultar menu

function open_close_menu() {
  body.classList.toggle("body_move");
  side_menu.classList.toggle("menu_side_move");
}

//si el ancho de la pagina en menor a 760px, ocultara el menu al recargar la pagina

if (window.innerWidth > 760) {
  body.classList.add("body_move");
  side_menu.classList.add("menu_side_move");
}

//haciendo el menu responsive

window.addEventListener("resize", function () {
  if (window.innerWidth > 760) {
    body.classList.remove("body_move");
    side_menu.classList.remove("menu_side_move");
  }
  if (window.innerWidth < 760) {
    body.classList.add("body_move");
    side_menu.classList.add("menu_side_move");
  }
});

let btn_estudio = document.getElementById("btn_estudios");

btn_estudio.addEventListener("click", () => {
  btn_estudio.classList.add("selected");
  document.getElementById("btn_inicio").classList.remove("selected");
  document.getElementById("btn_otros").classList.remove("selected");
});

let btn_inicio = document.getElementById("btn_inicio");

btn_inicio.addEventListener("click", () => {
  btn_inicio.classList.add("selected");
  document.getElementById("btn_estudios").classList.remove("selected");
  document.getElementById("btn_otros").classList.remove("selected");
});

btn_otros.addEventListener("click", () => {
  btn_otros.classList.add("selected");
  document.getElementById("btn_estudios").classList.remove("selected");
  document.getElementById("btn_inicio").classList.remove("selected");
});
