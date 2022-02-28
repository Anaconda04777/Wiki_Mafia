
const ruoli = [
    {
        titolo:"Capo",
        id:"membro-1",
        img:"../Assets/xi.jpeg",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        titolo:"Consigliere",
        id:"membro-2",
        img:"../Assets/xi.jpeg",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        titolo:"Vice-capo",
        id:"membro-3",
        img:"../Assets/xi.jpeg",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        titolo:"Caporegime",
        id:"membro-4",
        img:"../Assets/xi.jpeg",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        titolo:"Soldato",
        id:"membro-5",
        img:"../Assets/xi.jpeg",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
    {
        titolo:"Avvicinato",
        id:"membro-6",
        img:"../Assets/xi.jpeg",
        testo:"Ex do ullamco esse magna in amet excepteur nisi id occaecat qui dolor. Proident adipisicing velit amet ex ut nulla qui occaecat est excepteur deserunt ex dolor. Laboris aliqua sit aliquip nostrud ex adipisicing sit adipisicing Lorem id nostrud. Est reprehenderit veniam adipisicing labore ex aliqua et elit veniam commodo ex aliquip est."
    },
]


window.onload = function() {
    let container = document.querySelector("#container");
    for (let i=0; i<ruoli.length; i++) {
        container.innerHTML += `
        <div class='card news-Slide-up' id="${ruoli[i].id}">
          <div class='newsCaption'>
            <h2 class='newsCaption-title'>${ruoli[i].titolo}</h2>
            <p class='newsCaption-content'>${ruoli[i].testo}</p>   
          </div>
        </div>`
        let x = document.querySelector(`#${ruoli[i].id}`);
        x.style.backgroundImage = `url(${ruoli[i].img})`;
    }
}