// //°C x 9/5 + 32 = °F. (°F - 32) x 5/9 = °C ...
let user_input = document.querySelector("input").value;
user_input = Number(user_input);
function toCelcius(fahNum){
    fahNum = parseFloat(fahNum);
    document.getElementById("output").innerHTML = (fahNum - 32) * 5/9;
}
function toFahren(celNum){
    celNum= parseFloat(celNum);
    document.getElementById("output").innerHTML = (celNum  * 9/5) + 32;
}
let btn_cel   = document.getElementById("cel");
btn_cel.addEventListener("click", ()=>{
    toCelcius(user_input);
});
let btn_fah   = document.getElementById("fah");
btn_fah.addEventListener("click", ()=>{
    toFahren(user_input);
});