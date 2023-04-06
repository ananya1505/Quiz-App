const quizData = [

    {
    question: "Which property is used to change the font of an element in CSS?",
    a: "font-family",
    b: "font-size",
    c: "font-color",
    d: "font-weight",
    answer: "a",
    },
    {
    question: "Which of the following is a correct way to center an element horizontally in CSS?",
    a: "text-align: center;",
    b: "margin-left: auto; margin-right: auto;",
    c: "justify-content: center;",
    d: "align-items: center;",
    answer: "b",
    },
    {
    question: "Which property is used to create a box shadow effect in CSS?",
    a: "box-shadow",
    b: "shadow",
    c: "box-effect",
    d: "effect-shadow",
    answer: "a",
    },
    {
    question: "Which of the following is the correct way to add an external stylesheet to an HTML document?",
    a: '<link rel="stylesheet" href="mystyle.css">',
    b: "<style src='mystyle.css'></style>",
    c: "<style href='mystyle.css'></style>",
    d: '<link src="mystyle.css" rel="stylesheet">',
    answer: "a",
    },
    {
    question: "Which property is used to set the background color of an element in CSS?",
    a: "background-color",
    b: "color",
    c: "bg-color",
    d: "bg",
    answer: "a",
    },
    {
    question: "Which of the following is the correct way to apply a hover effect to a link in CSS?",
    a: "a:hover { }",
    b: "hover:a { }",
    c: "a:mouse { }",
    d: "a:focus { }",
    answer: "a",
    },
    {
    question: "Which property is used to set the height of an element in CSS?",
    a: "height",
    b: "size",
    c: "width",
    d: "dimension",
    answer: "a",
    },
    {
    question: "Which of the following is the correct way to set a border around an element in CSS?",
    a: "border: 1px solid black;",
    b: "border-color: black;",
    c: "border-width: 1px;",
    d: "All of the above",
    answer: "a",
    },
    {
    question: "Which property is used to set the position of an element in CSS?",
    a: "position",
    b: "place",
    c: "location",
    d: "position-style",
    answer: "a",
    },
    {
    question: "Which of the following is the correct way to create a responsive layout in CSS?",
    a: "Using a fixed width for all elements",
    b: "Using tables to structure the layout",
    c: "Using media queries to adjust styles based on screen size",
    d: "Using a separate stylesheet for each screen size",
    answer: "c",
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
