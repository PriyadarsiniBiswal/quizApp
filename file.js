const quiz = document.getElementById("quiz")
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


const quizData = [
    {
        question: 'What is most used programming Language in 2021',
        a: 'Java',
        b: 'React JS',
        c: 'Angular',
        d: 'Vue',
        correct: 'b',
    }, {
        question: 'What does HTML stands for?',
        a: 'Hypertext markup Language',
        b: 'Hyper Text Method ',
        c: 'Hidro Technique Materal Test',
        d: 'Cascading Style Sheets',
        correct: 'a',
    }, {
        question: 'What Year was JavaScript launched',
        a: '1996',
        b: '1985',
        c: '1995',
        d: '2010',
        correct: 'c',
    }, {
        question: 'Java is a programming Language',
        a: 'Platform independent language',
        b:'It is Object-based Language',
        c: 'Java-Virtual-machine',
        d: 'It is Object-Oriented',
        correct: 'd'
    }, {
        question: 'REACT JS was developed by whom',
        a: 'Andrwe Heneri',
        b: 'Jordan Walke',
        c: 'James Gosling',
        d: 'Sundar Pichai',
        correct: 'b'
    }

];

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener('click', () => {
    //Check to see the answer
    const answer = getSelected();
    

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
           quiz.innerHTML = `
                     <h2> You answered corectly at ${score}/ ${quizData.length} Questions </h2>
                     <button onclick="location.reload()"> Reload </button>
                    `
        }
    }

});








