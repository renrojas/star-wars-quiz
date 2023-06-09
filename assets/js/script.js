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

//start button & timer start
var startButton = document.getElementById("start-button");
var myInterval;

function startQuiz (){
    console.log("start");
   myInterval = setInterval(timerStart,1000);
    test();
    displayQuestion()
}

startButton.addEventListener("click", startQuiz);

function myStopFunction() { 
    clearInterval(myInterval);
    //display score
}

var counter=120;
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
var questionIndex = 0
var buttonBox =document.getElementById("buttonBox") //creates something to stick to in js


//displays question and options
function displayQuestion() {
    var display = document.getElementById("display-question");
    display.textContent = questions[questionIndex].questionText;
    //console.log(questions[0].questionText);
    //questionIndex++
    var currentIndex = questions[questionIndex]
    buttonBox.innerHTML=""
    for (var i =0; i < currentIndex.options.length; i++){ //loops the options
        console.log(currentIndex.options[i])
        var optionButton = document.createElement("button") //creates buttons on js (ref activity 10 mod 6)
        optionButton.textContent = currentIndex.options[i]
        optionButton.classList.add("optionButton") //creates a class for optionButton
        optionButton.setAttribute("value",currentIndex.options[i])
        buttonBox.appendChild(optionButton);
    }
}
//function that reads button click on options
function buttonClick (e) {
    console.log(questions[0].answer)
    var button = e.target 
    if (button.value !== questions[questionIndex].answer) {
        //console.log("incorrect")
        counter=counter-10
    }


    questionIndex++
    if (questionIndex < questions.length){
        displayQuestion() 
    } else {
        myStopFunction()
    }

    console.log(questionIndex)
}
buttonBox.addEventListener("click", buttonClick)
//1. Functional start button (done)
//2. Timer starts when question is presented (done)
//3. Presented with another question (done)
//4. When answer is incorrect, 10 seconds is subtracted from timer (done)
//5. Game over when all questions answered or timer reaches 0
//6. Save initials and score to local storage 
//7. Able to see saved initials and scores from local storage

function test(){
    console.log("dkasfds");
}