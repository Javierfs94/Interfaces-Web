function cargarContextoCanvas(idCanvas) {
    let canvas = document.getElementById(idCanvas);
    if (canvas && canvas.getContext) {
        let contexto = canvas.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

let contexto;

function aleatorio(inferior, superior) {
    let numeroProbabilidades = superior - inferior;
    let random = Math.random() * numeroProbabilidades;
    return parseInt(random) + inferior;
}

function generaColores() {
    return "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) +
        ")";
}

function generaCuadrado() {
    for (let i = 0; i <= 255; i += 10) {
        for (let j = 0; j <= 255; j += 10) {
            contexto.fillStyle = generaColores();
            contexto.fillRect(i, j, 100, 100);
        }
    }
}

window.onload = function() {
    // Incluimos el elemento canvas
    contexto = cargarContextoCanvas('micanvas');
    if (contexto) {
        // generaCuadrado();
        setInterval("generaCuadrado()", 100);
    }
}