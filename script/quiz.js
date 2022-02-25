const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const TEMPOFINE = 500
let divDomanda
let tabellaDomande
let domandaCorrente = 0
let listaHtmlDomande 
let listaTabDom

const domande = [
    {
        titolo : "Domanda soo iocwio i",  
        risposte : ["risposta 1", "risposta 2", "risposta 1", "risposta 1"],
        rispostaCorretta : "risposta 2",
    },
    {
        titolo : "Domanda soo iocwio i",  
        risposte : ["risposta 1", "risposta 2", "risposta 1", "risposta 1"],
        rispostaCorretta : "risposta 2",
    },
    {
        titolo : "Domanda soo iocwio i",  
        risposte : ["risposta 1", "risposta 2", "risposta 1", "risposta 1"],
        rispostaCorretta : "risposta 2",
    },
    {
        titolo : "Domanda soo iocwio i",  
        risposte : ["risposta 1", "risposta 2", "risposta 1", "risposta 1"],
        rispostaCorretta : "risposta 2",
    },
    {
        titolo : "Domanda soo iocwio i",  
        risposte : ["risposta 1", "risposta 2", "risposta 1", "risposta 1"],
        rispostaCorretta : "risposta 2",
    },
    {
        titolo : "Domanda soo iocwio i",  
        risposte : ["risposta 1", "risposta 2", "risposta 1", "risposta 1"],
        rispostaCorretta : "risposta 2",
    },
    {
        titolo : "Domanda soo iocwio i",  
        risposte : ["risposta 1", "risposta 2", "risposta 1", "risposta 1"],
        rispostaCorretta : "risposta 2",
    }
]


window.onload = function() {
    tabellaDomande = document.querySelector(".tabella-domande")
    divDomanda = document.querySelector(".domanda")

    divDomanda.addEventListener("click", function(e) {
        let ogg = e.target
        if (ogg.tagName == "LI") {
            console.log(ogg.innerHTML)
            rispondi(ogg)
        }
    })

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


function rispondi(ogg) {
    if (domande[domandaCorrente].rispostaCorretta == ogg.innerHTML) {
        listaTabDom[domandaCorrente].classList.add("blue")
    }
    else listaTabDom[domandaCorrente].classList.add("red")

    removeFreccia(listaTabDom[domandaCorrente])
    assStileFine(listaHtmlDomande[domandaCorrente], "slide-out", true)

    domandaCorrente++

    if (domandaCorrente === domande.length) {
        console.log("dio")
        divDomanda.removeEventListener("click")
    }

    //mettere finestra modale

    addFreccia(listaTabDom[domandaCorrente])
    assStileFine(listaHtmlDomande[domandaCorrente], "slide-in", false)
    
}

function eventListenerDomande() {
    
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
function assStileFine(ogg, classe, visione) {
    (async () => {
        ogg.classList.add(classe)
        await delay(TEMPOFINE);
        visione ? addHide(ogg) : removeHide(ogg)
        ogg.classList.toggle(classe)
      })();
}

