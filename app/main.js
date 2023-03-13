let livros = []
const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const eLivros  = document.getElementById('livros')

console.log(eLivros)
;

obterLivros()

async function obterLivros(){
    const response = await fetch(endPoint)
    livros = await response.json()
    exibeLivros(livros);
    console.table(livros);

}

function exibeLivros(livros) {
    livros.forEach(element => {
        eLivros.innerHTML += `
       <div class="livro">
      <img class="livro__imagens" 
      src="${element.imagem}" 
      alt="${element.alt}" />
      <h2 class="livro__titulo">
        ${element.titulo}        
      </h2>
      <p class="livro__descricao">
      ${element.autor}</p>
      <p class="livro__preco" id="preco">
      R$${element.preco}</p>
      <div class="tags">
        <span class="tag">
        ${element.categoria}/span>
      </div>
    </div>
        `
    });
}
