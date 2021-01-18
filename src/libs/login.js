const formLogin = document.querySelector('.login')
const inputEmail = formLogin.querySelector('.email');
const inputSenha = formLogin.querySelector('.senha');

const arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'))

function acessar() {

  if (validar()) {

    const usuario = arrayUsuarios.filter(us => {
      return us.email === inputEmail.value;
    })

    if (usuario.length != 0) {
      if (!usuario[0].acesso) {
        alert('Você não tem permissão para acessar o sistema! Entre em contato com o administrador pelo e-mail admin@propose.com.br');
      } else if (usuario[0].senha === inputSenha.value) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario[0]));
        const redirecionamento = {
          '0': 'http://127.0.0.1:5500/candidato/index.html',
          '1': 'http://127.0.0.1:5500/avaliador/index.html',
          '2': 'http://127.0.0.1:5500/admin/index.html',
          // 0: window.location.href = 'file:///C:/Users/guisk/Documents/ADS%20-%20Fatec/hackathon_ccr/hackathon_CCR21_Time_114/hackathon_CCR21_Time_114/candidato/index.html',
          // 1: window.location.href = 'file:///C:/Users/guisk/Documents/ADS%20-%20Fatec/hackathon_ccr/hackathon_CCR21_Time_114/hackathon_CCR21_Time_114/profissional/index.html',
          // 2: window.location.href = 'file:///C:/Users/guisk/Documents/ADS%20-%20Fatec/hackathon_ccr/hackathon_CCR21_Time_114/hackathon_CCR21_Time_114/admin/index.html',
        }
        window.location.href = redirecionamento[usuario[0].tipo]
        // redirecionamento[]

      } else {
        alert('Senha inválida!')
        return false;
      }
    } else {
      alert('Usuário não cadastrado!')
      return false;
    }

    return true;

  } else {
    return false;
  }

  function validar() {

    let valido = true;

    if (inputEmail.value.trim() == '') {
      alert('Digite o e-mail');
      inputEmail.focus();
      valido = false;
    } else if (inputSenha.value.trim() == '') {
      alert('Digite a senha');
      inputSenha.focus();
      valido = false;
    }

    return valido;
  }

}