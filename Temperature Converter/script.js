// //°C x 9/5 + 32 = °F. (°F - 32) x 5/9 = °C ...
// // document.querySelector('span').innerHTML = "00";
// let temp = Number(document.getElementById("temp-input"));
// // let tempNum = Number(temp);
// function toCelcius(fahtemp){
//     fahtemp = parseFloat(fahtemp);
//     // let celConv  = 
//     // celConv = Number(celConv);
//     document.getElementById('output').innerHTML = (fahtemp - 32) * 5/9;
//     //`{&#8451;}` `{&#8457;}`

// }
// function toFahren(celtemp){
//     celtemp = parseFloat(celtemp);
//     // let fahConv = 
//     // fahConv = Number(fahConv);
//     document.getElementById('output').innerHTML = (celtemp * 9/5) + 32;;
// }

// let btn_cel   = document.getElementById("cel");
// btn_cel.addEventListener("click", ()=>{
//     let tempNum = Number(temp);
//     toCelcius(temp);
// });
// let btn_fah   = document.getElementById("fah");
// btn_fah.addEventListener("click", ()=>{
//     let tempNum = Number(temp);
//     toFahren(temp);
// });
let user_input = document.getElementById('input').value;
user_input = parseFloat(user_input);
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