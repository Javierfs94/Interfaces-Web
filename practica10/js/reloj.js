function reloj() {
    momento = new Date()
    hora = momento.getHours()
    minuto = momento.getMinutes()
    segundo = momento.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.form_reloj.reloj.value = horaImprimible

    setTimeout("reloj()", 1000)
}