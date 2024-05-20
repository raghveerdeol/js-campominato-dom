const sectionEl = document.querySelector('section#container');
const play = document.querySelector('button#play');
const selectEl = document.getElementById("difficoltà");


play.addEventListener("click", function () {
    console.log(selectEl.value);
    let cellNumber;
    let className;
    switch (selectEl.value) {
        case '0':
            cellNumber = 100;
            className = "difficoltà-facile";
            break;
        case '1': 
            cellNumber = 81;
            className = 'difficoltà-media';
            break;
        case '2':
            cellNumber = 49;
            className = 'difficoltà-difficile';
            break;
        default:
            cellNumber = 100;
            className = "difficoltà-facile"
            break;
    }
    getGrid(sectionEl, cellNumber, className);

})


function getGrid(containerEl, cells, addNewClass) {
    containerEl.innerHTML = "";
    let n = 0;
    while (n < cells) {
        // creo l'elemento article;
        let articleEl = document.createElement("article");
    
        // aggiungi una classe; 
        articleEl.classList.add('casella', 'flex', addNewClass);
        
        articleEl.append(n + 1);
    
        // article figlio di section;
        sectionEl.appendChild(articleEl);
        
        // aggiungo addEvenentListener (click);
        articleEl.addEventListener("click", function () {
            articleEl.classList.add('attiva');
            console.log(articleEl.innerHTML);
        });
        
        n += 1;
    }
}



