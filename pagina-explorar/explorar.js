document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel-albuns');

    let isDown = false;
    let startX;
    let scrollLeft;

    // Quando clica no carrossel
    carrossel.addEventListener('mousedown', (e) => {
        isDown = true;
        carrossel.classList.add('active');
        startX = e.pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    // Quando o ponteiro sai da área do carrossel
    carrossel.addEventListener('mouseleave', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    // Quando solta o clique do mouse
    carrossel.addEventListener('mouseup', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    // Quando move o mouse segurando o clique
    carrossel.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Se não estiver clicado, não faz nada
        e.preventDefault();

        const x = e.pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 2; // O multiplicador '2' ajusta a velocidade da rolagem
        carrossel.scrollLeft = scrollLeft - walk;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel-artista');

    let isDown = false;
    let isDragging = false; // Identifica se o usuário arrastou o mouse
    let startX;
    let scrollLeft;

    // Quando clica no carrossel
    carrossel.addEventListener('mousedown', (e) => {
        isDown = true;
        isDragging = false; // Reseta no início do clique
        carrossel.classList.add('active');
        startX = e.pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    // Quando o ponteiro sai da área do carrossel
    carrossel.addEventListener('mouseleave', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    // Quando solta o clique do mouse
    carrossel.addEventListener('mouseup', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    // Quando move o mouse segurando o clique
    carrossel.addEventListener('mousemove', (e) => {
        if (!isDown) return;

        const x = e.pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 2;

        // Se moveu mais de 5 pixels, considera que foi um arraste e não um clique
        if (Math.abs(x - startX) > 5) {
            isDragging = true;
        }

        e.preventDefault();
        carrossel.scrollLeft = scrollLeft - walk;
    });

    // Lógica para clicar no card do artista
    const cardsArtista = carrossel.querySelectorAll('.artista');

    cardsArtista.forEach(artista => {
        artista.addEventListener('click', () => {
            // Se o usuário estava arrastando a tela, ignora a ação do clique
            if (isDragging) return;

            const nomeArtista = artista.querySelector('h3').textContent;
            console.log(`Abrindo página do artista: ${nomeArtista}`);

            // Coloque aqui o redirecionamento para a página do artista, ex:
            // window.location.href = `artista.html?nome=${encodeURIComponent(nomeArtista)}`;
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel-2000s');

    let isDown = false;
    let startX;
    let scrollLeft;

    // Quando clica no carrossel
    carrossel.addEventListener('mousedown', (e) => {
        isDown = true;
        carrossel.classList.add('active');
        startX = e.pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    // Quando o ponteiro sai da área do carrossel
    carrossel.addEventListener('mouseleave', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    // Quando solta o clique do mouse
    carrossel.addEventListener('mouseup', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    // Quando move o mouse segurando o clique
    carrossel.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Se não estiver clicado, não faz nada
        e.preventDefault();

        const x = e.pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 2; // O multiplicador '2' ajusta a velocidade da rolagem
        carrossel.scrollLeft = scrollLeft - walk;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel-alta');

    let isDown = false;
    let startX;
    let scrollLeft;

    // Quando clica no carrossel
    carrossel.addEventListener('mousedown', (e) => {
        isDown = true;
        carrossel.classList.add('active');
        startX = e.pageX - carrossel.offsetLeft;
        scrollLeft = carrossel.scrollLeft;
    });

    // Quando o ponteiro sai da área do carrossel
    carrossel.addEventListener('mouseleave', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    // Quando solta o clique do mouse
    carrossel.addEventListener('mouseup', () => {
        isDown = false;
        carrossel.classList.remove('active');
    });

    // Quando move o mouse segurando o clique
    carrossel.addEventListener('mousemove', (e) => {
        if (!isDown) return; // Se não estiver clicado, não faz nada
        e.preventDefault();

        const x = e.pageX - carrossel.offsetLeft;
        const walk = (x - startX) * 2; // O multiplicador '2' ajusta a velocidade da rolagem
        carrossel.scrollLeft = scrollLeft - walk;
    });
});


document.addEventListener('DOMContentLoaded', () => {
    // Tratamento para clique nos botões de Play
    const botoesPlay = document.querySelectorAll('.btn-play');

    botoesPlay.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita conflitos com a rolagem por arraste

            const album = btn.closest('.album');
            const titulo = album.querySelector('h3').textContent;
            const artista = album.querySelector('h4').textContent;

            console.log(`Tocando agora: ${titulo} - ${artista}`);
            // Insira aqui a sua lógica de tocador de áudio
        });
    });
});
