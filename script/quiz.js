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

