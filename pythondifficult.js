const quizData = [
    {
        question: "What is the output of the following code?\n\na = [1, 2, 3, 4, 5]\nconsole.log(a[12:]);",
        a: "[]",
        b: "[1, 2, 3, 4, 5]",
        c: "undefined",
        d: "Throws an error",
        correct: "a"
        },
        {
        question: "What is the difference between list and tuple in Python?",
        a: "Lists are mutable, while tuples are immutable",
        b: "Tuples are mutable, while lists are immutable",
        c: "There is no difference",
        d: "Lists and tuples are not supported in Python",
        correct: "a"
        },
        {
        question: "What is the output of the following code?\n\na = [1, 2, 3, 4, 5]\nb = [x**2 for x in a if x % 2 === 0]\nconsole.log(b);",
        a: "[1, 4, 9, 16, 25]",
        b: "[4, 16]",
        c: "[1, 3, 5]",
        d: "[2, 4]",
        correct: "b"
        },
        {
        question: "What is the value of 2 ** 3 ** 2 in Python?",
        a: "64",
        b: "512",
        c: "24",
        d: "16",
        correct: "b"
        },
        {
        question: "What is the output of the following code?\n\nfunction func(a, b, c) {\n console.log(a, b, c);\n}\n\nvar args = [1, 2, 3];\nfunc(...args);",
        a: "1, 2, 3",
        b: "[1, 2, 3]",
        c: "(1, 2, 3)",
        d: "Throws an error",
        correct: "a"
        },
        {
        question: "What is the output of the following code?\n\nvar a = [1, 2, 3];\nvar b = a;\na.push(4);\nconsole.log(b);",
        a: "[1, 2, 3]",
        b: "[1, 2, 3, 4]",
        c: "[2, 3, 4]",
        d: "Throws an error",
        correct: "b"
        },
        {
        question: "What is the output of the following code?\n\nfunction func(x, y = 2) {\n return x ** y;\n}\n\nconsole.log(func(2));",
        a: "4",
        b: "2",
        c: "8",
        d: "Throws an error",
        correct: "c"
        },
        {
        question: "What is the output of the following code?\n\nvar a = [1, 2, 3, 4, 5];\nvar b = a.reverse();\nconsole.log(b);",
        a: "[5, 4, 3, 2, 1]",
        b: "[1, 2, 3, 4, 5]",
        c: "[1, 3, 5]",
        d: "Throws an error",
        correct: "a"
        },

{
question: "What is the output of the following code?\na = [1, 2, 3]\nb = a\nc = a.copy()\nb.append(4)\nc.append(5)\nprint(a, b, c)",
a: "[1, 2, 3, 4] [1, 2, 3, 4] [1, 2, 3, 5]",
b: "[1, 2, 3, 4] [1, 2, 3, 4] [1, 2, 3]",
c: "[1, 2, 3] [1, 2, 3, 4] [1, 2, 3, 5]",
d: "Throws an error",
correct: "a"
},
{
question: "What is the output of the following code?\ndef func(x):\n return 2*x\n\na = [1, 2, 3]\nb = map(func, a)\nprint(b)",
a: "2 4 6",
b: "[1, 2, 3]",
c: "[2, 4, 6]",
d: "<map object at 0x000001>",
correct: "d"
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
