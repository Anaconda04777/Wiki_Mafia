
const reati = [
    {
        reato:"reato 1",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        reato:"reato 2",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        reato:"reato 3",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    }
]


window.onload = function() {
    let container = document.querySelector("#container");
    for (let i=0; i<reati.length; i++) {
        let dets = document.createElement("details");
        dets.className = "card";
        let summ = document.createElement("summary");
        summ.innerText = reati[i].reato;
        let text = document.createElement("p");
        text.innerText = reati[i].testo;
        dets.appendChild(summ);
        dets.appendChild(text);
        container.appendChild(dets);
    }
}