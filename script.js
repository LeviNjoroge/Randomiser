function Randomise() {
    const Min = 1;
    const Max = 6;
    let results = Math.floor(Math.random()*(Max-Min+1))+Min;
    let result = document.getElementById("result")
    if (results == 1) {
        result.src  = "dice-roll-1.gif";
    }
    else if (results == 2) {
        result.src  = "dice-roll-2.gif";
    }
    else if (results == 3) {
        result.src  = "dice-roll-3.gif";
    }
    else if (results == 4) {
        result.src  = "dice-roll-4.gif";
    }
    else if (results == 5) {
        result.src  = "dice-roll-5.gif";
    }
    else if (results == 6) {
        result.src  = "dice-roll-6.gif";
    }
    else {
        result.src  = "dice-game.gif";
    }
}