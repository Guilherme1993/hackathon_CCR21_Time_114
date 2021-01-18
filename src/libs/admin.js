const candidato = JSON.parse(localStorage.getItem('usuarioLogado'));
const arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'));
let elemNome = document.querySelector('.nome-usuario');
let elemTipo = document.querySelector('.tipo-usuario');

if (candidato) {
    let nome = candidato.nome.split(" ");
    elemNome.innerHTML = nome[0];
} else {
    elemNome.innerHTML = "Usuário"
}

if (candidato.tipo == 0) {
    elemTipo.innerHTML = 'Candidato';
} else if (candidato.tipo == 1) {
    elemTipo.innerHTML = 'Avaliador';
} else {
    elemTipo.innerHTML = 'Admin';
}

const elemUsuarios = document.querySelector('.usuarios')


const usuarios = arrayUsuarios.map(usuario => {
  if (usuario.tipo == 0) usuario.tipo = 'Candidato'
  else if (usuario.tipo == 1) usuario.tipo = 'Avaliador'
  else usuario.tipo = 'Admin'

  return usuario
})

console.log(usuarios)

elemUsuarios.innerHTML = usuarios.map(({nome, email, tipo, acesso}) => `
  <div class="card-usuario">
    <div class="perfil-usuario">
      <img src="../src/assets/images/perfil-icon-admin.svg">

      <div class="info-usuario">
        <h1 class="nome-usuario">${nome}</h1>
        <span class="email-usuario">${email}</span>
        
        <div class="status-usuario">
          <h3 class="tipo">${tipo}</h3>
          <div class="status">
            <input type="checkbox" id="${nome}-habilitado" checked="${acesso}">
            <label for="${nome}-habilitado">Habilitado</label>
          </div>
        </div>
      </div>
    </div>
  </div>
`).join('');