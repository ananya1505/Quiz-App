const quizData = [
    {
        question: "Which of the following properties can be used to create a 3D effect in CSS?",
        a: "transform-style",
        b: "perspective",
        c: "backface-visibility",
        d: "All of the above",
        correct: "d",
        },
        {
        question: "What is the default value of the 'position' property in CSS?",
        a: "static",
        b: "relative",
        c: "absolute",
        d: "fixed",
        correct: "a",
        },
        {
        question: "Which of the following selectors has the highest specificity?",
        a: "class selector",
        b: "id selector",
        c: "attribute selector",
        d: "universal selector",
        correct: "b",
        },
        {
        question: "Which of the following CSS preprocessors allows you to use variables?",
        a: "Sass",
        b: "Less",
        c: "Stylus",
        d: "All of the above",
        correct: "d",
        },
        {
        question: "What is the difference between the 'display: none' and 'visibility: hidden' properties in CSS?",
        a: "'display: none' removes an element from the document flow, while 'visibility: hidden' hides an element but still takes up space",
        b: "'visibility: hidden' removes an element from the document flow, while 'display: none' hides an element but still takes up space",
        c: "'display: none' and 'visibility: hidden' are the same thing",
        d: "None of the above",
        correct: "a",
        },
        {
        question: "Which of the following values of the 'position' property in CSS allows you to position an element relative to its normal position?",
        a: "static",
        b: "relative",
        c: "absolute",
        d: "fixed",
        correct: "b",
        },
        {
        question: "What is the purpose of the 'z-index' property in CSS?",
        a: "It allows you to control the order of stacking for elements with position: absolute or position: relative",
        b: "It allows you to control the opacity of an element",
        c: "It allows you to control the font size of an element",
        d: "None of the above",
        correct: "a",
        },
        {
        question: "Which of the following values of the 'display' property in CSS allows you to create a grid layout?",
        a: "flex",
        b: "inline-flex",
        c: "grid",
        d: "inline-grid",
        correct: "c",
        },
        {
        question: "Which of the following values of the 'background-attachment' property in CSS allows you to fix an image in place so that it does not move when the user scrolls the page?",
        a: "scroll",
        b: "fixed",
        c: "local",
        d: "initial",
        correct: "b",
        },
        {
        question: "Which of the following CSS properties allows you to create text that flows around an image?",
        a: "text-align",
        b: "text-indent",
        c: "text-overflow",
        d: "float",
        correct: "d",
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
