const questions = [
    {
        question: "Qual linguagem é usada para estruturar páginas web?",
        answers: ["CSS", "HTML", "Python", "Java"],
        correct: 1
    },
    {
        question: "JavaScript é usado principalmente para:",
        answers: ["Estilizar páginas", "Criar lógica e interatividade", "Criar banco de dados", "Hospedar sites"],
        correct: 1
    },
    {
        question: "Qual dessas NÃO é uma linguagem de programação?",
        answers: ["C++", "HTML", "Java", "Python"],
        correct: 1
    },
    {
        question: "CSS serve para:",
        answers: ["Programar robôs", "Criar APIs", "Estilizar páginas", "Compilar código"],
        correct: 2
    },
    {
        question: "Qual jogo famoso usa a Lua como linguagem de programação principal?",
        answers: ["Minecraft", "Free Fire", "Roblox", "Terraria"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question");
const answersBox = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const quizBox = document.getElementById("quiz-box");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;

    answersBox.innerHTML = "";
    q.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = answer;
        btn.onclick = () => selectAnswer(index);
        answersBox.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

function selectAnswer(index) {
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === q.correct) {
            btn.classList.add("correct");
        } else if (i === index) {
            btn.classList.add("wrong");
        }
    });

    if (index === q.correct) score++;

    nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
};

function showResult() {
    quizBox.classList.add("hidden");
    scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
    resultBox.classList.remove("hidden");
}

restartBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    resultBox.classList.add("hidden");
    quizBox.classList.remove("hidden");
    loadQuestion();
};

loadQuestion();

