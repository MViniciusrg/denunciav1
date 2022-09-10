var btn = document.querySelector('#sendBtn')
var panel = document.querySelector('#panel')
var mensagemEnv = document.querySelector('#mensagemEnv')

mensagemEnv.style.display = "none"

btn.addEventListener('click', function () {

    var tipoViolencia = document.querySelector('#tipoViolencia').value
    var quemDenuncia = document.querySelector('#quemDenuncia').value
    var nomeVitma = document.querySelector('#nomeVitma').value
    var corVitma = document.querySelector('#corVitma').value
    var nomeAgr = document.querySelector('#nomeAgr').value
    var idadeAgr = document.querySelector('#idadeAgr').value
    var corAgr = document.querySelector('#corAgr').value
    var endAgr = document.querySelector('#endAgr').value
    var nAgr = document.querySelector('#nAgr').value
    var bOcorrencia = document.querySelector('#bOcorrencia').value
    var pRef = document.querySelector('#pRef').value
    var cep = document.querySelector('#CEP').value
    var dataDenuncia = document.querySelector('#dataDenuncia')
    var relato = document.querySelector('#relato').value
    var file = document.querySelector('#anexoArq').value

    if(tipoViolencia != null && quemDenuncia != null && nomeVitma.length != 0 && nomeAgr.length != 0 && endAgr.length != 0 && bOcorrencia.length != 0){
        panel.style.display = "none"
        mensagemEnv.style.display = "block"
    }
    else{
        alert("Os campos com * (asterisco) devem estar preenchidos.")

    }
})