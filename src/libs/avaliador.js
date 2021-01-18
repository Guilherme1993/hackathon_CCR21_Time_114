const candidato = JSON.parse(localStorage.getItem('usuarioLogado'));
let elemNome = document.querySelector('.nome-usuario');
let elemTipo = document.querySelector('.tipo-usuario');

const elemCandidatos = document.getElementById('candidatos');
const elemData = document.getElementById('data');
const elemHora = document.getElementById('hora');

const arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'));
const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

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

for (let candidato of arrayUsuarios) {

    if (candidato.tipo == 0 && candidato.mentoria == 0 && candidato.acesso) {
        let opt = document.createElement("option");

        opt.textContent = candidato.nome
        opt.value = candidato.nome;
        elemCandidatos.appendChild(opt);
    }
}

function agendar() {

    if (elemData.value.trim() == '') {
        alert('Selecione uma data!');
    } else if (elemHora.value.trim() == '') {
        alert('Selecione a hora!');
    } else {
        const usuario = arrayUsuarios.filter(us => {
            return us.nome === elemCandidatos.value;
          })

          usuario[0].dataMentoria = elemData.value;
          usuario[0].horaMentoria = elemHora.value;
          usuario[0].mentoria = 1;
          usuario[0].avaliador = usuarioLogado.email;
          console.log(usuario[0])
    }
}