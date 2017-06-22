
function coseno(val) {
    document.getElementById("resultadoC").innerHTML = "Resultado:"
    document.getElementById("coseno").innerHTML = "Grados: "+toDegrees(Math.cos(val)).toFixed(2);
    document.getElementById("cosenoR").innerHTML = "Radianes: "+Math.cos(val).toFixed(2);
}

function seno(val) {
    document.getElementById("resultadoS").innerHTML="Resultado:";
    document.getElementById("seno").innerHTML = "Grados: "+toDegrees(Math.sin(val)).toFixed(2);
    document.getElementById("senoR").innerHTML = "Radianes: "+Math.sin(val).toFixed(2);
}
function tangente(val) {
    document.getElementById("resultadoT").innerHTML = "Resultado:"
    document.getElementById("tangente").innerHTML = "Grados: "+toDegrees(Math.tan(val)).toFixed(2);
    document.getElementById("tangenteR").innerHTML = "Radianes: "+Math.tan(val).toFixed(2);
}
function toDegrees (angle) {
  return angle *180 / Math.PI;
}
