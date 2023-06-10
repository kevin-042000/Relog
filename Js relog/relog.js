
function draw() {
    let hora = hour();
    let minuto = minute();
    let segundo = second();
    
    //obtener la hora de forma digital
    document.getElementById("texto-hora-digital").innerHTML = `${(hora + "").padStart(2, "0")}:${(minuto + "").padStart(2, "0")}:${(segundo + "").padStart(2, "0")}`;
    

    //hacer que las manecillas roten dependiendo de la hora
    document.getElementById("horas").style.transform = `rotate(${360 * hora / 12}deg)`;
    document.getElementById("minutos").style.transform = `rotate(${360 * minuto / 60}deg)`;
    document.getElementById("segundos").style.transform = `rotate(${360 * segundo / 60}deg)`;
}


