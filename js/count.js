// Fecha objetivo: 15 de agosto a las 00:00 hora europea
const targetDate = new Date("August 15, 2024 00:00:00").getTime();

const countdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Mostrar el resultado
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Redirigir cuando el tiempo llegue a cero
    if (timeLeft < 0) {
        clearInterval(x);
        window.location.href = "quiz.html"; // Redirige a la página del quiz
    }
};

// Actualizar cada segundo
const x = setInterval(countdown, 1000);
