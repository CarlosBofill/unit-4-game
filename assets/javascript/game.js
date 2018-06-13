$(document).ready(function() { 
    // console.log("DOM fully loaded and parsed");
    let yourWins = 0;
    let yourLosses = 0;
    let yourTotalScore = 0;
    let blue = 0;
    let yellow = 0;
    let green = 0;
    let red = 0;
    let computerNum = 0;
    
    $("#score").html(yourTotalScore);
 
    const generateRandomNum = function() {
        let random = Math.floor(Math.random() * 100 + 19);
        computerNum += random;
        return random;
    }

    
    $("#randomNum").html(generateRandomNum());

    const generateCrystalNum = function() {
        let random = Math.floor(Math.random() * 12 + 1);
        return random;
    }

    const initialCrystalNum = function() {
        blue += generateCrystalNum();
        red += generateCrystalNum();
        green += generateCrystalNum();
        yellow += generateCrystalNum();
    }

    initialCrystalNum();

    $("button").on("click", function() {
        if(this.id === "blue") {
            yourTotalScore += blue;
        } else if(this.id === "yellow") {
            yourTotalScore += yellow;
        } else if(this.id === "red") {
            yourTotalScore += red;
        } else if(this.id === "green") {
            yourTotalScore += green;
        }
        $("#score").html(yourTotalScore);
        winOrLose();
    });

    const winOrLose = function() {
        if(yourTotalScore === computerNum) {
            yourWins += 1;
            $("#win").html(yourWins);
            alert("You win!");
            reset();   
        } else if(yourTotalScore > computerNum) {
            yourLosses += 1;
            $("#loss").html(yourLosses);
            alert("You lose.");
            reset();
        }
    }
    
    const reset = function() {  
        yourTotalScore = 0;
        $("#score").html(yourTotalScore);
        blue = 0;
        green = 0;
        yellow = 0;
        red = 0;
        computerNum = 0;
        initialCrystalNum();
        $("#randomNum").html(computerNum += generateRandomNum());
    }
});