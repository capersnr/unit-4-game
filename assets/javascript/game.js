console.log("App Starting");

$(document).ready(function() {
    var wins = 0;
    var losses = 0;
    var computerScore = 0;
    var totalScore = 0;
    var crystalGold = 0;
    var crystalGreen = 0;
    var crystalPink = 0;
    var crystalPurple = 0;


    var random =  Math.floor(Math.random() *100 + 20);
    
    var crystalGold = Math.floor(Math.random() *12 + 1);
    var crystalGreen = Math.floor(Math.random() *12 + 1);
    var crystalPink = Math.floor(Math.random() *12 + 1);
    var crystalPurple = Math.floor(Math.random() *12 + 1);
 

$("#computerScore-text").append("<h3><hr><center>"+ random + "<center><hr></h3>");

function YesSir(){
    alert("You Won!!");
    wins++;
    $("#winstext").append(wins);

}

function NoSir(){
    alert("You Lose!!");
    losses++;
    $("#lossestext").append(losses);
  
}

$("#crystalGoldtext").on ("click", function() {
totalScore = totalScore + crystalGold;
console.log("New totalScore" + totalScore);
$("#totalScoretext").append("<h3>" + totalScore + "</h3>");

    if (totalScore == random) {
            YesSir();
            $("#winstext").append(wins);
    }
    else if ( totalScore > random) {
            NoSir();
            $("#lossestext").append(losses);
    }

});

$("#crystalGreentext").on ("click", function() {
    totalScore = totalScore + crystalGreen;
    console.log("New totalScore" + totalScore);
    $("#totalScoretext").append("<h3>" + totalScore + "</h3>");
    
        if (totalScore == random) {
                YesSir();
                $("#winstext").append(wins);
        }
        else if ( totalScore > random) {
                NoSir();
                $("#lossestext").append(losses);
        }
    
    });


    $("#crystalPinktext").on ("click", function() {
        totalScore = totalScore + crystalPink;
        console.log("New totalScore" + totalScore);
        $("#totalScoretext").append("<h3>" + totalScore + "</h3>");
        
            if (totalScore == random) {
                    YesSir();
                    $("#winstext").append(wins);
            }
            else if ( totalScore > random) {
                    NoSir();
                    $("#lossestext").append(losses);
            }
        
        });

        
$("#crystalPurpletext").on ("click", function() {
    totalScore = totalScore + crystalPurple;
    console.log("New totalScore" + totalScore);
    $("#totalScoretext").append("<h3>" + totalScore + "</h3>");
    
        if (totalScore == random) {
                YesSir();
                $("#winstext").append(wins);
        }
        else if ( totalScore > random) {
                NoSir();
                $("#lossestext").append(losses);
        }
    
    });
});





console.log("App Ending");