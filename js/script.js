const nome_Storage = document.getElementById('nome_Storage');

// Salvando o nome do usuário no localStorage
function salvarNome() {
    localStorage.info = nome_usuario.value;
}

nome_Storage.innerHTML += `Bem vindo, ${localStorage.info}!`;
