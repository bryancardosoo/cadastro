function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;

    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "index.html";
    }
}var dadosLista = [];

var CPFs = [];

function salvarDados(){

    let nomeUser = document.getElementById("dados").value;
    let CPF = document.getElementById("CPF").value;
console.log(CPF)

    if(nomeUser){
        dadosLista.push(nomeUser);
        CPFs.push(CPF);
        criaLista();
        document.getElementById("dados").value = '';
        document.getElementById("CPF").value = '';
    }else{
        alert("Digite algo");
        document.getElementById('dados').focus()
        alert("Digite algo");
        document.getElementById('CPF').focus()
    }
}
function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nomes</th><th>CPF</th><th>Ações</th></tr>";
    
    for(let i=0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td>" + CPFs[i] + "</td><td><button class='btn btn-primary' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}

// FUNCAO PARA EDIÇÃO DE NOME

function editar(i){
    document.getElementById("dados").value = dadosLista[(i - 1)];
    document.getElementById("CPF").value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i-1), 1]);
    CPFs.splice(CPFs[(i-1), 1]);
}
// FUNCAO PARA EXCLUIR NOME

function excluir(i){
    dadosLista.splice((i-1), 1);
    document.getElementById("tabela").deleteRow(i);
}
