const questions = [
    {
        questionText: "What was Order 66?",
        options: [
            "A. Operation performed on Anakin Skywalker pre Darth Vader",
            "B. Order that launched the Death Star",
            "C. Order sent by Leia to find Luke Skywalker", 
            "D. Order identifying all Jedi as traitors to the Republic thus to summary execution"],
        answer: "D. Order identifying all Jedi as traitors to the Republic thus to summary execution",
    },
    {
        questionText: "In a New Hope, Leia is kept on the Death Star in what cell number?",
        options: [
            "A. Cell 54",
            "B. Cell 5237",
            "C. Cell 2187",
            "D. Cell IV"],
        answer: "C. Cell 2187",
    },
    {
        questionText: "What species is Jar Jar Binks?",
        options: [
            "A. Abyssin", 
            "B. Sarlacc",
            "C. Gungan",
            "D. Chiss"],
        answer: "C. Gungan", 
    },
    {
        questionText: "Theed is the capital of what planet?",
        options: [    
            "A. Naboo",
            "B. Coruscant", 
            "C. Tatooine", 
            "D.  Felucia"],
        answer: "A. Naboo",
    },
    {
        questionText: "What is the name of the Wookiees' home planet?",
        options: [
            "A. Kamino", 
            "B. Kashyyyk",
            "C. Mustafar",
            "D. Yavin"],
        answer: "B. Kashyyyk",
    },
    {
        questionText: "What creates the color of a lightsaber?",
        options: [
            "A. Gas",
            "B. Light filaments",
            "C. Force of the one holding it",
            "D. Kyber crystals"],
        answer: "D. Kyber crystals",
    },
];
var correctAnswers=0;

//start button & timer start
var startButton = document.getElementById("start-button");
var myInterval;

var display = document.getElementById("display-question");

function startQuiz (){
    console.log("start");
   myInterval = setInterval(timerStart,1000);
    displayQuestion()
}

startButton.addEventListener("click", startQuiz);

function myStopFunction() { 
    clearInterval(myInterval);
    var display = document.getElementById("display-question");
    buttonBox.innerHTML="";
    display.innerHTML="";
    display.textContent=`Your score is: ${correctAnswers}`;
    var highscores = JSON.parse(window.localStorage.getItem('high-score')) || [];
    if (highscores.indexOf(correctAnswers) ===-1) {
        highscores.push(correctAnswers);
      }
    localStorage.setItem('high-score', JSON.stringify(highscores));
    correctAnswers=0;
}

var scoreButton = document.getElementById("score-button");
scoreButton.addEventListener("click", showHighScores);

function showScore() {
    buttonBox.innerHTML="";
    display.innerHTML="";
    display.textContent=`Your score is: ${correctAnswers}`;
   
}//shows scores on page after click of button
function showHighScores(){
    const body = document.querySelector("body")
    buttonBox.innerHTML="";
    display.innerHTML="";
    const storedScores = JSON.parse(localStorage.getItem('high-score')) || [];
    storedScores.sort(function (a,b) { //sorts scores from highest to lowest
        return b - a
    })
        for (let i = 0; i < storedScores.length; i++) {
            const newH2 = document.createElement("h2")
            newH2.textContent = `High score: ${storedScores[i]}`;
            body.append(newH2);
    }
}

var counter=90;
var timeEl= document.getElementById("time");

function timerStart() {
    timeEl.textContent = "time: " + counter + " seconds";
 if (counter <= 0){
    myStopFunction();
}
else if (counter > 0){
    counter=counter - 1;
}
}
var questionIndex = 0;
var buttonBox =document.getElementById("buttonBox"); //creates something to stick to in js


//displays question and options
function displayQuestion() {
    display.textContent = questions[questionIndex].questionText;
    var currentIndex = questions[questionIndex];
    buttonBox.innerHTML="";
    for (var i =0; i < currentIndex.options.length; i++){ //loops the options
        console.log(currentIndex.options[i]);
        var optionButton = document.createElement("button"); //creates buttons on js (ref activity 10 mod 6)
        optionButton.textContent = currentIndex.options[i];
        optionButton.classList.add("optionButton"); //creates a class for optionButton
        optionButton.setAttribute("value",currentIndex.options[i]);
        buttonBox.appendChild(optionButton);
    }
}
//function that reads button click on options
function buttonClick (e) {
    console.log(questions[0].answer);
    var button = e.target; 
    if (button.value !== questions[questionIndex].answer) {
        counter=counter-10;
    }
    if (button.value === questions[questionIndex].answer) {
        correctAnswers++;
    }
    console.log(correctAnswers);

    questionIndex++
    if (questionIndex < questions.length){
        displayQuestion(); 
    } else {
        myStopFunction();
    }

    console.log(questionIndex);
}
buttonBox.addEventListener("click", buttonClick);