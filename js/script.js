const quizData = [{
    question: '1.What dose CSS stand for?',
    a: "Hypertext Markup language",
    b: "Cascading Style Sheets",
    c: "Java Object Notation",
    d: "Non of th avove",
    correct: "b",
}, {
    question: "2.What is the most used programming  language in 2021?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
}, {
    question: "3.Which programming language does PHP resemble?",
    a: "Perl",
    b: "C++",
    c: "Java",
    d: "Python",
    correct: "a",
}, {
    question: "4.What is the actually used PHP version?",
    a: "7.4",
    b: "7.1",
    c: "8.0",
    d: "Non of th avove",
    correct: "b",
},{
    question: "5.What dose HTML stand for?",
    a: "Hypertext Markup language",
    b: "Cascading Style Sheets",
    c: "Java Object Notation",
    d: "Non of th avove",
    correct: "a",
},{
    question: "6.In PHP, objects are they passed by value or by reference?",
    a: "reference",
    b: "value",
    c: "Java Object Notation",
    d: "Non of th avove",
    correct: "b",
},{
    question: "7.What are the popular frameworks in PHP?",
    a: "CakePHP",
    b: "CodeIgniter",
    c: "Symfony",
    d: "Laravel",
    correct: "b",
}, 
{
    question: "8.What is the default port for MySQL Server?",
    a: "3306",
    b: "4840",
    c: "3025",
    d: "3308",
    correct: "a",
},
{
    question: "9.How to get current MySQL version?",
    a: "SELECT Info ();",
    b: "SELECT READ ();",
    c: "SELECT VERSION ();",
    d: "None",
    correct: "c",
},{
    question: "10.Which year JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "None of the above",
    correct: "b",
}, ];
const answerE1s = document.querySelectorAll(".answer");
const quize = document.querySelectorAll("quiz");

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBt = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;
loadQuize();

function loadQuize() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    // currentQuestion++;
};

function getSelected() {
    let answer = undefined;
    answerE1s.forEach((answerE1) => {
        if (answerE1.checked) {
            answer = answerE1.id;
        }
    });
    return answer;
}

function deselectAnswer() {
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    });
}
submitBt.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuize();

        } else {
            quiz.innerHTML = `<h2> <center>You answered correctly at ${score}
            /${quizData.length} questions. <center></h2> <button onclick="location.reload();">Reload</button> `;
        }
    }
});