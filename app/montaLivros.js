const eLivros = document.getElementById('livros')

function exibeLivros(livros) {
  eLivros.innerHTML = ''
  livros.forEach(livro => {
    let disponibilidade = verificaDisponibildade(livro)
    eLivros.innerHTML += `
       <div class="livro">
      <img class="livro__imagens ${disponibilidade}" 
      src="${livro.imagem}" 
      alt="${livro.alt}" />
      <h2 class="livro__titulo">
        ${livro.titulo}        
      </h2>
      <p class="livro__descricao">
      ${livro.autor}</p>
      <p class="livro__preco" id="preco">
      R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">
        ${livro.categoria}</span>
      </div>
    </div>
        `
  });
}


function verificaDisponibildade(livro){
  if (livro.quantidade <= 0) {
    return 'indisponivel'
  }
}