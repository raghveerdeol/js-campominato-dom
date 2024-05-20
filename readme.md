<!-- Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri? Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento. -->

<!-- Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.  -->
1 creo un array bombe vuoto; 
2 per generare i numeri casuali creo una funzione con il parametro celle, al interno della quale uso un ciclo while < 16, al interno del quale genero i numeri casuali compresi tra 1 e il numero delle celle; 
<!-- Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali. -->
3 Per far si che non si ripeta un numero nel array delle bombe uso un if al interno del ciclo while, se il numero generato è già presente nel array genero un'altro numero;
4 una volta che ho il numero lo pusho nel array bombe; 
<!-- In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. -->
5 creo un eventListener sul article che rappresenta le celle;
6 creo un un ciclo while < bomba.length al interno del quale uso if per vedere se il numero della cella è uguale a un numero presente nel array bomba, 
7 se è presente aggiungo una classe per colorarla e stampo game over;
<!-- Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle. -->
8 else aggiungo una classe per colorarla di azzuro;
<!-- La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). -->
9 se i due numeri prima comparati tra loro sono uguali la partita termina e il giocatore ha perso, oppure il giocatore clicca un numero di celle uguale a celle - 16 allora la partita termina e il giocatore ha vinto;
<!-- Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. -->
10  ogni volta che il giocatore clicca una cella il cui numero non coincide con array bomba al il punteggio diventa punteggio + 1; 