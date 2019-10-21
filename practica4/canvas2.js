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
        polo();
        palo(600, 330, 60, 150, 20);
    }

    /**
     * Palo del polo
     */
    function palo(x, y, ancho, alto, radio) {
        contexto.beginPath();
        contexto.moveTo(x, y + radio);
        contexto.lineTo(x, y + alto - radio);
        contexto.quadraticCurveTo(x, y + alto, x + radio, y + alto); //curva abajo izquierda
        contexto.lineTo(x + ancho - radio, y + alto);
        contexto.quadraticCurveTo(x + ancho, y + alto, x + ancho, y + alto - radio); //curva abajo derecha
        contexto.lineTo(x + ancho, y + radio);
        contexto.stroke();
    }

    /**
     * Helado del polo
     */
    function polo() {
        // Dibuja el polo
        contexto.fillStyle = '#56350E';
        contexto.fillRect(560, 130, 150, 220);
    }


}