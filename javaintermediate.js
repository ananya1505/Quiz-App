const quizData = [
  
    {
        question: "What is the output of the following code? let x = 5; let y = 7; let z = x > y ? x : y; console.log(z);",
        a: "5",
        b: "7",
        c: "undefined",
        d: "Error",
        correct: "b"
        },
        {
        question: "What is the output of the following code? let x = [1, 2, 3]; let y = x; y.push(4); console.log(x);",
        a: "[1, 2, 3]",
        b: "[1, 2, 3, 4]",
        c: "[4, 3, 2, 1]",
        d: "Error",
        correct: "b"
        },
        {
        question: "What is the output of the following code? let x = 'hello'; let y = x.replace('l', 'L'); console.log(x, y);",
        a: "'hello', 'heLLo'",
        b: "'hello', 'hello'",
        c: "'hello', 'heo'",
        d: "'heLLo', 'hello'",
        correct: "b"
        },
        {
        question: "What is the output of the following code? let x = [1, 2, 3]; let y = x.slice().reverse(); console.log(y);",
        a: "[3, 2, 1]",
        b: "[1, 2, 3]",
        c: "[1, 3, 2]",
        d: "[2, 1, 3]",
        correct: "a"
        },
        {
        question: "What is the output of the following code? let x = {1: 'one', 2: 'two'}; let y = {3: 'three'}; let z = {...x, ...y}; console.log(z);",
        a: "{1: 'one', 2: 'two', 3: 'three'}",
        b: "{3: 'three', 2: 'two', 1: 'one'}",
        c: "{1: 'one', 2: 'two'}",
        d: "{3: 'three'}",
        correct: "a"
        },
        {
        question: "What is the output of the following code? let x = 'hello'; let y = x.split('').reverse().join(''); let z = [...y].map(i => i+i).join(''); console.log(z);",
        a: "'loll'",
        b: "'llehoheh'",
        c: "'ololehheh'",
        d: "'hhehohelleh'",
        correct: "b"
        },
        {
        question: "What is the output of the following code? let x = [1, 2, 3]; let y = x.concat(); y.push(4); console.log(x);",
        a: "[1, 2, 3]",
        b: "[1, 2, 3, 4]",
        c: "[4, 3, 2, 1]",
        d: "Error",
        correct: "a"
        },
        {
        question: "What is the output of the following code? let x = [[1, 2], [3, 4]]; let y = Object.fromEntries(x); console.log(y);",
        a: "{1: 2, 3: 4}",
        b: "{[1, 2]: [3, 4]}",
        c: "Error",
        d: "undefined",
        correct: "a"
        },
        {
            question: "What is the output of the following code? let x = [1, 2, 3]; let y = x.filter(i => i !== 2); console.log(y);",
            a: "[1, 2, 3]",
            b: "[1, 3]",
            c: "[2, 3]",
            d: "[1, 2]",
            correct: "b",
            },
            {
                question: "What is the output of the following code? let x = {1: 'one', 2: 'two'}; let y = {...x, 3: 'three'}; console.log(y);",
                a: "{1: 'one', 2: 'two', 3: 'three'}",
                b: "{3: 'three', 2: 'two', 1: 'one'}",
                c: "{1: 'one', 2: 'two'}",
                d: "{3: 'three'}",
                correct: "a",
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
