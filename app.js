//variavel armazena os campos de textos digitados pelo usuario atraves do querySelector sendo um ID ou classe 
const textInput = document.querySelector(".codificar__input");
const outInput = document.querySelector("#output");

//funcao criptografar armazena na variavel texto o valor de input
function criptografar(){
  const texto = textInput.value;
  const resultCripto = texto.replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")

    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' 
    + resultCripto
    + '</textarea>' 
    + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

//funcao descriptografar
function descriptografar(){
    const texto = textInput.value;
    const resultDescripto = texto.replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u")
    document.getElementById('output').innerHTML = '<textarea readonly id="input-texto">' 
    + resultDescripto 
    + '</textarea>' 
    + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function copiar() {
    const textoCop = document.getElementById('input-texto');
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}  