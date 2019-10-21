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

        imagen();
        circulo();


    }
}

/**
 * 
 */
function imagen() {
    let img = new Image();
    img.src = 'perros.jpg';
    img.onload = function() {
        contexto.drawImage(img, 400, 225, 160, 234, 15, 15, 120, 180);
        //tamaño natural
        contexto.drawImage(img, 160, 20, 500, 400);
    }

    /**
     * 
     */
    function circulo() {
        let X = micanvas.width / 2;
        let Y = micanvas.height / 2;
        let r = 75;
        contexto.strokeStyle = "#006400";
        contexto.fillStyle = "#6ab150";
        contexto.lineWidth = 5;
        contexto.arc(X, Y, r, 0, 2 * Math.PI);
        contexto.fill();
        contexto.stroke();
    }

}