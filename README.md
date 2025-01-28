# Challenger ONE Oracle/Alura

## Objetivo

Esse projeto é de um desafio feito pela Alura juntamente com a Oracle, ele consiste em fazer a parte lógica de um site onde é possivel criar uma lista com nomes e sortear um desses nomes para ser o seu amigo secreto.
## Funções

###  adicionarAmigo()

```bash
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
```
Basicamente essa função ira fazer algumas validações,adicionar o nome digitado pelo usuario e "chamar" a função para exibir nome. 

#### As validações feitas são :

se caso o usuario clicar no botão adicionar sem digitar um nome ira aparecer uma mensagem pedindo para digitar o nome antes de tudo.

    if(nomeAmigo.value == ''){

        alert("Por favor Digite um nome"); 

    }

se caso o nome digitado ja estiver adicionado na lista tambem ira aparecer uma mensagem pedindo para adicionar outro nome.

    else if(amigos.includes(nomeAmigo.value)){

        alert("esse nome ja esta adicionado");
        nomeAmigo.value = ''; 

    }

###  exibirNome()

    function exibirNome(){
    lista.innerHTML = '';
    for(let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

Essa função esta somente exibindo a lista dos nomes que forão digitados que no caso estão salvos no array "amigos".

###  sortearAmigo()

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

Essa função é responsavel por criar um numero aleatorio gerado pela operação "Math.Random()" e mostra na tela o nome que esta na casa que corresponde ao numero.
