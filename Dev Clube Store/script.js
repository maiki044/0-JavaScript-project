// Seleciona o botão "anterior"
const prevButton = document.getElementById("prev");

// Seleciona o botão "próximo"
const nextButton = document.getElementById("next");

// Seleciona todos os elementos com a classe .item (itens do carrossel, por exemplo)
const items = document.querySelectorAll(".item");

// Seleciona todos os pontinhos de navegação (normalmente usados abaixo do carrossel)
const dots = document.querySelectorAll(".dot");

// Seleciona o indicador numérico (ex: "1 de 5", se existir)
const numberIndicator = document.querySelector(".numbers");

// Seleciona a lista principal que contém os itens (talvez um <ul> ou <div class="list">)
const list = document.querySelector(".list");

// Variável que indica qual item está ativo (começa do 0)
let active = 0;

// Total de itens no carrossel
const total = items.length;

// Um temporizador (talvez usado depois para autoplay)
let timer;

// Função que atualiza o item visível com base na direção
function update(direction) {
    // Remove a classe "active" do item e do ponto (dot) atualmente ativos
    document.querySelector(".item.active").classList.remove("active");
    document.querySelector(".dot.active").classList.remove("active");

    // Verifica a direção do movimento
    if (direction > 0) {
        active = active + 1;
        if (active >= total) {
            // Se for direção positiva (clicou em "próximo"), reseta para o primeiro item
            active = 0;
        }
    } else if (direction < 0) {
        // ➖ Se for direção negativa (clicou em "anterior"), decrementa
        active = (active - 1 + total) % total;
    }

    // Adiciona novamente a classe "active" ao novo item e dot
    items[active].classList.add('active');
    dots[active].classList.add('active');

    // Se existir número, atualiza o texto com a posição atual
    numberIndicator.textContent = active +1
}
clearInterval(timer); // Limpa o temporizador anterior, se existir
timer = setInterval(() => {
    update(1); // Atualiza automaticamente para o próximo item a cada intervalo
}, 5000); // Intervalo de 5 segundos (5000 milissegundos)

// Adiciona evento ao botão "anterior"
prevButton.addEventListener("click", () => {
    update(-1); // Vai para o item anterior
});

// Adiciona evento ao botão "próximo"
nextButton.addEventListener("click", () => {
    update(1); // Vai para o próximo item
});
