
function coseno(val) {
    document.getElementById("coseno").innerHTML = "Resultado: \n Grados: "+toDegrees(Math.cos(val)).toFixed(2)+"\n Radianes: "+Math.cos(val).toFixed(2); 
}
function seno(val) {
    document.getElementById("seno").innerHTML = "Resultado: "+toDegrees(Math.sin(val)); 
}
function tangente(val) {
    document.getElementById("tangente").innerHTML = "Resultado: "+toDegrees(Math.tan(val)); 
}
function toDegrees (angle) {
  return angle *180 / Math.PI;
}
