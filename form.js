
let n = document.getElementById('nome')
let sbn = document.getElementById('sobrenome')
let idd = document.getElementById('idade')
var cp = document.getElementById('cpf');
let mail = document.getElementById('email')
let vlr = document.getElementById('valor')
let mes = document.getElementById('meses')
let txtmail = document.getElementById('textemail')
const btnEnvForm = document.querySelector('.button-enviar-form')
const modal = document.querySelector('.modal-container')


cp.addEventListener('keypress',() =>{
    let cplength = cp.value.length;

    if(cplength === 3 || cplength === 7){
        cp.value+="."
    }else if(cplength === 11){
        cp.value+="-"
    }
})




function envAnalise(){
 
    modal.classList.add('active-modal')
    
   
   
}
function closeModal(){
    modal.classList.remove('active-modal')
   
}

function enviar(){
    btnEnvForm.classList.add('active')  

}
function limpar(){
    btnEnvForm.classList.remove('active')   
     
}



form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()

})

function checkInputs() {
    let nome = n.value
    let sobrenome = sbn.value
    let idade = idd.value
    let cpf = cp.value
    let email = mail.value
    let valor = vlr.value
    let meses = mes.value

    if (nome == "" && sobrenome == "" && idade == "" && cpf == "" && email == "" && valor == "" && meses == "") {
        alert('erro')
    } else {
        tJuros();
    }

}



mail.addEventListener('keyup', () => {
    if (validarEmail(email.value) !== true) {
        textemail.textContent = ' O formato deve ser Ex:"usuario@tipo.com" '
    } else {
        textemail.textContent = ""
    }
})
function validarEmail(email) {
    let emailValue = /\S+@\S+\.\S+/;
    return emailValue.test(email);
}


function tJuros() {
    let res = document.querySelector('div#res')

    let idade = Number(idd.value);
    let valor = Number(vlr.value);
    let meses = Number(mes.value);




    if (idade >= 18 && idade <= 25) {
        tjuros = 0.10;
    } else if (idade > 25 && idade <= 35) {
        tjuros = 0.12;
    } else if (idade > 35 && idade <= 45) {
        tjuros = 0.14;
    } else if (idade > 45 && idade <= 55) {
        tjuros = 0.16;
    } else {
        tjuros = 0.28;
    }


    let juros = valor * tjuros * meses;
    let total = valor + juros;
    let parcela = total / meses;





    res.innerHTML = `Ola ${nome.value} ${sobrenome.value}<br><br>
  Foi solicitado R$ ${valor.toFixed(2)}<br><br>  Parcelado em ${meses}x <br><br>
  O total com Juros ficaria R$ ${total.toFixed(2)} <br><br>
  Parcelado em ${meses} x ${parcela.toFixed(2)} <br><br>
  você irá pagar R$ ${juros.toFixed(2)} de Juros. <br><br>
  Com juros de ${tjuros}% ao mês`

    return tJuros
}





form.addEventListener('reset', (e) => {
    e.preventDefault()

    clearText()

})



function clearText() {

    let n = document.getElementById('nome').value = ''
    let sbn = document.getElementById('sobrenome').value = ''
    let idd = document.getElementById('idade').value = ''
    let cp = document.getElementById('cpf').value = ''
    let mail = document.getElementById('email').value = ''
    let vlr = document.getElementById('valor').value = ''
    let mes = document.getElementById('meses').value = ''
    const btnEnvForm = document.querySelector('.button-enviar-form').value=''
    res.innerHTML = ""
   

}


