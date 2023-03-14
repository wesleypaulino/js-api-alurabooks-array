const botoesFiltros = document.querySelectorAll('.btn')
botoesFiltros.forEach(btn => btn.addEventListener('click', filtraLivrosFront))

function filtraLivrosFront(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFitlrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
    exibeLivros(livrosFitlrados)
}