
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
    for (let i=0; i< ruoli.length; i++) { 
        //ho messo un div in più con una classe (puoi sost. con un id) per averlo unico e per pingarlo al grid
        //ho messo anche una classe per il container più grande, è importante che rimanga
        //poi ho messo l'svg fatto con questa pagina (se vuoi cambiare qualche parametro) https://tablericons.com/
        container.innerHTML += ` 
        <div class="ruolo${i} ruolo"> 
            <div class='card news-Slide-up' id='${ruoli[i].id}'>
                <div class='newsCaption'>
                <h2 class='newsCaption-title'>${ruoli[i].titolo}</h2>
                <p class='newsCaption-content'>${ruoli[i].testo}</p>   
                </div>

            </div>
            ${i === ruoli.length - 1 ? ` ` : `
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-bottom-bar" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 3v18" />
                <path d="M9 18l3 3l3 -3" />
                <path d="M9 3h6" />
                </svg> `
            }
            
        </div>
        
        `
        //quella selezione l'ho fatta per togliere la freccia dall'ultima card, 
        //è più elegante di mettere un width: 0 e un height: 0 da css
        let x = document.querySelector(`#${ruoli[i].id}`);
        x.style.backgroundImage = `url(${ruoli[i].img})`;
    }
}