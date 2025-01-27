let amigos = [];
let nomeAmigo = document.getElementById('amigo');
let resultado = document.getElementById('resultado');
let lista = document.getElementById('listaAmigos');
let validacao = false;

function adicionarAmigo(){

    resultado.innerHTML = "";
    if(nomeAmigo.value == ''){

        alert("Por favor Digite um nome"); 

    }else if(amigos.includes(nomeAmigo.value)){

        alert("esse nome ja esta adicionado");
        nomeAmigo.value = ''; 

    } else {
            amigos.push(nomeAmigo.value);
            exibirNome();   
            nomeAmigo.value = '';  
        }      
    }      

function exibirNome(){
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }

}
function sortearAmigo() {

    if(amigos == ""){
        alert("Por favor Digite um nome");
    }
    else{
        let numeroAleatorio = Math.floor(Math.random() * amigos.length); 
        resultado.innerHTML = "seu amigo secreto é: " + amigos[numeroAleatorio]; 
        lista.innerHTML = '';
        amigos = [];
        
    }
}

    