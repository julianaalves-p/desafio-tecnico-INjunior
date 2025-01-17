function authors(booksByCategory) {

    const autores = []; // array pra armazenar os autores
    
    for(let i = 0; i < booksByCategory.length; i++) { // percorrer os autores
        for(let j = 0; j < booksByCategory[i].books.length; j++) {
            const autor = booksByCategory[i].books[j].author;
            
            let existe = false;
            for(let k = 0; k < autores.length; k++) {
                if(autores[k] === autor) {
                    existe = true;   
                    break;      // verifica se ja existe para que nao haja repeticao
                }
            }
            
            if(!existe) {
                autores.push(autor);
            }
        }
    }
    
    return autores;
}