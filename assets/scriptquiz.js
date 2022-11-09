// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
var timerEl = document.getElementById('countdown');
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "A very useful tool used during development and debugging for printing content to the debugger is:",
        choiceA : "Javascript",
        choiceB : "terminal/bash",
        choiceC : "for loops",
        choiced : "console.log",
        correct : "C"
    },{
        question : "Commonly used data types do NOT include:",
        choiceA : "strings",
        choiceB : "booleans",
        choiceC : "numbers",
        choiceC : "alerts",
        correct : "B"
    },{
        question : "Arrays in Javascript can be used to store ______",
        choiceA : "numbers and strings",
        choiceB : "other arrays",
        choiceC : "booleans",
        choiceD : "all of the above",
        correct : "D"
    },{
        
        question : "String values must be enclosed within _____ when being assigned to variables",
        choiceA : "commas",
        choiceB : "curly brackets",
        choiceC : "quotes",
        choiceD : "parenthesis",
        correct : "B"
    }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; // 10s
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}



// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        answerIsCorrect("YAY");
    }else{
        // answer is wrong
        answerIsWrong("BOO");
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    dispatchEvent.innerHTML

}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "yellow";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}


var timeLeft = 60;

function countdown() {

    // method to call a function to be executed every 1000 milliseconds 
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = 'Time: ' + timeLeft;
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

  // method to call a function to hide the intro once 'start quiz' button is clicked

  function hideIntro (){
        var int = document.getElementById("header");
        if (int.style.display === "none"){
            int.style.display = "block";
        }else {
            int.style.display="none";
        }
        }
  

  start.addEventListener("click",startQuiz);
  start.addEventListener("click",countdown);
  start.addEventListener("click",hideIntro);










