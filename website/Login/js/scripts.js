
const nome = document.getElementById('username');
const password = document.getElementById('Password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit',function(e){
    let messages = []
    if (nome.value === '' || nome.value == null) {
        messages.push('O nome é obrigatório')
    }
    if (password.value === '' || password.value == null) {
        messages.push('O Password é obrigatório')
    }
    if (messages.length>0) {
        e.preventDefault()
        errorElement.innerText= messages.join(', ')
    }
 
})