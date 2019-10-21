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
        // Imagen
        let img = new Image();
        img.src = 'perros.jpg';
        img.onload = function() {
            contexto.drawImage(img, 400, 225, 160, 234, 15, 200, 120, 180);
            //tamaño natural
            contexto.drawImage(img, 180, 20, 500, 400);

            //Circulo
            contexto.beginPath();

            contexto.lineWidth = 5;
            contexto.arc(80, 450, 50, 0, 2 * Math.PI);
            contexto.fillStyle = "#FF0000";
            contexto.fill();

            contexto.strokeStyle = "#006400";
            contexto.stroke();

            //Degradado
            let degradado = contexto.createLinearGradient(0, 0, 170, 0);
            degradado.addColorStop(0, "black");
            degradado.addColorStop(0.5, "red");
            degradado.addColorStop(1, "white");
            contexto.fillStyle = degradado;
            contexto.fillRect(20, 20, 150, 100);

            //Texto
            contexto.fillStyle = "black";
            contexto.font = "bold 16px sans-seriff";
            contexto.textAlign = "center";
            contexto.fillText("Ejemplo de degradado", 90, 150);
        }

    }
}