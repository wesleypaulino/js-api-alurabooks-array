let btnOrder = document.getElementById('btnOrdenarPorPreco')
btnOrder.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco(){
    let livrosOrdenados = livros.sort((a,b) =>
        a.preco - b.preco)
    exibeLivros(livrosOrdenados)
}