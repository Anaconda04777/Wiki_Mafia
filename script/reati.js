
const reati = [
    {
        titolo:"Riciclaggio di denaro",
        id:"reato-1",
        img:"../Assets/reati/riciclaggio.png",
        testo:"Il riciclaggio, oltre che un reato, è una metodologia criminale che si avvale dei risultati delle scienze finanziarie e bancarie per dare una parvenza lecita a capitali la cui provenienza è in realtà illecita(denaro sporco), rendendone così più difficile l'identificazione e il successivo eventuale recupero.\nSi dividein tre fasi: Introduzione nel mercato, Stratificazione e Integrazione"
    },
    {
        titolo:"Usura",
        id:"reato-2",
        img:"",
        testo:""
    },
    {
        titolo:"Appalti illeciti",
        id:"reato-3",
        img:"",
        testo:""
    },
    {
        titolo:"Spaccio di droga",
        id:"reato-4",
        img:"",
        testo:""
    },
    {
        titolo:"reato 5",
        id:"reato-5",
        img:"",
        testo:""
    },
    {
        titolo:"reato 6",
        id:"reato-6",
        img:"",
        testo:""
    }
]


window.onload = function() {
    let container = document.querySelector("#container");
    for (let i=0; i<reati.length; i++) {
        container.innerHTML += `
        <div class='card news-Slide-up' id="${reati[i].id}">
          <div class='newsCaption'>
            <h2 class='newsCaption-title'>${reati[i].titolo}</h2>
            <p class='newsCaption-content'>${reati[i].testo}</p>   
          </div>
        </div>`
        let x = document.querySelector(`#${reati[i].id}`);
        x.style.backgroundImage = `url(${reati[i].img})`;
    }
}