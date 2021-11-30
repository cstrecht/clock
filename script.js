let digital = document.querySelector(".digital");
let seconds = document.querySelector(".seconds-indicator");
let minutes = document.querySelector(".minutes-indicator");
let hours = document.querySelector(".hours-indicator");

//funcao que apresente o tempo a cada segundo que passe -> setInterval juntamente com a funcao a passar de 1 em 1 seg
function showTime() {
  let now = new Date();
  let hour = now.getHours();
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // manipultar o html de forma a alterar os numeros à medida que os segundos passam:
  digital.innerHTML = `${putZero(hour)}:${putZero(min)}:${putZero(sec)}`;
}
// funcao para colocar um zero nos mostradores com numeros menores que 10:
function putZero(el) {
  return el < 10 ? `0${el}` : el; // :D
}
// rodar a funcao de 1 em 1 segundo
setInterval(showTime, 1000);
