window.onload = () => {
    const container = document.getElementById("lista-produtos");
    const produtos = [
        {
            nome: "Blusa Rosa",
            imagem: "assets/img/blua.jpg"
        },
        {
            nome: "Vestido Floral",
            imagem: "assets/img/vestido.jpg"
        },
        {
            nome: "Calça Jeans",
            imagem: "assets/img/calca.jpg"
        }
    ];

    produtos.forEach(prod => {
        const div = document.createElement("div");
        div.className = "produto";
        div.innerHTML = `
            <img src="${prod.imagem}" alt="${prod.nome}">
            <h3>${prod.nome}</h3>
        `;
        container.appendChild(div);
    });
};

function abrirWhatsApp() {
    const numero = "5511999999999"; // Coloque o número real aqui, exemplo: 5511987654321
    const mensagem = encodeURIComponent("Olá, gostaria de fazer um pedido!");
    window.open(`https://wa.me/${numero}?text=${mensagem}`, "_blank");
}
