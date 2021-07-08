
const nome = document.getElementById('nome');
const Sobrenome = document.getElementById('Sobrenome');
const email = document.getElementById('email');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


form.addEventListener('submit',function(e){
    let messages = []
    if (nome.value === '' || nome.value == null) {
        messages.push('O nome é obrigatório')
    }
    if (Sobrenome.value === '' || Sobrenome.value == null) {
        messages.push('O Sobrenome é obrigatório')
    }
    if (email.value === '' || email.value == null) {
        messages.push('O Email é obrigatório')
    }
    if (messages.length>0) {
        e.preventDefault()
        errorElement.innerText= messages.join(', ')
    }
 

})