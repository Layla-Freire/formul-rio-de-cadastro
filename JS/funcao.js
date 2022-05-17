
'use strict';

//CONSUMO DE API DO CEP

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.cidade;
    document.getElementById('estado').value = endereco.estado;
} 

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
    
    const cep = document.getElementById('cep').value;
    const url = `https://api.postmon.com.br/v1/cep/${cep}`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('endereco').value = 'CEP não encontrado!';
        }else {
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('endereco').value = 'CEP INVÁLIDO!';
    }
     
}

document.getElementById('cep').addEventListener('focusout',pesquisarCep);


//ENVIAR PARA CONSOLE LOG
function enviar(){
  var nomeValue = document.querySelector("#nome").value;
  var emailValue = document.querySelector("#email").value;
  var dataValue = document.querySelector("#data").value;
  var cpfValue = document.querySelector("#cpf").value;
  var phonerValue = document.querySelector("#phone").value;
  var cepValue = document.querySelector("#cep").value;
  var enderecoValue = document.querySelector("#endereco").value;
  var numeroValue = document.querySelector("#numero").value;
  var complementoValue = document.querySelector("#complemento").value;
  var bairroValue = document.querySelector("#bairro").value;
  var cidadeValue = document.querySelector("#cidade").value;
  var estadoValue = document.querySelector("#estado").value;
  var mensagemValue = document.querySelector("#mensagem").value;

  var formValue = {                                 
      name: nomeValue,
      email: emailValue,
      data: dataValue,
      cpf: cpfValue,
      phoner: phonerValue,
      cep: cepValue,
      endereco: enderecoValue,
      numero: numeroValue,
      complemento: complementoValue,
      bairro: bairroValue,
      cidade: cidadeValue,
      estado: estadoValue,
      mensagem: mensagemValue
     
  };
  console.log(formValue);
}
 
