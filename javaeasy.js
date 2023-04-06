const quizData = [
    {
        question: "What is JavaScript?",
        a: "A server-side scripting language",
        b: "A client-side scripting language",
        c: "A database management system",
        d: "A markup language",
        correct: "b",
        },
        {
        question: "Which of the following is an example of a JavaScript variable declaration?",
        a: "myVariable = 10;",
        b: "variable = 10;",
        c: "10 = myVariable;",
        d: "var = myVariable;",
        correct: "a",
        },
        {
        question: "What is the correct way to write a JavaScript comment?",
        a: "// This is a comment",
        b: "# This is a comment",
        c: "<!-- This is a comment -->",
        d: "' This is a comment",
        correct: "a",
        },
        {
        question: "Which keyword is used to define a function in JavaScript?",
        a: "def",
        b: "func",
        c: "function",
        d: "define",
        correct: "c",
        },
        {
        question: "Which of the following is used to display a message box in JavaScript?",
        a: "alert()",
        b: "prompt()",
        c: "confirm()",
        d: "console.log()",
        correct: "a",
        },
        {
        question: "What is the correct way to add two numbers in JavaScript?",
        a: "num1 + num2",
        b: "add(num1, num2)",
        c: "num1 - num2",
        d: "multiply(num1, num2)",
        correct: "a",
        },
        {
        question: "Which of the following is used to select an HTML element in JavaScript?",
        a: "$",
        b: "#",
        c: ".",
        d: "/",
        correct: "b",
        },
        {
            question: "What is the output of the following code? :- var x = 5; var y = '10'; var z = x + y; console.log(z); ",
            a: "510",
            b: "15",
            c: "'15'",
            d: "NaN",
            correct: "c",
            },
            {
            question: "What is the output of the following code? var a = [1, 2, 3]; console.log(a[1]);",
            a: "1",
            b: "2",
            c: "3",
            d: "undefined",
            correct: "b",
            },
            {
            question: "What is the correct way to write an if statement in JavaScript?",
            a: "if x = 10",
            b: "if (x == 10)",
            c: "if x == 10",
            d: "if {x == 10}",
            correct: "b",
            }
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

const numberOfQuestion = document.getElementById("numberOfQuestion");
const numberOfAllQuestion = document.getElementById("numberOfAllQuestion");

let indexOfQuestion;
let indexOfPage = 0;

numberOfAllQuestion.innerHTML = quizData.length;

let currentQuiz = 0
let score = 0

let time = 300;
    const countDownEl = document.getElementById("countdown");   
    
    let counter = setInterval(updateCountdown, 1000);
    
    function updateCountdown(){
    
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
    
        seconds = seconds < 10 ? "0" + seconds: seconds;
    
        minutes = minutes < 10 ? "0" + minutes: minutes;
    
        countDownEl.innerHTML = `${minutes}:${seconds}`;
    
        time--;
    
        
    
        if(minutes <= 0 && seconds == 0) {
            const timeText = document.querySelector(".timer_text");
            timeText.textContent = "Time is over";
            //alert("Quiz over");
            Swal.fire({
                icon: 'error',
                title: 'Oops...time is up!',
                text: 'But you can restart the quiz',
                showConfirmButton: false,
                footer: '<a href="start.html" style="background-color:#44b927; padding: 1rem; text-decoration: none; color: white;">Restart the Quiz</a>'
              })
            clearInterval(counter);
        }
    
        
    }

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    numberOfQuestion.innerHTML = indexOfPage + 1;
    indexOfPage++; 

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {

        quiz.innerHTML = `

       <div class="end_quiz">
       <img src="https://img.freepik.com/free-vector/winner-cup-with-gold-medal-concept_1284-13591.jpg?t=st=1649089096~exp=1649089696~hmac=f87786e709de78b968be4c3294279ab1fcbc23a8b4a452b0246e08d7665b3cec&w=826" alt="winner" class="img">
        <h3 class="end-title">You answered ${score}/${quizData.length} questions correctly</h3>
        <button onclick="location.reload()" class="reload">Reload</button></div>
         `
       }
    }
})

}
