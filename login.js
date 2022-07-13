




function entrar(){
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if(login == "Danilo" && senha == "123456"){
     location.href="userlogado.html" 
  }else{
      alert('[ERRO] LOGIN OU SENHA INCORRETOS.')
  }
  
}