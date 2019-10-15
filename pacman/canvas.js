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
        // Dibujar arcos
        // arc(x, y, radio, angulo_inicio, angulo_final, sentido_contrario_del_reloj)
        // contexto.arc(50, 50, 50, 0, Math.PI * 2, false);
        // Pintar el pacman
        // Cuerpo del pacman
        contexto.beginPath();
        contexto.arc(50, 50, 50, Math.PI * 1.75, Math.PI * 0.25, true);
        contexto.lineTo(50, 50);
        contexto.fillStyle = 'yellow';
        contexto.fill();
        contexto.closePath();

        // Ojo del pacman
        contexto.beginPath();
        contexto.arc(35, 30, 5, 0, Math.PI * 2, false);
        contexto.fillStyle = 'black';
        contexto.fill();
        contexto.closePath();

        // Frutas
        for (let i = 2; i <= 10; i++) {
            contexto.beginPath();
            contexto.arc(50 * i, 50, 10, 0, Math.PI * 2, false);
            contexto.fillStyle = 'pink';
            contexto.fill();
            contexto.closePath();

        }


    }
}