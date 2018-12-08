
    let cel = document.getElementById("cel").value;
    let fah = document.getElementById("fah").value;

    let celVal = Number(cel);
    let fahVal = Number(fah);

    let btnCel = document.getElementById("celci");
    let btnFah = document.getElementById("fahren");

    function toFahren(celTemp){
       let fahEquiv = celTemp + 312;
       fah = fahEquiv;
    }
    function toCelcius(fahTemp){
        let celEquiv = fahTemp -312;
        cel = celEquiv;
    }

    // document.getElementById("fahren").addEventListener("click",function(){
    //     toFahren(cel);
    // });
    // document.getElementById("cel").addEventListener("click",function(){
    //     toelcius(fah);
    // });