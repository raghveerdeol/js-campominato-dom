// <!-- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.  -->
// 1 creo un array bombe vuoto; 
// 2 per generare i numeri casuali creo una funzione con il parametro celle, al interno della quale uso un ciclo while < 16, al interno del quale genero i numeri casuali compresi tra 1 e il numero delle celle; 
// <!-- Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. -->
// 3 Per far si che non si ripeta un numero nel array delle bombe uso un if al interno del ciclo while, se il numero generato è già presente nel array genero un'altro numero;
// 4 una volta che ho il numero lo pusho nel array bombe; 
// <!-- In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. -->
// 5 creo un eventListener sul article che rappresenta le celle;
// 6 creo un un ciclo while < bomba.length al interno del quale uso if per vedere se il numero della cella è uguale a un numero presente nel array bomba, 
// 7 se è presente aggiungo una classe per colorarla e stampo game over;
// <!-- Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. -->
// 8 else aggiungo una classe per colorarla di azzuro;
// <!-- La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). -->
// 9 se i due numeri prima comparati tra loro sono uguali la partita termina e il giocatore ha perso, oppure il giocatore clicca un numero di celle uguale a celle - 16 allora la partita termina e il giocatore ha vinto;
// <!-- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. -->
// 10  ogni volta che il giocatore clicca una cella il cui numero non coincide con array bomba al il punteggio diventa punteggio + 1; 

const sectionEl = document.querySelector('section#container');
const play = document.querySelector('button#play');
const selectEl = document.getElementById("difficoltà");
let punteggio = document.querySelector("main > h2");

// creato tasto play che genera la griglia al click;
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
    getGrid(sectionEl, cellNumber, className, punteggio);

})
// 5 creo un eventListener sul article che rappresenta le celle;




// funzone griglia 
function getGrid(containerEl, cells, addNewClass, points) {
    containerEl.innerHTML = "";
    let score = 0;
    let n = 0;
    let bombs = getRandomNumber(cells);
    console.log(bombs)
    while (n < cells) {
        // creo l'elemento article;
        let articleEl = document.createElement("article");
    
        // aggiungi una classe; 
        articleEl.classList.add('casella', 'flex', addNewClass);
        
        articleEl.append(n + 1);
    
        // article figlio di section;
        sectionEl.appendChild(articleEl);

        console.log(articleEl.innerHTML)
        
        // aggiungo addEvenentListener (click);
        articleEl.addEventListener("click", function () {
            let presenzaBomba = checkNumber(bombs, articleEl.innerHTML);
            console.log(presenzaBomba)
            if (presenzaBomba === true) {
                articleEl.classList.add('bomba');
            } else{
                articleEl.classList.add('attiva');
                score = score + 1;
                points.innerHTML = "Il tuo punteggio è :" + " " +score;
                console.log(score);
            }
            console.log(articleEl.innerHTML);
        });
        
        n += 1;
    }
}

// creo un un ciclo while < bomba.length al interno del quale uso if 
// per vedere se il numero della cella è uguale a un numero presente nel array bomba,
function checkNumber(array, casella) {
    let n = 0;
    let uguaglianza;
    while (n < array.length) {
        if (array[n] == casella) {
            uguaglianza = true;
        }
        n += 1;
    }
    if (uguaglianza) {
        return true;
    } else {
        return false;
    }
}
// 2 per generare i numeri casuali creo una funzione con il parametro celle, 
// al interno della quale uso un ciclo while < 16, al interno del quale genero i numeri casuali compresi tra 1 e il numero delle celle
function getRandomNumber(cells) {
    // 1 creo un array bombe vuoto; 
    let bombe = [];
    while (bombe.length < 16) {
        const randomBomb = Math.floor(Math.random() * cells) + 1;

        if (arrayIncludes(bombe, randomBomb) === false) {
            // 4 una volta che ho il numero lo pusho nel array bombe;
            bombe.push(randomBomb);
        }
    }
    return bombe;
}

        // 3 Per far si che non si ripeta un numero nel array delle bombe uso un if al interno del ciclo while.
function arrayIncludes(array, value) {
    let n = 0;
    let uguaglianza = false;
    while (n < array.length) {
        if (array[n] === value) {
            uguaglianza = true;
        }
        n += 1; 
    }
    if (uguaglianza) {
        return true;
    } else{
        return false;
    }
}





