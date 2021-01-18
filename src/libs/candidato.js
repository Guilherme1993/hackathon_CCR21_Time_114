const candidato = JSON.parse(localStorage.getItem('usuarioLogado'));
let elemNome = document.querySelector('.nome-usuario');
let elemTipo = document.querySelector('.tipo-usuario');

console.log(candidato)
let nome = candidato.nome.split(" ");

elemNome.innerHTML = nome[0];

if (candidato.tipo == 0) {
    elemTipo.innerHTML = 'Candidato';
} else if (candidato.tipo == 1) {
    elemTipo.innerHTML = 'Avaliador';
} else {
    elemTipo.innerHTML = 'Admin';
}a