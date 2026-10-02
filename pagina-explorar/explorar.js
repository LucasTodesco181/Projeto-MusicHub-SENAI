const slideCarrossel = document.querySelector('.tipos-albuns');
let index = 0;
const totalSlides = document.querySelectorAll('.slide').length;

setInterval(() => {
    index = (index + 1) % totalSlides;
    slideCarrossel.style.transform = `translateX(-${index * 100}%)`;
}, 3000);


// Explicação por linhas

// 1. Pega o bloco do slide-carrossel, div mãe de todas as imagens
// 2. Index = 0 Variavel para validar qual slide está ativo, começando por zero que é a posição da primeira imagem
// 3. Conta qual o tamanho da lista de imagens, totalizando o total de imagens que existe

// 5. Cria um temporizador que muda de slide a cada 3 segundos (3000 ms).
// 6. Aumenta o index e o operador % (módulo) serve para voltar para o início quando chegar no final.
    // Ex: se temos 3 slides e o index virar 3, então 3 % 3 = 0 -> volta pro primeiro slide.
 
// 7. Aplica uma transformação CSS no container para deslizar ele para a esquerda.
    //Se index = 1, ele move -100% -> vai para o segundo slide.
    //Se index = 2, move -200%, e assim por diante.

// 8. Temporizador definido em 3 segundos.