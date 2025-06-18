// Cookie Clicker de Batata: venda batatas para Kurger Bing e Do Mcnalds

// Estado do jogo
let batatas = 0;
let precoKurger = 10;
let precoMcNalds = 15;
let vendasKurger = 0;
let vendasMcNalds = 0;
let venceu = false; // novo estado para vitória

// Funções principais
function clicarNaBatata() {
    if (venceu) return;
    batatas += 1;
    atualizar();
}

// Código para a venda do Kunger Bing
function venderParaKurger() {
    if (venceu) return;
    if (batatas >= precoKurger) {
        batatas -= precoKurger;
        vendasKurger += 1;
        precoKurger = Math.floor(precoKurger * 1.3);// aumenta o preço
        atualizar();
    } else {
        alert("Você não tem batatas suficientes para vender para Kurger Bing!");
    }
}

// Código para venda do Do Mcnalds
function venderParaMcNalds() {
    if (venceu) return;
    if (batatas >= precoMcNalds) {
        batatas -= precoMcNalds;
        vendasMcNalds += 1;
        precoMcNalds = Math.floor(precoMcNalds * 1.3); // aumenta o preço
        atualizar();
    } else {
        alert("Você não tem batatas suficientes para vender para Do Mcnalds!");
    }
}

// Checa condição de vitória
function checarVitoria() {
    if (!venceu &&
        vendasKurger >= 1 &&
        vendasMcNalds >= 1 &&
        batatas > 10
    ) {
        venceu = true;
        document.getElementById("mensagemVitoria").innerHTML = 
            `<div style="background:lightgreen;padding:20px;margin:20px;font-size:24px;border-radius:10px;">
                🎉 Parabéns! Você venceu suas vendas em seu 1° dia! 🎉
            </div>`;
        // Opcional: Desabilitar botões após vitória
        document.getElementById("btnBatata").disabled = true;
        document.getElementById("btnKurger").disabled = true;
        document.getElementById("btnMcNalds").disabled = true;
    }
}

// Atualiza a interface
function atualizar() {
    document.getElementById("batatas").innerText = batatas;
    document.getElementById("precoKurger").innerText = precoKurger;
    document.getElementById("precoMcNalds").innerText = precoMcNalds;
    document.getElementById("vendasKurger").innerText = vendasKurger;
    document.getElementById("vendasMcNalds").innerText = vendasMcNalds;
    checarVitoria();
}

atualizar();