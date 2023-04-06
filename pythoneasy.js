const quizData = [
    {
        question: "What is the result of the following code? print('Hello' + ' ' + 'world!')",
        a: "Helloworld!",
        b: "Hello world!",
        c: "Hello",
        d: "world!",
        correct: "b",
        },
        {
        question: "Which keyword is used to define a function in Python?",
        a: "def",
        b: "function",
        c: "define",
        d: "fun",
        correct: "a",
        },
        {
        question: "What is the output of the following code? a = 5 ;b = 2;print(a / b)",
        a: "2.5",
        b: "3",
        c: "2",
        d: "2.0",
        correct: "a",
        },
        {
        question: "Which of the following data types is not supported in Python?",
        a: "Integer",
        b: "Float",
        c: "Boolean",
        d: "Double",
        correct: "d",
        },
        {
        question: "What is the output of the following code? a = 4 ;b = 3 ;print(a ** b)",
        a: "1",
        b: "7",
        c: "12",
        d: "64",
        correct: "d",
        },
        {
        question: "Which of the following is a built-in function in Python?",
        a: "reduce()",
        b: "push()",
        c: "slice()",
        d: "shift()",
        correct: "a",
        },
        {
        question: "What is the output of the following code? a = [1, 2, 3] b = [4, 5, 6] c = a + b  print(c)",
        a: "[1, 2, 3, 4, 5, 6]",
        b: "[[1, 2, 3], [4, 5, 6]]",
        c: "[(1, 4), (2, 5), (3, 6)]",
        d: "[4, 5, 6, 1, 2, 3]",
        correct: "a",
        },
        {
        question: "Which of the following is used to comment a single line of code in Python?",
        a: "//",
        b: "#",
        c: "/",
        d: "<!-- -->",
        correct: "b",
        },
        {
        question: "What is the output of the following code? a = 'Python' print(a[2:4])",
        a: "P",
        b: "y",
        c: "th",
        d: "ho",
        correct: "c",
        },
        {
        question: "Which of the following is used to get user input in Python?",
        a: "input()",
        b: "get()",
        c: "read()",
        d: "scanf()",
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
