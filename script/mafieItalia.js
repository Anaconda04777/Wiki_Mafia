let btnCamorra
let btnNdrangheta
let btnSacraCorona
let btnCosaNostra
let btnStidda

let currentModal
window.onload = function() {
    creazioneModali()

    btnCamorra = document.querySelector(".camorra")
    btnNdrangheta = document.querySelector(".ndrangheta")
    btnSacraCorona = document.querySelector(".sacra-corona-unita")
    btnStidda = document.querySelector(".stidda")
    btnCosaNostra = document.querySelector(".cosa-nostra")


    //apri modale in base alla card 
    btnCosaNostra.addEventListener("click", function(e) {
        currentModal = document.querySelector(".modal-cosa-nostra")
        removeHide(currentModal)
         
    })

    btnNdrangheta.addEventListener("click", function(e) {
        currentModal = document.querySelector(".modal-ndrangheta")
        removeHide(currentModal)
         
    })

    btnCamorra.addEventListener("click", function(e) {
        currentModal = document.querySelector(".modal-camorra")
        removeHide(currentModal)
         
    })

    btnSacraCorona.addEventListener("click", function(e) {
        currentModal = document.querySelector(".modal-sacra-corona-unita")
        removeHide(currentModal)
         
    })

    btnStidda.addEventListener("click", function(e) {
        currentModal = document.querySelector(".modal-stidda")
        removeHide(currentModal)
         
    })

    //chiudi modale
    document.querySelectorAll(".modal .card > div:first-child img")
                .forEach(i => i.addEventListener("click", function(e) {
                    addHide(currentModal)
                }))

    document.querySelectorAll(".modal")
                .forEach(i => i.addEventListener("click", function(e) {
                    console.log()
                    if (e.target.classList[0] === "modal" ) {
                        addHide(currentModal)    
                    }
                    
                }))
    
}

function addHide(ogg) {
    
    ogg.classList.add("hide")
}

function removeHide(ogg) {
    ogg.classList.remove("hide")
}

function creazioneModali() {
    document.querySelector("main").innerHTML += 
        `
        <div class="modal centrator modal-cosa-nostra hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Cosa Nostra</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    Cosa nostra ha una struttura verticistica, infatti la struttura di base di cosa nostra è la "Famiglia", governata
                    da un capo il quale ha come braccio destro un vicecapo nominato da esso assieme a dei consiglieri, quest'ultimi scelti da 
                    "Umini d'onore", organizzati in gruppi da 10, chiamati appunto decina. Ogni decina è comandata da un capodecina.
                    Tre o più famigli formano un "Mandamento", essi sono comandati dalla "Cupola", la quale ha un influenza provinciale.
                    I personaggi più famosi legati a Cosa Nostra sono: Totò Riina, Tommaso Buscetta e Francesco Messina Denaro
                </p>
                <div class="m0">
                    <h3>Codice d'onore</h3>
                    <ul>
                        <li>Non ci si può presentare da soli ad un altro amico nostro - se non è un terzo a farlo.</li>
                        <li>Non si guardano mogli di amici nostri. </li>
                        <li>Non si fanno comparati (patti) con gli sbirri.</li>
                        <li>Non si frequentano né taverne e né circoli.</li>
                        <li>Si è il dovere in qualsiasi momento di essere disponibile a cosa nostra. Anche se ce la moglie che sta per partorire.</li>
                        <li>Si rispettano in maniera categorica gli appuntamenti.</li>
                        <li>Si ci deve portare rispetto alla moglie.</li>
                        <li>Quando si è chiamati a sapere qualcosa si dovrà dire la verità.</li>
                        <li>Non ci si può appropriare di soldi che sono di altri e di altre famiglie.</li>
                        <li>Chi non può entrare a far parte di cosa nostra: chi ha un parente stretto nelle varie forze dell'ordine, chi ha tradimenti sentimentali in famiglia, chi ha un comportamento pessimo e che non tiene ai valori morali.</li>
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-camorra hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Camorra</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    La camorra, a differenza di cosa nostra, è molto più divisa. Essa conta moltissimi clan tra la provincia e la città. 
                    Per questo le faide tra i clan sono sempre state vivaci. Per la camorra la violenza è l'unica via per risolvere le dispute 
                    interne. Non essendoci un Boss che raccolga tutti i clan e quindi avendo una struttura frammentata, e più probabile che i capi clan
                    vengano spodestati da tenaci leve. Di conseguenza l'età media dei capi clan è piittosto bassa. A differenza di cosa nostra, il reclutamento
                    segue regole meno stringenti, i nuovi adepti vengono presi direttamente dalla strada.
                    Un altra caratteristica della camorra è quella di essere piuttosto infiltrata nella politica, o per lo meno è più palese rispetto ad altre
                    organizzazioni. 
                </p>
                <div class="m0">
                    <h3>Le principali attività economiche del clan</h3>
                    <p>Il narcotraffico è la fonte di reddito maggiore per i clan, ma di particolare la camorra ha la commercializzazione dei prodotti
                        contraffatti, specialmente a partire dalla crisi del 2008-2007. Non si può ovviamente non citare la terra dei fuochi e quindi 
                        lo smaltimento dei rifiuti, piaga importante del territorio.
                    </p>
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-ndrangheta hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">'Ndrangheta</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    L'Ndrangheta esercita un controllo capillare sul territorio grazie, appunto, al ricliclaggio di denaro e all'estorsione.
                    L'organizzazione è di tipo verticistico-orizzontale. Come unità di base troviamo l'ndrina, ovvero la famiglia; la differenza
                    con cosa nostra è che i membri sono legati da legami di sangue. A capo dell'ndrina c'è il capo 'ndrina.
                    Più 'ndrine formano una "Locale", essa è divisa in "Società Minore" e "Società Maggiore". Ogni Locale è diretta da una "Copiata",
                    un triumvirato composto dal Capo Bastone: "Manager" della Locale, dirige l'attività illecita sul territorio, dal Contabile: 
                    commercialista della Locale, dal Crimine: responsabile della pianificazione e dell'esecuzione delle attività illecite.
                    Le Locali sono riunite nelle "Camere di Controllo", le quali governano Localmente (in uno stato o in una provincia) la Locale.
                    Al vertice della struttura c'è "Provincia" la quale controlla tutte le Locali. Le cariche al suo interno sono, il Capo crimine 
                    massima carica all'interno della 'ndrangheta.

                </p>
                <div class="m0">
                    <h3>Le "Doti" tra Società Minore e Società Maggiore</h3>
                    <ul>
                        <li>
                            PICCIOTTO: è la prima dote della 'ndrangheta, che si può ottenere al compimento del 14° anno di età
                        </li>
                        <li>
                            CAMORRISTA: se un picciotto è “degno e meritevole” può diventare camorrista. 
                            I giovani d’onore possono essere battezzati direttamente come camorristi saltando la prima dote di picciotto
                        </li>
                        <li>
                            SGARRISTA: è l'ultima dote della società minore
                        </li>
                        <li>
                            SANTA: è la prima dote della società maggiore. Il "santista" è sia massone che 'ndranghetista
                        </li>
                        <li>
                            VANGELO: è la seconda dote della società maggiore e la ottengono solo personaggi eccelsi della 'ndrangheta, che prendono decisioni vitali
                        </li>
                        <li>
                            SANTA: è la prima dote della società maggiore. Il "santista" è sia massone che 'ndranghetista
                        </li>
                        <li>
                            PADRINO: È attribuita a un ristretto numero di 'ndranghetisti che godono di una serie di privilegi e altrettante responsabilità
                        </li>
                        <li>
                            ASSOCIAZIONE: è la dote concesso ai capi delle famiglie che si riuniscono in forma di Consiglio
                        </li>
                        
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-sacra-corona-unita hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Sacra Corona Unita</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    Originariamente il tipo di struttura della cosca doveva essere piramidali, formata da otto livelli gerarchici. 
                    Ma a causa dei conflitti interni per il controllo del territorio, si formo una struttura ad arcipelago.
                    La divisione territoriale funge paradossalmente da collante per l'organizzazione, la quale reculta a livello comunale.
                    Come nelle Camorra, anche nella SCU l'affiliazioni non prevede rituali particolari.
                    Il clan è diviso territorialmente e strutturalmente in tre parti: Società foggiana, Camorra Barese e La Sacra Corona Libera.
                    La divisione gerarchica all'interno di ogni clan è puramente simbolica, spesso il rango ottenuto non corrisponde all'effettivo potere
                    che può esercitare quell'affiliato. L'ultimo rango della scala è coperto da 8 individui, i quali compongono la "Società segretissima",
                    la quale comanda un corpo speciale chiamato la "Squadra della morte".
                </p>
                <div class="m0">
                    <h3>La divione gerarchica all'interno dei clan</h3>
                    <ul>
                        <li>Picciotteria</li>
                        <li>Camorrista</li>
                        <li>Sgarrista</li>
                        <li>Santista</li>
                        <li>Evangelista</li>
                        <li>Trequartista</li>
                        <li>Medaglioni della Società Maggiore</li>
                        <li>Medaglioni con Catena della Società Maggiore</li>
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-stidda hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Stidda</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                   La stidda nasce da alcuni giovani che si slegarono da Cosa Nostra formando una loro organizzazione criminale.
                   All'inizio, per sopravvivere, non entrarono in conflitto con il clan maggiore. Questa situazione cambiò quando
                   grandi nomi di Cosa Nostra iniziarono, a causa di faide interne allo stesso clan, ad unirsi alla Stidda. Così 
                   iniaziò la guerra a Cosa Nostra. Grazie all'impiego di giovanissimi il clan ne uscì vincitore. La grande risposta dello 
                   stato in seguito all'uccisione del giudice Rosario Livitano, costrinse la Stidda ad allearsi con Cosa Nostra.
                   La struttura è molto simile a quella di Cosa Nostro, ma molto meno organizzata. Solo negli anni 90' l'organizzazione
                   unì maggiormente la struttura e fece entrare la consuetudine di far incontrare i capi famiglia ogni tot tempo per decidere
                   obbiettivi, logistica e controllo del territorio.
                </p>
                <div class="m0">
                    <h3>La lotta con Cosa Nostra</h3>
                    <p>
                        Per vincere gli Stiddari reclutarono giovanissimi tra gli 11 e i 15 anni a cui 
                        veniva insegnata l'arte dell'omicidio, se non fossero stati in grado di compiere il loro lavoro, sarebbero stati uccisi
                        dai loro stessi compagni. Così facendo la Stidda riusci a paralizzare la reazione di Cosa Nostra, non capendo da chi venisse
                        il pericolo e vide i boss che controllavano le toriche roccaforti di Porto Empedocle, di Camastra, di Palma di Montechiaro, 
                        di Canicattì, di Rocalmuto, di Ravanusa e di Campobello di Licata, venir brutalmente uccisi.
                        La goccia che fece traboccare il vaso fu la spartizione degli appalti per la costruzione della diga Disueri.
                        L'epicentro della guerra fu Geli in cui in 20 minuti furono uccise 8 persone. La guerra causò
                        500 morti. Ma dopo l'omicidio del giudice Livitano e la strage di Gela lo stato colpi così duramente l'organizzazione
                        che per evitare di essere spazzata vià fu costretta ad allearsi con Cosa Nostra, spartendo a metà tra i due clan le quote degli
                        illeciti.
                    </p>
                    
                </div>
            </div>        
        </div>


        `
        
    
}


