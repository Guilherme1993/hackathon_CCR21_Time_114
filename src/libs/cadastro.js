const formCadastro = document.querySelector('.cadastro');
const inputNome = formCadastro.querySelector('.nome');
const inputEmail = formCadastro.querySelector('.email');
const inputSenha = formCadastro.querySelector('.senha');
const inputRepeteSenha = formCadastro.querySelector('.repete-senha');
const radioCandidato = document.getElementById('radio-candidato');
const radioProfissional = document.getElementById('radio-profissional');


let arrayUsu = localStorage.getItem('usuarios');

function cadastrarUsuario() {

    try {
        if (validar()) {

            let tipo = 0;

            if (radioProfissional.checked) {
                tipo = 1;
            }

            let candidato = {
                nome: inputNome.value,
                email: inputEmail.value,
                senha: inputSenha.value,
                tipo: tipo,
                mentoria: 0
            }

            let arr = [];

            if (arrayUsu != null && arrayUsu.length > 0) {
                arr = JSON.parse(localStorage.getItem("usuarios"))
            }
            arr.push(candidato);
            localStorage.setItem("usuarios", JSON.stringify(arr));
            alert('Cadastro efetuado com sucesso!')
            return true;
        } else {
            return false;
        }
    } catch (e) {
        console.log(e);
    }
}

let validar = () => {

    let valido = true;

    if (inputNome.value.trim() == '') {
        alert('O nome deve ser informado!');
        inputNome.focus();
        valido = false;
    } else if (inputEmail.value.trim() == '') {
        alert('O e-mail deve ser informado!');
        inputEmail.focus();
        valido = false;
    } else if (inputSenha.value.trim() == '') {
        alert('A senha deve ser informada!');
        inputSenha.focus();
        valido = false;
    } else if (inputRepeteSenha.value.trim() == '') {
        alert('Favor repetir a senha!');
        inputRepeteSenha.focus();
        valido = false;
    } else if (inputSenha.value != inputRepeteSenha.value) {
        alert('A senha deve ser a mesma nos dois campos!');
        inputRepeteSenha.focus();
        valido = false;
    } else if (!radioCandidato.checked && !radioProfissional.checked) {
        alert('Informe se você é um Candidato ou Profissional!')
        valido = false;
    }

    return valido;
}