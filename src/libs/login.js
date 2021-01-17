const formLogin = document.querySelector('.login') 

// const arrayUsuarios = localStorage.getItem('usuarios')
const arrayUsuarios = []

const usuario = arrayUsuarios.filter(usuario => {
  usuario.email === inputEmail.value
})

if (usuario.length != 0) {
  if (usuario.senha === inputSenha.value) {
    const redirecionamento = {
      '0': window.location.href = 'http://127.0.0.1:5500/candidato/index.html',
      '1': window.location.href = 'http://127.0.0.1:5500/profissional/index.html',
      '2': window.location.href = 'http://127.0.0.1:5500/admin/index.html',
    }
    redirecionamento[usuario.tipo]
  }
}
console.log(usuario)

formLogin.addEventListener('submit', e => {
  // window.location.href = 'http://127.0.0.1:5500/src/pages/aluno/index.html'
  e.preventDefault()
})