// Configuración:
var canvas = document.getElementById('matrix-bg');
var ctx = canvas.getContext('2d');

// Tamaño del canvas:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Caracteres para la animación:
var matrix = "abcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()-_=+[{]}\\|;:'\",<.>/?`~ ";
matrix = matrix.split("");

// Columnas y tamaño de fuente:
var font_size = 12;
var columns = canvas.width/font_size;

// Array de caracteres:
var drops = [];
for (var x = 0; x < columns; x++) {
  drops[x] = 1;
}

// Función de animación:
function drawMatrix() {
  // Fondo negro:
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Caracteres verdes:
  ctx.fillStyle = "#00FF00";
  ctx.font = font_size + "px arial";

  // Dibuja los caracteres:
  for (var i = 0; i < drops.length; i++) {
    var text = matrix[Math.floor(Math.random()*matrix.length)];
    ctx.fillText(text, i*font_size, drops[i]*font_size);

    if (drops[i]*font_size > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

// Animación:
setInterval(drawMatrix, 35);
