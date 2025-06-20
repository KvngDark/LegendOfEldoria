// Função de autenticação com dados do localStorage
function autenticarUsuario(event){
  event.preventDefault();

  const usuarioInput = document.getElementById("usuario").value.trim();
  const senhaInput = document.getElementById("senha").value;
  const erroMsg = document.getElementById("erro-msg");

  // Agora busca na chave correta: "cadastros"
  const usuariosCadastrados = JSON.parse(localStorage.getItem("cadastros")) || [];

  // Busca no campo "login", não "usuario"
  const usuarioEncontrado = usuariosCadastrados.find(
    u => u.login === usuarioInput && u.senha === senhaInput
  );

  if (usuarioEncontrado) {
    erroMsg.style.color = "green";
    erroMsg.textContent = "Login bem-sucedido! Redirecionando...";
    localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    erroMsg.style.color = "red";
    erroMsg.textContent = "Usuário ou senha inválidos.";
  }
}

// Função de cadastro com localStorage (caso use no mesmo arquivo)
function cadastrarUsuario(event) {
  event.preventDefault();

  const novoUsuario = document.getElementById("novo-usuario").value.trim();
  const novaSenha = document.getElementById("nova-senha").value;
  const cadastroMsg = document.getElementById("cadastro-msg");

  if (!novoUsuario || !novaSenha) {
    cadastroMsg.textContent = "Preencha todos os campos!";
    cadastroMsg.style.color = "red";
    return false;
  }

  const usuariosCadastrados = JSON.parse(localStorage.getItem("usuarios")) || [];

  const jaExiste = usuariosCadastrados.some(u => u.usuario === novoUsuario);

  if (jaExiste) {
    cadastroMsg.textContent = "Esse nome de usuário já existe!";
    cadastroMsg.style.color = "orange";
    return false;
  }


  usuariosCadastrados.push({ usuario: novoUsuario, senha: novaSenha });
  localStorage.setItem("usuarios", JSON.stringify(usuariosCadastrados));

  cadastroMsg.style.color = "green";
  cadastroMsg.textContent = "Usuário cadastrado com sucesso! Redirecionando...";

  setTimeout(() => {
    window.location.href = "Tela_Login.html";
  }, 2000);

  return true;
}

function logoutUsuario() {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "Tela_Login.html";
}
