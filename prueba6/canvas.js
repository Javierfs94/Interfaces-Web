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

        contexto.fillStyle = "red";
        contexto.fillRect(10, 10, 175, 130);

        contexto.fillStyle = "white";
        contexto.font = "bold 18px sans-seriff";
        contexto.fillText("Hola mi nombre es...", 20, 30);
        contexto.fillRect(20, 40, 155, 90);
        contexto.strokeStyle = 'black';
        contexto.strokeRect(20, 40, 155, 90);


        contexto.fillStyle = "black";
        contexto.font = "bold 70px sans-seriff";
        contexto.textAlign = "center";
        contexto.fillText("Javi", 95, 110);

    }
}