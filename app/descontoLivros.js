function aplicarDesconto(livros) {
    const percentualDesconto = 0.03
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * percentualDesconto) }
    })
    return livrosComDesconto
}