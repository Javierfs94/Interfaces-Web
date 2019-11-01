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

window.onload = function() {
    // Incluimos el elemento canvas
    contexto = cargarContextoCanvas('micanvas');
    if (contexto) {
        contexto.fillStyle = 'red';
        contexto.beginPath();
        contexto.moveTo(50, 5);
        contexto.lineTo(75, 65);
        contexto.lineTo(50, 125);
        contexto.lineTo(25, 65);
        contexto.fill();

        contexto.fillStyle = 'black';
        contexto.beginPath();
        contexto.moveTo(100, 5);
        contexto.lineTo(125, 65);
        contexto.lineTo(100, 125);
        contexto.lineTo(75, 65);
        contexto.fill();
    }
}