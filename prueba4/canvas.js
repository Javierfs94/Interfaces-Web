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
        //primer camino, en negro
        contexto.fillStyle = 'black';
        contexto.beginPath();
        contexto.arc(75, 75, 60, Math.PI, Math.PI * 0.5, false);
        contexto.arc(75, 75, 32, Math.PI * 0.5, Math.PI * 1, false);
        contexto.closePath()
        contexto.fill();
        //segundo camino, en naranja
        contexto.fillStyle = 'orange';
        contexto.beginPath();
        contexto.arc(75, 75, 15, 0, Math.PI * 2, false);
        contexto.fill();
    }
}