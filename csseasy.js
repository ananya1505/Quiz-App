const quizData = [
    {
        question: "Which of the following is not a valid CSS property?",
        a: "font-size",
        b: "background-color",
        c: "margin-top",
        d: "image-size",
        correct: "d"
    },
    {
        question: "What is the correct syntax to set the font-size of a paragraph to 16 pixels?",
        a: "p {font-size: 16px;}",
        b: "p {size: 16px;}",
        c: "font-size: p 16px;",
        d: "font-size: 16px;",
        correct: "a"
    },
    {
        question: "Which CSS property is used to change the color of text?",
        a: "font-weight",
        b: "font-color",
        c: "text-color",
        d: "color",
        correct: "d"
    },
    {
        question: "Which CSS property is used to set the background color of an element?",
        a: "background-image",
        b: "background-color",
        c: "background-style",
        d: "background",
        correct: "b"
    },
    {
        question: "What is the correct CSS syntax to select all paragraphs on a page?",
        a: "p { }",
        b: "all {p: }",
        c: "all.p { }",
        d: ".p { }",
        correct: "a"
    },
    {
        question: "Which CSS property is used to set the text alignment of an element?",
        a: "text-align",
        b: "font-align",
        c: "text-style",
        d: "align-text",
        correct: "a"
    },
    {
        question: "Which CSS property is used to create space between elements?",
        a: "margin",
        b: "padding",
        c: "border",
        d: "space",
        correct: "a"
    },
    {
        question: "Which CSS property is used to control the size of an image?",
        a: "size",
        b: "image-width",
        c: "width",
        d: "image-size",
        correct: "c"
    },
    {
        question: "Which CSS property is used to set the font family of an element?",
        a: "font-family",
        b: "text-font",
        c: "font-style",
        d: "font-name",
        correct: "a"
    },
    {
        question: "Which CSS property is used to add a border to an element?",
        a: "border-style",
        b: "border-color",
        c: "border-width",
        d: "All of the above",
        correct: "d"
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
