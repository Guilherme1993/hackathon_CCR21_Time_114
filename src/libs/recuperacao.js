const inputEmail = document.getElementById('email');

const arrayUsuarios = JSON.parse(localStorage.getItem('usuarios'))

function enviaEmail() {
    if (inputEmail.value.trim() == '') {

        alert('Digite o e-mail!');

    } else {

        const usuario = arrayUsuarios.filter(us => {
            return us.email === inputEmail.value;
        })

        if (usuario.length != 0) {

            let senha = usuario[0].senha;
            console.log(senha)
            alert('Senha enviada para o e-mail cadastrado!')

        } else {
            alert('E-mail não cadastrado!')
            return false;
        }

    }
}