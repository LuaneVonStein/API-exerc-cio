function criarObjeto (objeto) {
    const container = document.getElementById("container");

    const nome = creatElement ("h1");
    const url = creatElement ("p");

    nome.textContent = objeto.name;
    url.textContent = objeto.url;

    container.appendChild(nome);
    container.appendChild(url);

}

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
  return response.json()
})

.then(data => {
  const objeto = data;
  objeto.forEach(objeto => {
    criarObjeto(objeto);
  });
})

.catch(err => {
  console.log("Erro: ", err);
});


//{
  //  "cmd": "imagine",
    //"msg": "<seu-prompt-aqui>"
  //}

  //{
    //"botão": "U1",
    //"buttonMessageId": "<seu-identificador-de-mensagem-da-resposta-anterior>"
  //} 
  