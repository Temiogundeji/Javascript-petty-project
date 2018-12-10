//°C x 9/5 + 32 = °F. (°F - 32) x 5/9 = °C ...
document.querySelector('span').innerHTML = "00";
let temp = document.getElementById("input-temp");
let tempNum = Number(temp);
function toCelcius(fahtemp){
    let celConv  = (fahtemp - 32) * 5/9;
    document.querySelector('span').innerHTML = celConv;
    //`{&#8451;}` `{&#8457;}`

}
function toFahren(celtemp){
    let fahConv = (celtemp * 9/5) + 32;
    document.querySelector('span').innerHTML = fahConv ;
}

let btn_cel   = document.getElementById("cel");
btn_cel.addEventListener("clicked", ()=>{
    toCelcius(tempNum);
});
let btn_fah   = document.getElementById("fah");
btn_fah.addEventListener("clicked", ()=>{
    toFahren(tempNum);
});