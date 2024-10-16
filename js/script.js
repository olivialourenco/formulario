//Função para pegar os dados inseridos no formulario
function confirmar(){
    const nome = document.getElementById('nome').value;
    const casa = document.getElementById('casa').value;
    const status = document.getElementById('status').value;
    const classe = document.getElementById('classe').value;
    const observacoes = document.getElementById('observacoes').value; 


// Criando o objeto
const personagem = {
    nome: nome,
    casa: casa,
    status: status,
    classe: classe,
    observacoes: observacoes
}

//Exibindo o objeto
console.log("Objeto criado: ", personagem);
//Para conseguir usar o objeto nas próximas funções 
return personagem;
}

//Função para converter o objeto em uma string JSON 
function converter(){
    const personagem = confirmar();
    jsonString = JSON.stringify (personagem); //converter objeto para string
    console.log("Objeto convertido em JSON: ", jsonString);
}

//Função para converter de volta esse JSON em um objeto
function converterDevolta(){
    const personagemNovo = JSON.parse(jsonString); //convertendo em objeto novamente
    console.log("JSON convertido para objeto: ", personagemNovo);
}







