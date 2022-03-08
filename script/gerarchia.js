
const ruoli = [
    {
        titolo:"Capo",
        id:"membro-1",
        img:"../Assets/gerarchia/boss.png",
        testo:"Tutti i membri di una famiglia eleggono il proprio capo o rappresentante (detto anche con il termine inglese «boss»), il quale nomina un sottocapo e uno o più capidecina, in base alle dimensioni della famiglia."
    },
    {
        titolo:"Consigliere",
        id:"membro-2",
        img:"../Assets/gerarchia/consigliere.png",
        testo:"Solitamente un affiliato anziano della famiglia, Viene chiamato a dare consigli al capo e ai membri; le figure del consigliere e del vicecapo possono coincidere."
    },
    {
        titolo:"Vice-capo",
        id:"membro-3",
        img:"../Assets/gerarchia/vicecapo.png",
        testo:"Il ruolo del sottocapo o vicecapo («viceboss» in inglese) può somigliare a quello di un intermediario, ma è molto spesso associato anche al comando di un'operazione che non richiede l'intervento diretto del capo. In assenza del rappresentante, il vicecapo diviene automaticamente il reggente dell'intera cosca."
    },
    {
        titolo:"Caporegime",
        id:"membro-4",
        img:"../Assets/gerarchia/caporegime.png",
        testo:"Il caporegime (o capodecina) è nominato dal capofamiglia e funge da tramite tra il rappresentante e i soldati: ciascun capodecina coordina infatti un gruppo di soldati e ha l'incarico di avvisare i propri soldati quando si svolgono le riunioni"
    },
    {
        titolo:"Soldato",
        id:"membro-5",
        img:"../Assets/gerarchia/soldato.png",
        testo:"Il cosiddetto soldato o «uomo d'onore» è un membro della famiglia ritualmente affiliato che ha un peso indipendentemente dalla carica che può ricoprire nella famiglia: i soldati si occupano di svolgere le attività che gli impartisce il loro capodecina (dall'esecuzione di omicidi, al traffico di droga, alle operazioni di usura, al racket delle estorsioni e la relativa riscossione dei soldi)."
    },
    {
        titolo:"Avvicinato",
        id:"membro-6",
        img:"../Assets/gerarchia/avvicinato.png",
        testo:"Ogni membro di una famiglia collabora con uno o più aspiranti mafiosi non ancora affiliati solitamente chiamati «avvicinati», i quali sono possibili candidati all'affiliazione e quindi vengono messi alla prova per saggiare la loro affidabilità, facendogli compiere numerose commissioni (esse possono essere l'estorsione, il contrabbando e la riscossione dei soldi del racket, così come il trasporto di armi da un covo all'altro, l'esecuzione di omicidi o il furto di automobili e moto per compiere atti delittuosi): la posizione di avvicinato può durare diversi anni o anche per sempre."
    },
]


window.onload = function() {
    let container = document.querySelector("#container");
    for (let i=0; i< ruoli.length; i++) { 
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

        let x = document.querySelector(`#${ruoli[i].id}`);
        x.style.backgroundImage = `url(${ruoli[i].img})`;
    }
}