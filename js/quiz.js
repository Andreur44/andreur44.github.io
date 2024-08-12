// Asumiendo que ya tienes las preguntas y respuestas definidas en un array
const questions = [
    {
        question: "¿Pregunta 1?",
        answers: ["Respuesta A", "Respuesta B", "Respuesta C"],
        correct: 0
    },
    {
        question: "¿Pregunta 2?",
        answers: ["Respuesta A", "Respuesta B", "Respuesta C"],
        correct: 2
    },
    {
        question: "¿Pregunta 3?",
        answers: ["Respuesta A", "Respuesta B", "Respuesta C"],
        correct: 1
    },
    // Añadir más preguntas aquí...
];

let currentQuestionIndex = 0;
let shuffledQuestions = [];

// Elementos del DOM
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const modal = document.querySelector('.modal');
const modalContent = modal.querySelector('.modal-content p');
const closeModalButton = document.getElementById('close-modal-btn');

// Función para mezclar preguntas
function shuffleQuestions() {
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}

// Mostrar la siguiente pregunta
function showNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Mostrar una pregunta específica
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(index, question.correct));
        answerButtonsElement.appendChild(button);
    });
}

// Resetear el estado para la siguiente pregunta
function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Seleccionar respuesta
function selectAnswer(selectedIndex, correctIndex) {
    if (selectedIndex === correctIndex) {
        // Mostrar el modal de respuesta correcta
        showModal('¡Correcto! Palabra desbloqueada.');
    } else {
        // Mostrar el modal de respuesta incorrecta y recargar la página después de unos segundos
        showModal('Respuesta incorrecta. Recargando...');
        setTimeout(() => {
            window.location.reload();
        }, 2000); // 2 segundos para que el usuario vea el mensaje antes de recargar
    }
}

// Función para mostrar el modal con un mensaje específico
function showModal(message) {
    modalContent.innerText = message;
    modal.classList.add('show');
}

// Función para ocultar el modal y mostrar la siguiente pregunta
function closeModal() {
    modal.classList.remove('show');
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        showNextQuestion(); // Mostrar la siguiente pregunta
    } else {
        // Redirigir a la página de finalización si ya no hay más preguntas
        window.location.href = "final.html";
    }
}

// Eventos
closeModalButton.addEventListener('click', closeModal);
nextButton.addEventListener('click', showNextQuestion);

// Iniciar el quiz
shuffleQuestions();
showNextQuestion();
