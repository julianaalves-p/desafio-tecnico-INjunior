
function countBooksInCategory(booksByCategory) {
    const contagem = {};
    
    for(let i = 0; i < booksByCategory.length; i++) {
        const categoria = booksByCategory[i].category;
        const quantidadeDeLivros = booksByCategory[i].books.length;
        contagem[categoria] = quantidadeDeLivros;
    }
    
    return contagem;
}