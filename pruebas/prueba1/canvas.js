function cargarContextoCanvas(idCanvas) {
    let canvas = document.getElementById(idCanvas);
    if (canvas && canvas.getContext) {
        let contexto = canvas.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
}

window.onload = function() {
    // Incluimos el elemento canvas
    contexto = cargarContextoCanvas('micanvas');
    // Acceder al contexto 2d
    contexto = canvas.getContext('2d');
    // Dibujar el contexto
    contexto.fillRect(50, 0, 200, 150);
    contexto.fillStyle = 'red';
    contexto.fillRect(70, 30, 50, 50);
    contexto.fillStyle = 'green';
    contexto.fillRect(175, 30, 50, 50);
    contexto.fillStyle = 'blue';
    contexto.fillRect(70, 110, 150, 20);
    /*for (let i = 0; i <= 100; i += 10) {
        contexto.fillRect(i, i, 5, 5);
    }*/
    /*for (let i = 100; i > 0; i--) {
        contexto.fillRect(i, i - 1, 5, 5);
    }*/
}