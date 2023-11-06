// Definiamo un array contenente gli elementi iniziali della lista della spesa.
const listaSpesa = ["uova", "latte", "biscotti", "pane", "mandarini", "fazzoletti"];

// Selezioniamo l'elemento con ID "spesa" dall'HTML, dove visualizzeremo la lista della spesa.
const spesa = document.getElementById('spesa');

// Selezioniamo i pulsanti "Aggiungi" e "Rimuovi" dall'HTML.
const addButton = document.getElementById('addButton');
const removeButton = document.getElementById('removeButton');

// Selezioniamo l'input in cui l'utente inserirà nuovi elementi.
const newElementInput = document.getElementById('newElement');

// Questa funzione crea la lista iniziale dei prodotti e li visualizza all'interno del tag "ul".
function createList() {
    listaSpesa.forEach(function (item) {
        // Creiamo un elemento <li> per ciascun elemento nella lista della spesa.
        const li = document.createElement('li');
        
        // Assegniamo il testo dell'elemento corrente all'elemento <li>.
        li.textContent = item;
        
        // Aggiungiamo l'elemento <li> alla lista della spesa.
        spesa.appendChild(li);
    });
}

// Aggiungiamo un event listener al pulsante "Aggiungi".
addButton.addEventListener("click", function () {
    // Leggiamo il nuovo elemento inserito dall'utente.
    const newElement = newElementInput.value;
    
    // Aggiungiamo il nuovo elemento all'array della lista della spesa.
    listaSpesa.push(newElement);
    
    // Creiamo un nuovo elemento <li> con il testo del nuovo elemento e lo aggiungiamo alla lista della spesa.
    const li = document.createElement('li');
    li.textContent = newElement;
    spesa.appendChild(li);
    
    // Azzeriamo l'input dopo l'aggiunta.
    newElementInput.value = "";
});

// Aggiungiamo un event listener al pulsante "Rimuovi".
removeButton.addEventListener("click", function () {
    // Leggiamo il valore da rimuovere inserito dall'utente.
    const elementToRemove = newElementInput.value;
    
    // Selezioniamo tutti gli elementi <li> all'interno della lista della spesa.
    const lis = spesa.querySelectorAll('li');

    // Iteriamo su tutti gli elementi <li>.
    lis.forEach(function (li, index) {
        // Se il testo dell'elemento <li> corrente corrisponde all'elemento da rimuovere, lo rimuoviamo dall'array e dalla visualizzazione.
        if (li.textContent === elementToRemove) {
            listaSpesa.splice(index, 1);
            li.remove();
        }
    });
    
    // Azzeriamo l'input dopo la rimozione.
    newElementInput.value = "";
}

// Chiamiamo la funzione per creare la lista iniziale quando la pagina si carica.
createList();
