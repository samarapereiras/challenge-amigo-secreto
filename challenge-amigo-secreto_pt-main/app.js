let amigos = [];

function adicionarAmigo() {
    const nome = document.getElementById('amigo').value.trim();
    
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }
    
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    amigos.push(nome);
    exibirAmigos();
    document.getElementById('amigo').value = '';
}

function exibirAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; 

    for (let i = 0; i < amigos.length; i++) {
        const item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Lógica de sorteio que remove o nome após ser sorteado
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Todos os amigos já foram sorteados! Reinicie o jogo.");
        return;
    }
    
    // O jogo deve ter no mínimo 2 participantes para sortear
    if (amigos.length < 2) {
        alert("Adicione pelo menos mais um nome para continuar o sorteio.");
        return;
    }
    
    // Sorteia um nome aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    
    // Exibe o resultado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado foi: <strong>${amigoSorteado}</strong>`;
    
    // *** A CORREÇÃO ESTÁ AQUI ***
    // Remove o amigo que acabou de ser sorteado da lista, usando o método splice()
    amigos.splice(indiceSorteado, 1);
    
    // Atualiza a lista na tela para que o usuário veja que o nome foi removido
    exibirAmigos();
}

// Função para reiniciar o jogo (essencial com a nova lógica)
function reiniciar() {
    amigos = [];
    exibirAmigos();
    document.getElementById('resultado').innerHTML = '';
}