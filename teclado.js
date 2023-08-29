const d = document;
//estas variables nos van a permitir controlar el movimiento.
let x = 0,
  y = 0;

// Esta funcion nos sirve para mover la bola dentro del cuadro.
//getBoundingClientRect() este metodo es un método en JavaScript que 
// te permite obtener la información sobre las dimensiones y
//  posición de un elemento en el DOM.
export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();
  //console.log(e.keyCode);
  // console.log(e.key);
  //console.log(limitsBall, limitsStage);
  switch (e.keyCode) {
    case 37:
      //move("left"); e.preventDefault(); //para prevenir el comportamiento de las teclas por defecto.
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;
    case 38:
      if (limitsBall.top > limitsStage.top) {
        e.preventDefault();
        y--;
      }
      break;
    case 39:
      if (limitsBall.right < limitsStage.right) {
        e.preventDefault();
        x++;
      }
      break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        e.preventDefault();
        y++;
      }
      break;
    default:
      break;
  }
  $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
}
