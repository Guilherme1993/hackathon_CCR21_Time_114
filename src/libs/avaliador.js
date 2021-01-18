const candidato = JSON.parse(localStorage.getItem('usuarioLogado'));
let elemNome = document.querySelector('.nome-usuario');
let elemTipo = document.querySelector('.tipo-usuario');

const elemCandidatos = document.getElementById('candidatos');
const elemData = document.getElementById('data');
const elemHora = document.getElementById('hora');

const elemAgendamento = document.querySelector('.agendamentos')

const arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'));
const arrayAgendamentos = JSON.parse(localStorage.getItem('agendamentos'))
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

elemAgendamento.innerHTML = arrayAgendamentos.map(({participante, emailParticipante, data, hora}) => `
  <div class="card-agendamento">
  <div class="perfil-candidato">
    <img src="../src/assets/images/perfil-icon-profissional.svg">

    <div class="info-candidato">
      <h1 class="nome-candidato">${participante}</h1>
      <span class="email-candidato">${emailParticipante}</span>
      
      <div class="data-agendamento">
        <i class="far fa-calendar-minus"></i>
        <h3 class="data">${formatarData(data)}</h3>
        <span class="hora">${hora.replace(':', 'h')}min</span>
      </div>
    </div>
  </div>
`).join('');

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
        usuario[0].emailAvaliador = usuarioLogado.email;
        usuario[0].nomeAvaliador = usuarioLogado.nome;

        let index;

        for (let i = 0; i < arrayUsuarios.length; i++){
            if (arrayUsuarios[i].email == usuario[0].email){
                index = i;
            }
        }

        arrayUsuarios.splice(index, 1);
        arrayUsuarios.push(usuario[0]);
        localStorage.setItem("usuarios", JSON.stringify(arrayUsuarios));

        const arrayAgenda = localStorage.getItem('agendamentos');

        let agendamento = {
            avaliador: usuarioLogado.email,
            data: elemData.value,
            hora: elemHora.value,
            nomeParticipante: usuario[0].nome,
            emailParticipante: usuario[0].email
        }

        let arr = [];

        if (arrayAgenda != null && arrayAgenda.length > 0) {
            arr = JSON.parse(localStorage.getItem("agendamentos"))
        }
        arr.push(agendamento);
        localStorage.setItem("agendamentos", JSON.stringify(arr));

        alert('Agendamento realizado com sucesso!')
    }
}

function formatarData(data){
  let arrData = data.split("-")
  let ano = arrData[0].substring(2,5);
  let dataFormatada = `${arrData[2]}/${arrData[1]}/${ano}`;
  return dataFormatada;
}