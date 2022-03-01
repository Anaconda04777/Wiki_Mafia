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
        titolo : "Quali di queste NON è nelle regole fondamentali del codice di comportamento della Yakuza? ",  
        risposte : ["non disobbedire o causare problemi ai tuoi superiori", "Un affiliato non può avere la barba",
                 "non lottare con i tuoi compagni o non rompere l'armonia dell'organizzazione", "non sprecare i fondi dell'organizzazione"],
        rispostaCorretta : "Un affiliato non può avere la barba",
    },
    {
        titolo : "Su quali di questi testi è basata la simbologia numerica della Triade?",  
        risposte : ["Il Libro dei mutamenti", "Il Libro dei riti", "L'I Ching", "Gli Annali delle primavere e degli autunni "],
        rispostaCorretta : "risposta 2",
    },
    {
        titolo : "Quali di queste azioni è praticata nel rito della Triade?",  
        risposte : ["Devi dimostrare di saper uccidere", "Devi bere sangue umano", "Ti viene fatto un taglio sul palmo", "Devi passare sotto un arco di spade"],
        rispostaCorretta : "Devi passare sotto un arco di spade",
    },
    {
        titolo : "Che tipo di struttura adotta l'Organizacija?",  
        risposte : ["Ad arcipelago", "Orizzontale", "Verticale", "Orizzontale-Verticale"],
        rispostaCorretta : "Orizzontale",
    },
    {
        titolo : "Quali di quste categorie della mafia russa è la più potente?",  
        risposte : ["Vor v zakone", "I Grandi gruppi", "I piccolo gruppi di strada", "La cupola"],
        rispostaCorretta : "Vor v zakone",
    },
    {
        titolo : "Con chi entrò in conflitto il cartello di Sinaloa negli anni '80?",  
        risposte : ["Cartello di Guadalajara", "Cartello di Juárez", "Cartello di Tijuana", "Cartello del Golfo"],
        rispostaCorretta : "Cartello di Tijuana",
    },
    {
        titolo : "In quali di questi continenti NON opera il cartello di Sinaloa?",  
        risposte : ["Africa", "America", "Europa", "Asia", "Opaera in tutti questi"],
        rispostaCorretta : "Opaera in tutti questi",
    },
    {
        titolo : "La mafia italo-americana ammetti al suo interno non italiani?",  
        risposte : ["Si", "No", "No, ma possono collaborare"],
        rispostaCorretta : "No, ma possono collaborare",
    },
    {
        titolo : "Oggi cosa NON usa Cosa Nostra America per operare nell'ombra?",  
        risposte : ["Gang di strada", "Bikers fuorilegge", "Giovani ragazzi presi dalla strada"],
        rispostaCorretta : "Giovani ragazzi presi dalla strada",
    },
    {
        titolo : "La Famiglia di Cosa Nostra è per forza legata da rapporti di sangue?",  
        risposte : ["Si", "No"],
        rispostaCorretta : "No",
    },
    {
        titolo : "Quali di questi NON è un requisito per entrare in Cosa Nostra?",  
        risposte : ["Non avere un parente nelle forze dell'ordine", "Non devi aver tradito la tua famiglia",
                 "Avere dei saldi valori morali", "Essere abile nell'uso del coltello"],
        rispostaCorretta : "Essere abile nell'uso del coltello",
    },
    {
        titolo : "Rispetto a Cosa Nostra la Camorra è:",  
        risposte : ["Meno pericolosa", "Di recente formazione",
                 "Divisa in clan", "Stata molto più attiva negli anni di piombo"],
        rispostaCorretta : "Divisa in clan",
    },
    {
        titolo : "Quali di questi reati è il principale della Camorra?",  
        risposte : ["Il riciclaggio", "L'usura",
                 "Il narcotraffico", "Lo smaltimento di rifiuti"],
        rispostaCorretta : "Il narcotraffico",
    },
    {
        titolo : "Come si chiama l'entità di base dell'Ndrangheta?",  
        risposte : ["La Locale", "La Famiglia",
                 "La Provincia", "L'Andrina"],
        rispostaCorretta : "L'Andrina",
    },
    {
        titolo : "Di cosa si occupa il Capo Bastone nell'Ndrangheta?",  
        risposte : ["Si occupa degli Omicidi", "Si occupa dello spaccio nelle piazze",
                 "Dirige l'attività illecita sul territorio", "E' il responsabile della pianificazione e dell'esecuzione delle attività illecite"],
        rispostaCorretta : "Dirige l'attività illecita sul territorio",
    },
    {
        titolo : "Quali di questi ruoli NON fa parte della divisione gerarchica della Sacra-Corona-Unita?",  
        risposte : ["Camorrista", "Evangelista",
                 "Medaglioni con Catena della Società Maggiore", "Santificato"],
        rispostaCorretta : "Santificato",
    },
    {
        titolo : "Che tipo di approccio decide di adottare la Sacra-Corona-Unita sul territorio?",  
        risposte : ["Cerca di infiltrarsi il più possibile nella politica", "Cerca di mantenere un controllo capillare sulla popolazione tramite atti violenti in piena vista",
                 "Predilige una strategia di infiltrazione e mimetizzazione nel tessuto sociale e imprenditoriale"],
        rispostaCorretta : "Predilige una strategia di infiltrazione e mimetizzazione nel tessuto sociale e imprenditoriale",
    },
    {
        titolo : "Chi fu il giudice ucciso dalla Stidda?",  
        risposte : ["Domenico Abatemarco", "Rosario Livitano",
                 "Ludovico Acerbi", "Giovani Falcone", "Paolo Borsellino"],
        rispostaCorretta : "Rosario Livitano",
    },
    {
        titolo : "Cosa adottò la Stidda per battere Cosa Nostra?",  
        risposte : ["Giovanissimi tra gli 11 e i 15 anni", "Armi avanzate importate dal medio oriente",
                 "Il supporto della Camorra", "La collaborazione con lo stato"],
        rispostaCorretta : "Giovanissimi tra gli 11 e i 15 anni",
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
                <li class="m0">${e.risposte[0]}</li>
                <li class="m0">${e.risposte[1]}</li>
                <li class="m0">${e.risposte[2]}</li>
                <li class="m0">${e.risposte[3]}</li>
            </ol>
        </div>
        `
    });

    
    
    //tabella domande
    for (let i = 0; i < domande.length; i++) {
        tabellaDomande.innerHTML += `<div class="card m0 centrator">${i+1}</div>`
    }

    

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

