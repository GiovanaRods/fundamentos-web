const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const assunto = document.querySelector('#assunto');
const mapa = document.querySelector('#maps')

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
  
    if (nome.value.length < 3) {
      txtNome.innerHTML = 'Nome muito curto'
      txtNome.style.color = 'red'
      nomeOk = false
    } else {
      txtNome.innerHTML = 'Concluído'
      txtNome.style.color = 'green'
      nomeOk = true
    }
}

function validaEmail() {

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')
      
    if(email.value.match(regex)) {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    } else {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }
}

function validaAssunto() {
    let txtMsg = document.querySelector('#txtAssunto')
    
    if(assunto.value.length > 100) {
      txtMsg.innerHTML = 'Assunto muito grande, digite no máximo 100 caracteres.'
      txtMsg.style.color = '#d90429'
      mensagemOk = false
    } else {
      txtMsg.innerHTML = assunto.value.length + '/100'
      txtMsg.style.color = '#2b2d42'
      mensagemOk = true
    }
  }
  
  function enviarForm(){
    if(nomeOk  && emailOk  && mensagemOk ) {
      alert(nome.value + ', mensagem enviada com sucesso, aguarde um contato por e-mail.')
    } else {
      alert('Por favor, preencha todos os campos corretamente.')
    }
  }
  
  function mapaZoom() {
    mapa.style.aspectRatio = '16/11'
  }
  
  function mapaNormal() {
    mapa.style.aspectRatio = '16/9'
  }
