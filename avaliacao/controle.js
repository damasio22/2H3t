let lista = [];
const atualiza_lista = () =>{
    let mostrar = "Lista Vazia";
    console.log(lista)
    if(lista.length > 0){   
        mostrar = "";
        for(let i = 0; i < lista.length; i++ ){
            mostrar += lista[i] + "<br>";
        }
    }
    document.getElementById("lista").innerHTML = mostrar;
}
const pegar_nome = () => validar_nome(document.getElementById("nome").value);
const mostra_erro = (erro) =>  document.getElementById("error").innerHTML = erro;
const validar_nome = (nome) => {
    mostra_erro("");
    for(let i = 0; i < lista.length; i++ ){
        if(lista[i].toUpperCase() == nome.toUpperCase()){
            mostra_erro("Nome já está na lista");
            return "";
        }
    }
    document.getElementById("nome").value = "";
    return nome;
}

const inserir_ultimo = () => {
    let nome = pegar_nome();
    if( nome != ""){
        lista.push(nome);
        atualiza_lista();
    } 
}

const inserir_primeiro = () => {
    let nome = pegar_nome();
    if( nome != ""){
        lista.unshift(nome);
        atualiza_lista();
    } 
}
const remover_ultimo = () => {
        lista.pop();
        atualiza_lista();
    } 

const remover_primeiro = () => {
        lista.shift();
        atualiza_lista();
    } 

const ordenar_az = () => {
        lista.sort();
        atualiza_lista();
    } 

const ordenar_za = () => {
        lista.sort();
        lista.reverse();
        atualiza_lista();
    } 

const limpar_lista = () => {
        lista = [];
        atualiza_lista();
    } 
const deletar_nome = () => {
  for (let i =0; i < lista.length; i++){
        if(nome == lista(i)){
            lista.splice(i,1);
        }
    }
}
