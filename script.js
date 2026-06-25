function revelarMensagem() {
    document.getElementById("mensagem").innerText = "hola, se conseguiu ai o, parabéns muchacho!"
}

function mostrarNome() {
    let nome = document.getElementById("nomeUsuario").value;
    
    document.getElementById("resultadoNome").innerText = "Bem-vindo ao planeta clandestino, " + nome + "!";
}