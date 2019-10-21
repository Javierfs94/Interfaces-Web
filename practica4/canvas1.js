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
        setInterval(animacion, 500); // Animacion de las cajas en movimiento
    }

    /**
     * Limpia y dibuja las cajas
     */
    function animacion() {

        contexto.clearRect(0, 0, 1000, 1000); // Limpia los rectangulos en el lienzo definido

        // Caja 1
        contexto.fillStyle = '#CC5502';
        contexto.fillRect(200 + movimiento(), 150 + movimiento(), 50, 50);
        // Caja 2
        contexto.fillStyle = '#FF0000';
        contexto.fillRect(300 + movimiento(), 400 + movimiento(), 50, 50);
        // Caja 3
        contexto.fillStyle = '#2AFF00';
        contexto.fillRect(550 + movimiento(), 250 + movimiento(), 50, 50);
        // Caja 4
        contexto.fillStyle = '#F7FF00';
        contexto.fillRect(800 + movimiento(), 250 + movimiento(), 50, 50);

    }

    /**
     * Genera un número aleatorio entre 1 y 100 y lo devuelve
     */
    function movimiento() {
        let aleatorio = Math.floor(Math.random() * 100) + 1;
        return aleatorio;
    }
}