
const reati = [
    {
        reato:"reato 1",
        id:"reato-1",
        img:"../Assets/xi.jpeg",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        reato:"reato 2",
        id:"reato-2",
        img:"",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        reato:"reato 3",
        id:"reato-3",
        img:"",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        reato:"reato 4",
        id:"reato-4",
        img:"",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        reato:"reato 5",
        id:"reato-5",
        img:"",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        reato:"reato 6",
        id:"reato-6",
        img:"",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    }
]


window.onload = function() {
    let container = document.querySelector("#container");
    for (let i=0; i<reati.length; i++) {
        container.innerHTML += `
        <div class='card news-Slide-up' id="${reati[i].id}">
          <div class='newsCaption'>
            <h2 class='newsCaption-title'>${reati[i].reato}</h2>
            <p class='newsCaption-content'>${reati[i].testo}</p>   
          </div>
        </div>`
        let x = document.querySelector(`#${reati[i].id}`);
        x.style.backgroundImage = `url(${reati[i].img})`;
    }
}