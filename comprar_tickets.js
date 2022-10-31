function calcTot(){
    let cant = document.getElementById("cantidad").value
    let cat = document.getElementById("categoria").value
    let tot = cant * 200 * cat
    document.getElementById("tot").innerHTML=`Total a pagar: $${tot}`
}