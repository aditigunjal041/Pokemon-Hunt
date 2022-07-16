let pokeballs = 10;
let count = 0;

window.onclick = function (e){
    if(pokeballs > 0){
        pokeballs--;
        document.getElementById("currentPokeballs").innerHTML = pokeballs;

        if(e.target.nodeName == "IMG") {
            e.target.style.display = 'none';
            document.getElementById("currentScore").innerHTML = ++count;
        }

    }
}
    
