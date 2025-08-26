/*MENU*/
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    /*lo que hace es ir al primer hijo y intercambiar el none si no lo tiene lo agrega y si lo tiene lo quita, todo eso lo hace en las classlist*/
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    /*Igual aca hace llo mismo con el isactive*/
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/*TIMER*/
const $days = document.getElementById("days"),
  $hours = document.getElementById("hours"),
  $minutes = document.getElementById("minutes"),
  $seconds = document.getElementById("seconds");
/*Fecha del proximo partido*/
const countdownDate = new Date("October 18, 2025 21:00:00").getTime();

let interval = setInterval(function () {
  //Fecha actual en milisegundos
  const ahora = new Date().getTime();

  //Obetner las distancias entre ambas fechas
  let distance = countdownDate - ahora;

  //Calculos a dias- horas -min -seg
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //Escribimos resultados
  $days.innerHTML = days;
  $hours.innerHTML = hours;
  $minutes.innerHTML = minutes;
  $seconds.innerHTML = ("0" + seconds).slice(-2);
}, 1000);
