/* ==========================================================================
   CONTRATÁTICA - JAVASCRIPT DO JOGO
   ========================================================================== */

// Aguarda o carregamento completo do DOM (tabuleiro de jogo pronto)
document.addEventListener("DOMContentLoaded", () => {
    inicializarEfeitosPainel();
});

/**
 * Função para rolagem suave (Tática de posicionamento em campo)
 * @param {string} idSecao - O ID da seção para onde a tela deve correr
 */
function rolarPara(idSecao) {
    const elemento = document.getElementById(idSecao);
    if (elemento) {
        // Faz a rolagem macia até o objetivo, simulando um passe preciso
        elemento.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Função de comemoração (O grito de Gol da Sustentabilidade)
 */
function aplaudir() {
    // Cria uma mensagem de impacto estilo painel do estádio
    alert("⚽ GOL DA SUSTENTABILIDADE!\n\n" +
          "O Agronegócio e a Agricultura Familiar jogam juntos! " +
          "Com tecnologia e respeito à terra, o futuro sustentável ergue a taça! 🏆");
}

/**
 * Efeitos visuais dinâmicos nos cards (Estratégia de marcação pressão)
 */
function inicializarEfeitosPainel() {
    const cards = document.querySelectorAll('.card-time');

    cards.forEach(card => {
        // Quando o "jogador" passa o mouse, destaca a borda (foco tático)
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = '#111111'; // Cor do Corinthians
            card.style.transition = 'all 0.3s ease';
        });

        // Quando o mouse sai, volta ao padrão do campeonato
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = '#e0e0e0';
        });
    });
}
