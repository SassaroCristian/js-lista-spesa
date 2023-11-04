const listaSpesa = ["uova", "latte", "biscotti", "pane", "mandarini", "fazzoletti"]
let i = 0;

while (i < listaSpesa.length) {
    const divSpesa = document.querySelector('#spesa');
    const ul = document.createElement('ul')
    const li = document.createElement('li')
    li.textContent = listaSpesa[i]
    ul.appendChild(li);
    divSpesa.appendChild(ul);
    console.log(listaSpesa[i])
    i++;
}