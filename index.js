/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in JavaScript si suddividono in: 

- Stringhe: sono dati costituiti da una o più lettere, e vanno sempre inseriti tra virgolette "". 
Ad esempio, "x" è una stringa. "Epicode" è una stringa.
- Numeri: sono dati costituiti da numeri, sia interi che decimali. "3" è un dato di tipo Numero. 
"3.14" è un dato di tipo numero.
- Booleani: è un tipo di dato che può contenere solamente un valore "true" o un valore "false".
Si usano per far capire all'interno del nostro codice se una determinata situazione è vera o falsa.
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Fabio"
console.log(myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12
let numero2 = 20
console.log(numero1 + numero2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log(x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Ranocchiari"
console.log(myName)
const myName2 = "Fabio"
console.log(myName2)
// myName2 = "Ranocchiari" --> la console riporta errore



/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x - 4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john"
let name2 = "John"
console.log(name1 === name2)

name2 = "john"
console.log(name1 === name2)


