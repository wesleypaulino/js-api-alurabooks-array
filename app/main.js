let livros = []
const endPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
;

obterLivros()

async function obterLivros(){
    const response = await fetch(endPoint)
    livros = await response.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibeLivros(livrosComDesconto);
}

