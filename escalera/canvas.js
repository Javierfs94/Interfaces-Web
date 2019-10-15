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
        contexto.beginPath();
        contexto.moveTo(1, 1);
        for (i = 1; i < 100; i += 5) {
            if ((i % 2) != 0) {
                contexto.lineTo(i + 5, i);
            } else {
                contexto.lineTo(i, i + 5);
            }
        }
        contexto.lineTo(1, i);
        contexto.closePath();
        contexto.stroke();
    }
}