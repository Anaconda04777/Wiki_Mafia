
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
        img:"../Assets/reati/usura.jpg",
        testo:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,"
    },
    {
        titolo:"Appalti illeciti",
        id:"reato-3",
        img:"../Assets/reati/diga.jpg",
        testo:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,"
    },
    {
        titolo:"Spaccio di droga",
        id:"reato-4",
        img:"../Assets/reati/spaccio.jpg",
        testo:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,"
    },
    {
        titolo:"Estorsione",
        id:"reato-5",
        img:"../Assets/reati/estorsione.jpg",
        testo:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,"
    },
    {
        titolo:"Prostituzione",
        id:"reato-6",
        img:"../Assets/reati/prostituzione.jpg",
        testo:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,"
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