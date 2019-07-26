$(function (){
var question1;
var question2;
var question3;
var question4;
var result;
var countStart = 21;
var timer;

$(".startGame").on("click", function () {  
    startGame();
    $("#playAgain").hide();
    $("#resultArea").hide();
})

function startGame(){
    $("#start").appendTo("#playAgain");
    question1 = "";
    question2 = "";
    question3 = "";
    question4 = "";
    playGame();

    setTimeout (function (){
        $("#quizArea").show();
    }, 1000);
}

function countTime(){
    countStart--;
    $("#timeDisplay").html("<h3>Time remaining : " + countStart + "</h3>");
    if (countStart === -1){
        clearInterval(timer);
        $("#timeDisplay").html("<h3>Time Up !!</h3>");

        setTimeout(timeUp, 2000);
    }
}

function playGame() {
    countStart = 21;
    timer = setInterval(countTime,1000);
    
    $("#submitButton").on("click", function () {
        

        if ($("input[type = 'radio']:checked").length < 4) {
            alert("Please pick an answer for each question!")
        } else {
        clearInterval(timer);    
        question1 = parseInt($('input[name = "organ"]:checked').val(),10);
        question2 = parseInt($("input[name = 'phobia']:checked").val(),10);
        question3 = parseInt($("input[name = 'softDrink']:checked").val(),10);
        question4 = parseInt($("input[name = 'americans']:checked").val(),10);
        
        result = question1 + question2 + question3 + question4;
        gameResult();
        }
    });
}

function gameResult (){
    $("#quizArea").hide();
    $("#playAgain").show();
    $("#resultArea").show();
    $("#result").text("Your result is" + " " + result + "/100");
            if (result >= 75){
                $("#comment").text("Good Job !");
            }else{
                $("#comment").text("Not so good buddy !")
            }
}

function timeUp (){
    $("#quizArea").hide();
    $("#playAgain").show();
}
    
})