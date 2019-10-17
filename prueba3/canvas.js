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

        contexto.fillStyle = 'orange';
        contexto.beginPath();
        contexto.moveTo(50, 15);
        contexto.lineTo(112, 15);
        contexto.lineTo(143, 69);
        contexto.lineTo(112, 123);
        contexto.lineTo(50, 123);
        contexto.lineTo(19, 69);
        contexto.closePath();
        contexto.fill();
        contexto.stroke();

        contexto.fillStyle = 'blue';
        contexto.beginPath();
        contexto.moveTo(250, 15);
        contexto.lineTo(312, 15);
        contexto.lineTo(343, 69);
        contexto.lineTo(312, 123);
        contexto.lineTo(250, 123);
        contexto.lineTo(219, 69);
        contexto.closePath();
        contexto.fill();

        contexto.fillStyle = 'red';
        contexto.beginPath();
        contexto.moveTo(50, 215);
        contexto.lineTo(112, 215);
        contexto.lineTo(143, 269);
        contexto.lineTo(112, 323);
        contexto.lineTo(50, 323);
        contexto.lineTo(19, 269);
        contexto.closePath();
        contexto.fill();


    }
}