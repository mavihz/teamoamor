// Botão da música
document.getElementById("musicaBtn").addEventListener("click", function() {
    window.open("https://open.spotify.com/track/0GNI8Qy9jJz1kVZ9CU6Kkq?si=3d72e2e3a9a44f89", "_blank");
});

// Função para calcular tempo juntos em tempo real
function atualizarTempo() {
    const dataInicio = new Date("2025-06-14T00:00:00");
    const agora = new Date();
    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / (1000 * 60)) % 60);
    const segundos = Math.floor((diff / 1000) % 60);
    const milissegundos = Math.floor(diff % 1000);

    document.getElementById("diasJuntos").innerHTML =
        `${dias} dias, ${horas}h ${minutos}min ${segundos}s ${milissegundos}ms`;
}

setInterval(atualizarTempo, 50);
