const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const TEMPOFINE = 500
let divDomanda
let tabellaDomande
let domandaCorrente = 0
let listaHtmlDomande 
let listaTabDom

const domande = [
    {
        titolo : "I piccoli sgarri nella Yakuza con cosa NON sono puniti?",  
        risposte : ["La rasatura dei capelli", "La reclusione temporanea", "Multe salate", "L'espulsione definitiva"],
        rispostaCorretta : "L'espulsione definitiva",
    },
    {
        titolo : "Su quali di questi testi è basata la simbologia numerica della Triade?",  
        risposte : ["Il Libro dei mutamenti", "Il Libro dei riti", "L'I Ching", "Gli Annali delle primavere e degli autunni "],
        rispostaCorretta : "L'I Ching",
    },
    {
        titolo : "Che tipo di struttura adotta l'Organizacija?",  
        risposte : ["Ad arcipelago", "Orizzontale", "Verticale", "Orizzontale-Verticale"],
        rispostaCorretta : "Orizzontale",
    },
    {
        titolo : "Con chi entrò in conflitto il cartello di Sinaloa negli anni '80?",  
        risposte : ["Cartello di Guadalajara", "Cartello di Juárez", "Cartello di Tijuana", "Cartello del Golfo"],
        rispostaCorretta : "Cartello di Tijuana",
    },
    {
        titolo : "La mafia italo-americana ammette al suo interno non italiani?",  
        risposte : ["Si", "No", "No, ma possono collaborare"],
        rispostaCorretta : "No, ma possono collaborare",
    },
    {
        titolo : "La Famiglia di Cosa Nostra è per forza legata da rapporti di sangue?",  
        risposte : ["Si", "No"],
        rispostaCorretta : "No",
    },
    {
        titolo : "Rispetto a Cosa Nostra la Camorra è:",  
        risposte : ["Meno pericolosa", "Di recente formazione",
                 "Divisa in clan", "Stata molto più attiva negli anni di piombo"],
        rispostaCorretta : "Divisa in clan",
    },
    {
        titolo : "Come si chiama l'entità di base dell'Ndrangheta?",  
        risposte : ["La Locale", "La Famiglia",
                 "La Provincia", "L'Andrina"],
        rispostaCorretta : "L'Andrina",
    },
    {
        titolo : "Quali di questi ruoli NON fa parte della divisione gerarchica della Sacra-Corona-Unita?",  
        risposte : ["Camorrista", "Evangelista",
                 "Medaglioni con Catena della Società Maggiore", "Santificato"],
        rispostaCorretta : "Santificato",
    },
    {
        titolo : "Chi fu il giudice ucciso dalla Stidda?",  
        risposte : ["Domenico Abatemarco", "Rosario Livitano",
                 "Ludovico Acerbi", "Giovani Falcone", "Paolo Borsellino"],
        rispostaCorretta : "Rosario Livitano",
    },
    {
        titolo : "Il consigliere ha l'autorità di dare degli ordini al boss.",  
        risposte : ["Vero", "Falso"],
        rispostaCorretta : "Falso",
    },
    {
        titolo : "Quale è la gerarchia corretta?",  
        risposte : ["Boss - Caporegime - Vicecapo - Consigliere", "Boss - Consigliere - Vicecapo - Caporegime", "Consigliere - Boss - Caporegime - Vicecapo", "Consigliere - Boss - Vicecapo - Caporegime"],
        rispostaCorretta : "Boss - Consigliere - Vicecapo - Caporegime",
    },
    {
        titolo : "Un soldato può ricoprire altre cariche.",  
        risposte : ["Vero", "Falso"],
        rispostaCorretta : "Vero",
    },
    {
        titolo : "Il riciclaggio è:",  
        risposte : ["Un insieme di strategie e metodologie volte al recupero di materiali utili dai rifiuti al fine di riutilizzarli","una serie di pratiche utilizzata dalla criminalità organizzata per coprire denaro sporco","Entrambi", "Nessuna delle risposte precedenti."],
        rispostaCorretta : "Entrambi",
    },
    {
        titolo : "",  
        risposte : [""],
        rispostaCorretta : "",
    },
    {
        titolo : "",  
        risposte : [""],
        rispostaCorretta : "",
    },
    {
        titolo : "",  
        risposte : [""],
        rispostaCorretta : "",
    },
    {
        titolo : "",  
        risposte : [""],
        rispostaCorretta : "",
    }


]


window.onload = function() {
    tabellaDomande = document.querySelector(".tabella-domande")
    divDomanda = document.querySelector(".domanda")

    divDomanda.addEventListener("click", eventListenerDomande)

    document.querySelector(".btn-chiudi").addEventListener("click", function(e) {
        addHide(document.querySelector(".modal"))
    })

    creaElementi()

    listaTabDom = document.querySelectorAll(".tabella-domande > *")
    listaHtmlDomande = document.querySelectorAll(".domanda > *")

    removeHide(listaHtmlDomande[0])
    addFreccia(listaTabDom[0])
}

function creaElementi() {
    //domande
    domande.forEach((e, i) => {
        divDomanda.innerHTML += 
        `
        <div id=${i} class="hide f-l">
            <h2>${i+1}) ${e.titolo}</h2>
            <ol>
                ${addRiposte(e)}
            </ol>
        </div>
        `
    });

    
    //tabella domande
    for (let i = 0; i < domande.length; i++) {
        tabellaDomande.innerHTML += `<div class="card m0 centrator">${i+1}</div>`
    }

}

function addRiposte(e) {
    let x = "";
    e.risposte.forEach(g => x += `<li class="m0">${g}</li>`);
    return x;
}

function eventListenerDomande(e) {
    let ogg = e.target
    if (ogg.tagName == "LI") {
        console.log(ogg.innerHTML)
        rispondi(ogg)
    }
}

function quizFinito() {
    removeHide(document.querySelector(".modal"))

    listaTabDom.forEach(element => {
        element.classList.add("pointer")
        element.addEventListener("click", function (e) {
            listaHtmlDomande.forEach(element => {
                addHide(element)
            });
            let ogg = e.target
            domandaCorrente = ogg.innerHTML-1
            visualizzaDomanda()
        })
    });
}


function visualizzaDomanda() {
    console.log(domandaCorrente)
    removeHide(listaHtmlDomande[domandaCorrente])
}

function rispondi(ogg) {
    if (domande[domandaCorrente].rispostaCorretta == ogg.innerHTML) {
        listaTabDom[domandaCorrente].classList.add("corretto")
        ogg.classList.add("corretto")
    }
    else {
        listaTabDom[domandaCorrente].classList.add("sbagliato")
        ogg.classList.add("sbagliato")

        let l = listaHtmlDomande[domandaCorrente].querySelectorAll("li")

        for (let i = 0; i < l.length; i++) {
            if (l[i].innerHTML == domande[domandaCorrente].rispostaCorretta) {
                l[i].classList.add("corretto")
            }
            
        }
    } 
    

    removeFreccia(listaTabDom[domandaCorrente])


    if (domandaCorrente === domande.length-1) {
        divDomanda.removeEventListener("click", eventListenerDomande)
        divDomanda.classList.add("no-pointer")
        quizFinito()
    }
    else addHide(listaHtmlDomande[domandaCorrente])
    //mettere finestra modale

    domandaCorrente++

    removeHide(listaHtmlDomande[domandaCorrente])
    addFreccia(listaTabDom[domandaCorrente])
    
}



function addFreccia(ogg) {
    ogg.classList.add("freccia")
}
function removeFreccia(ogg) {
    ogg.classList.remove("freccia")
}

function addHide(ogg) {
    ogg.classList.add("hide")
}

function removeHide(ogg) {
    ogg.classList.remove("hide")
}

/*animazione da completare*/
/*function assStileFine(ogg, classe, visione) {
    (async () => {
        ogg.classList.add(classe)
        await delay(TEMPOFINE);
        visione ? addHide(ogg) : removeHide(ogg)
        ogg.classList.toggle(classe)
      })();
}*/

