//select all the elements & update the inner HTML of the elements

var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var qImg = document.getElementById("questionImage");
var question = document.getElementById("question");
var counter = document.getElementById("counter");
var timeGuage= document.getElementById("timeGuage");

var choiceA = document.getElementById('A');
var choiceB = document.getElementById('B');
var choiceC = document.getElementById('C');

var progress = document.getElementById("progress");
var scoreContainer = document.getElementById("scoreContainer");


//questions will be inside an array 
//every element will be an object with the same properties
let questions = [
    {
        question: "what does HTML stand for?",
        imgSrc: "HTMLlogo.png", 
        choiceA: "hypertext markup language",
        choiceB: "hyperlinks markup language",
        choiceC: "home tool markup language",
        correct: "A"
    }, //in the same way create more questions 
    //to access the first question's first element question[0].question
    {
        question: "what does CSS stand for?",
        imgSrc: "CSSlogo.png", 
        choiceA: "cascading style sheets",
        choiceB: "computer style sheets",
        choiceC: "cascade styling software",
        correct: "A"
    },
]

let lastQuestionIndex = question.length-1;   

let runningQuestionIndex=0;

function renderQuestion(){
    var q = questions[runningQuestionIndex];
    qImg.innerHTML = "<img src=" + q.imgSrc + ">";
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;


}

function progressRender(){
    for(let qIndex=0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
    }
}

//function below to change color for correct and incorrect 

function answerIsCorrect() {
    document.getElementById(runningQuestionIndex).style.backgroundColor="green"
}

function answerIsWrong() {
    document.getElementById(runningQuestionIndex).style.backgroundColor="red"
}


var questionTime=10;
var guageWidth=150;
let count =0;
var guageProgresUnit = guageWidth/questionTime;

