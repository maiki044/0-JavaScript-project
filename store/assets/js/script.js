window.onload = () => {
  const container = document.getElementById("lista-produtos");
  const produtos = [
    {
      nome: "Blusa Rosa",
      imagem: "assets/img/blua.jpg",
      preco: "R$ 49,90"
    },
    {
      nome: "Vestido Floral",
      imagem: "assets/img/vestido.jpg",
      preco: "R$ 79,90"
    },
    {
      nome: "Calça Jeans",
      imagem: "assets/img/calca.jpg",
      preco: "R$ 89,90"
    }
  ];

  produtos.forEach(prod => {
    const div = document.createElement("div");
    div.className = "produto";
    div.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      <p>${prod.preco}</p>
    `;
    container.appendChild(div);
  });

  // Anima os produtos
  setTimeout(() => {
    document.querySelectorAll('.produto').forEach(el => {
      el.classList.add('show');
    });
  }, 100);
};

// Botão WhatsApp
function abrirWhatsApp() {
  const numero = "5511999999999"; // Coloque seu número real aqui
  const mensagem = encodeURIComponent("Olá, gostaria de fazer um pedido!");
  window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}

// Filtro de busca
document.addEventListener("DOMContentLoaded", () => {
  const filtro = document.getElementById("filtro");
  filtro.addEventListener("input", function () {
    const busca = this.value.toLowerCase();
    const cards = document.querySelectorAll(".produto");

    cards.forEach(card => {
      const nome = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = nome.includes(busca) ? "block" : "none";
    });
  });

  // Modo escuro
  const toggle = document.getElementById("toggle-dark");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Mensagem de boas-vindas
  const mensagens = [
    "Bem-vinda à nossa loja!",
    "Aproveite nossas ofertas!",
    "Fique à vontade, cliente especial!"
  ];
  const mensagem = mensagens[Math.floor(Math.random() * mensagens.length)];
  alert(mensagem);
});
