
const reati = [
    {
        titolo:"Riciclaggio di denaro",
        id:"reato-1",
        img:"../Assets/reati/riciclaggio.png",
        testo:"Il riciclaggio, oltre che un reato, è una metodologia criminale che si avvale dei risultati delle scienze finanziarie e bancarie per dare una parvenza lecita a capitali la cui provenienza è in realtà illecita(denaro sporco), rendendone così più difficile l'identificazione e il successivo eventuale recupero. </br> Si dividein tre fasi: Introduzione nel mercato, Stratificazione e Integrazione"
    },
    {
        titolo:"Usura",
        id:"reato-2",
        img:"../Assets/reati/usura.jpg",
        testo:"L'usura è la pratica che consiste nel fornire prestiti a tassi di interesse molto elevati, tali da rendere il loro rimborso molto difficile o impossibile. questa pratica illegale può spingere il debitore ad accettare condizioni svantaggiose, per esempio nella vendita di un bene as un prezzo più basso del suo valore effettivo, oppure il creditore a compiere atti illeciti ai danni del debitore per indurlo a pagare."
    },
    {
        titolo:"Appalti illeciti",
        id:"reato-3",
        img:"../Assets/reati/diga.jpg",
        testo:"L’appalto è il contratto col quale una parte assume, con organizzazione dei mezzi necessari e con gestione a proprio rischio, il compimento di un’opera o di un servizio verso un corrispettivo in denaro. </br> Il controllo degli appalti pubblici è utilizzato dai delinquenti mafiosi per fornire lavoro nero ai suoi affiliati, eludendo l'autoregolamentazione sindacale dei rapporti di lavoro. In questo modo viene messo sotto controllo non solo l'appalto ma anche la gestione del lavoro e la speculazione sull'acquisto delle materie prime. </br> La gestione mafiosa degli appalti pubblici ha anche favorito la corruzione nelle pubbliche amministrazioni e ha accresciuto, con il voto di scambio, l'associazione mafiosa della classe politica con i gruppi criminali."
    },
    {
        titolo:"Estorsione",
        id:"reato-4",
        img:"../Assets/reati/estorsione.png",
        testo:"L'estorsione, in diritto, è un reato commesso da chi, con violenza o minaccia, costringe uno o più soggetti a fare o a non fare qualche atto, procura a sé o ad altri un ingiusto profitto con altrui danno. </br> in particolare, la mafia si serve della cosiddetta «protezione», un'attività criminale inquadrabile nell'ambito del racket(attività criminali finalizzate a controllare determinati settori delle attività economiche e commerciali), generalmente volta ad ottenere da parte di un operatore economico un pagamento periodico in cambio di una presunta offerta di protezione (o, In Italia, «pizzo»)."
    },
    {
        titolo:"Traffico e Spaccio di droga",
        id:"reato-5",
        img:"../Assets/reati/spaccio.jpg",
        testo:"Il traffico di droga, propriamente narcotraffico, o traffico di stupefacenti, è il sistema di compravendita illegale delle sostanze stupefacenti. </br> Quest’attività è considerata una delle principali fonti di entrate di tutte le organizzazioni criminali di stampo mafioso, nonché dei cosiddetti cartelli della droga dell'America centrale e dell'America Latina."
    },
    {
        titolo:"Sfruttamento della Prostituzione",
        id:"reato-6",
        img:"../Assets/reati/prostituzione.jpg",
        testo:"Lo sfruttamento della prostituzione (o lenocinio) è l'attività di colui che a qualsiasi titolo tragga vantaggio economico dal meretricio di altre persone;  Spesso l'attività consiste nel guadagnare attraverso gruppi di persone, solitamente donne, costrette a fornire prestazioni sessuali sotto minaccia, coercizione fisica, psicologica e usura. </br> La pratica è spesso associata al traffico di esseri umani: la tratta a sfondo sessuale implica l'induzione di migranti in atti sessuali come condizione stretta e necessaria per effettuare il viaggio, sfruttando la situazione di estrema fragilità della persona lontana dal proprio paese mediante il debito da loro contratto per il viaggio compiuto."
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