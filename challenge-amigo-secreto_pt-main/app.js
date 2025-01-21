//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeAmigo = document.getElementById('amigo');
let resultado = document.getElementById('resultado');
function adicionarAmigo(){
    
    
        
    if(nomeAmigo.value == ''){

        alert("Por favor Digite um nome");      
    }
    amigos.push(nomeAmigo.value);
    document.getElementById('listaAmigos').innerHTML = amigos;
    nomeAmigo.value = '';    
}

function sortearAmigo() {

        let numeroAleatorio = Math.floor(Math.random() * amigos.length);    
        resultado.innerHTML = "seu amigo secreto é: " + amigos[numeroAleatorio]; 
        document.getElementById('listaAmigos').innerHTML = '';
        amigos = [];
    
}

    