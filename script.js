document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.number');
    const speed = 100; // Quanto menor, mais rápido o contador se move

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;

                // Cálculo do incremento
                const inc = target / speed;

                if (count < target) {
                    // Adiciona o incremento e arredonda para cima
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Detecção de rolagem para ativar o contador apenas quando visível na tela
    let animated = false;
    window.addEventListener('scroll', () => {
        const section = document.querySelector('.counters');
        if (section) {
            const position = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;

            if (position < screenPosition && !animated) {
                startCounters();
                animated = true; // Impede que a animação rode repetidamente
            }
        }
    });
});
