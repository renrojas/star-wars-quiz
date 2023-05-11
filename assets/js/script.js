var startButton = document.getElementById("start-button");

function startQuiz (){
    console.log("start")
    setInterval(timerStart, 1000);
    test()
}

startButton.addEventListener("click", startQuiz);



var counter=59

function timerStart() {
 var timeEl= document.getElementById("time")
 timeEl.textContent = "time: " + counter;
 counter=counter - 1
}



//1. Functional start button
//2. Timer starts when question is presented
//3. Presented with another question
//4. When answer is incorrect, 10 seconds is subtracted from timer
//5. Game over when all questions answered or timer reaches 0
//6. Save initials and score to local storage 
//7. Able to see saved initials and scores from local storage

function test(){
    console.log("dkasfds")
}