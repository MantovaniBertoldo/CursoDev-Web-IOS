window.onload = function() {
    const a = 3;
    const b = 4;
    const c = -5;

    function calcularEquacaoTradicional() {
      const delta = b * b - 4 * a * c;
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      mostrarResultado((-b + Math.sqrt(delta)) / (2 * a), x2);
    }

    function mostrarResultado(x1, x2) {
      const resultado = document.getElementById("resultado");
      resultado.innerHTML = "x1 = " + x1 + "<br>x2 = " + x2;
    }

    const botaoTradicional = document.getElementById("botao-tradicional");
    botaoTradicional.addEventListener("click", calcularEquacaoTradicional);

    const botaoArrow = document.getElementById("botao-arrow");
    botaoArrow.addEventListener("click", () => {
      const x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      const x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      mostrarResultado(x1, x2);
    });
  };