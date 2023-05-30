let calcula = () => {
    let input = document.querySelector('#campo');
    let valor = input.value;
    let resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";

    for (let i = 1; i <= 10; i++) {
        let resultadotabuada = valor * i;
        let conta = `o resultado é ${valor} x ${i} = ${resultadotabuada}`
        resultado.innerHTML += conta + "<br>";

    }

}