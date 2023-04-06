const quizData = [
    {
        question: "What is the output of the following code?\nconst arr = [1, 2, 3];\nconsole.log(arr[10]);",
        a: "undefined",
        b: "10",
        c: "throws an error",
        d: "0",
        correct: "a"
        },
        {
        question: "What is the value of typeof null in JavaScript?",
        a: "null",
        b: "undefined",
        c: "object",
        d: "number",
        correct: "c"
        },
        {
        question: "What is the difference between let and var in JavaScript?",
        a: "let is block-scoped, while var is function-scoped",
        b: "var is block-scoped, while let is function-scoped",
        c: "There is no difference",
        d: "var is a keyword, while let is a reserved word",
        correct: "a"
        },
        {
        question: "What is the output of the following code?\nconst obj = {a: 1, b: 2, c: 3};\nconst {a, ...rest} = obj;\nconsole.log(rest);",
        a: "{a: 1}",
        b: "{b: 2, c: 3}",
        c: "{a: 1, b: 2}",
        d: "{a: 1, c: 3}",
        correct: "b"
        },
        {
        question: "What is the value of NaN === NaN in JavaScript?",
        a: "true",
        b: "false",
        c: "undefined",
        d: "throws an error",
        correct: "b"
        },
        {
        question: "What is the output of the following code?\nconsole.log(0.1 + 0.2 === 0.3);",
        a: "true",
        b: "false",
        c: "undefined",
        d: "throws an error",
        correct: "b"
        },
        {
        question: "What is the output of the following code?\nconsole.log(+'3');",
        a: "30",
        b: "3",
        c: "NaN",
        d: "throws an error",
        correct: "b"
        },
        {
        question: "What is the output of the following code?\nconsole.log([10, 20, 30].map(parseInt));",
        a: "[10, 20, 30]",
        b: "[NaN, NaN, NaN]",
        c: "[0, 1, 2]",
        d: "throws an error",
        correct: "b"
        },
        {
        question: "What is the output of the following code?\nconst x = 10;\nconst y = x++;\nconsole.log(x, y);",
        a: "10, 10",
        b: "11, 11",
        c: "11, 10",
        d: "10, 11",
        correct: "c"
        },
        {
        question: "What is the output of the following code?\nconst a = { b: 1 };\nconst b = { c: 2 };\nObject.assign(a, b);\nconsole.log(a);",
        a: "{b: 1, c: 2}",
        b: "{c: 2}",
        c: "{b: 1}",
        d: "throws an error",
        correct: "a"
        },

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
