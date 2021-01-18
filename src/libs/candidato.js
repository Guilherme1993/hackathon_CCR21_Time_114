const candidato = JSON.parse(localStorage.getItem('usuarioLogado'));
let elemNome = document.querySelector('.nome-usuario');
let elemTipo = document.querySelector('.tipo-usuario');
let elemData = document.querySelector('.data');
let elemHora = document.querySelector('.hora');
let elemAvaliador = document.querySelector('.avaliador');
let elemMailAvaliador = document.querySelector('.email')

console.log(candidato)
let nome = candidato.nome.split(" ");

elemNome.innerHTML = nome[0];

if (candidato.tipo == 0) {
    elemTipo.innerHTML = 'Candidato';
} else if (candidato.tipo == 1) {
    elemTipo.innerHTML = 'Avaliador';
} else {
    elemTipo.innerHTML = 'Admin';
}

if (candidato.mentoria == 1) {
    elemData.innerHTML = formatarData(candidato.dataMentoria);
    elemHora.innerHTML = candidato.horaMentoria;
    elemAvaliador.innerHTML = candidato.nomeAvaliador;
    elemMailAvaliador.innerHTML = candidato.emailAvaliador;
}

function formatarData(data){
  let arrData = data.split("-")
  let ano = arrData[0].substring(2,5);
  let dataFormatada = `${arrData[2]}/${arrData[1]}/${ano}`;
  return dataFormatada;
}