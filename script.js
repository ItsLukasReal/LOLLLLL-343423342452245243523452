let score = 0;
let currentQuestion = 0;
const totalQuestions = 5;

const questions = [
    {
        question: function() {
            const a = Math.floor(Math.random() * 20) + 1;
            const b = Math.floor(Math.random() * 20) + 1;
            this.answer = a + b;
            return `Wieviel ist ${a} + ${b}?`;
        }
    },
    {
        question: function() {
            const a = Math.floor(Math.random() * 20) + 1;
            const b = Math.floor(Math.random() * 20) + 1;
            this.answer = a - b;
            return `Wieviel ist ${a} - ${b}?`;
        }
    },
    {
        question: function() {
            const a = Math.floor(Math.random() * 12) + 1;
            const b = Math.floor(Math.random() * 12) + 1;
            this.answer = a * b;
            return `Wieviel ist ${a} * ${b}?`;
        }
    },
    {
        question: function() {
            const a = Math.floor(Math.random() * 100) + 1;
            const b = Math.floor(Math.random() * 10) + 1;
            this.answer = Math.floor(a / b);
            return `Wieviel ist ${a} / ${b}? (Ganze Zahl)`;
        }
    }
];

function startQuiz() {
    score = 0;
    currentQuestion = 0;
    document.getElementById('result').textContent = '';
    nextQuestion();
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        const q = questions[Math.floor(Math.random() * questions.length)];
        const questionText = q.question();
        const quizDiv = document.getElementById('quiz');
        quizDiv.innerHTML = `
            <div class="question">
                ${questionText}
            </div>
            <input type="number" id="answer" />
            <button onclick="checkAnswer(${q.answer})">Antwort prüfen</button>
        `;
    } else {
        showResult();
    }
}

function checkAnswer(correctAnswer) {
    const userAnswer = parseInt(document.getElementById('answer').value, 10);
    if (userAnswer === correctAnswer) {
        alert('Richtig!');
        score++;
    } else {
        alert('Falsch!');
    }
    currentQuestion++;
    nextQuestion();
}

function showResult() {
    const resultText = `Du hast ${score} von ${totalQuestions} Fragen richtig beantwortet.`;
    document.getElementById('result').textContent = resultText;
    document.getElementById('quiz').innerHTML = '';
}
