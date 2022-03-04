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
                    <h2 class="m0">Yakuza</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/mafieEstero/modalYakuza.jpg" alt="Yakuza" class="m0 stile-img">
                <p class="m0">
                    Una particolarità della Yakuza che la differenzia dalle altre organizzazioni mafiose, e quella
                    di avere un riconoscimento legale nella Costituzione giapponese, di conseguenza può permettersi di operare alla luce del sole.
                    Un'altra particolarità riguarda la sua struttura conosciuta come Oyabun-kobun, letteralmente "padre-figlio".
                    Questa struttura è fondata su una complessa rete di relazioni con forti legami interni, sia orizzontali che verticali,
                    alla base della struttura ci sono le Ikka i cui membri sono legati tra loro da legami di sangue (padre-figlio, fratello-fratello)
                    ogni famiglia è suddivisa in 4 livelli: i Saiko kanbu (dirigenti supremi), al vertice della famiglia,
                    i Kanbu (dirigenti), i Waka-chu (giovani organizzatori), i Jun kosei-in (apprendisti), incaricati della protezione dei 
                    membri anziani e dediti a svariate mansioni (rispondere al telefono, autisti, servire gli ospiti), possono essere jun kosei-in
                    anche membri esterni alla famiglia. I reati in cui sono specializzati sono: Speculazioni finanziarie e immobiliari, traffico di droga e armi,
                    estorsioni, gioco d'azzardo, sfruttamento della prostituzione e infiltrazione nelle attività aziendali.  

                </p>
                <div class="m0">
                    <h3>Wakamono no kokoroe, il codice interno</h3>
                    <p>
                        Il forte controllo interno è dato dal codice d'onore adottato dalla Yakuza, 
                        il quale sancisce fedeltà assoluta all’organizzazione e una ferrea disciplina da seguire. 
                        La fedeltà è premiata tramite promozioni o premi in denaro, l'infedeltà è punita con alcune 
                        piccole offese all'onore dell'affiliato (la rasatura dei capelli, la reclusione temporanea, 
                        multe salate e una temporanea espulsione); oppure, nei casi più gravi, con il linciaggio, 
                        l'amputazione di un dito, l'espulsione definitiva e, infine, la morte.
                        Le 5 regole fondamentali sono:
                    </p>
                    <ul>
                        <li>
                            non disobbedire o causare problemi ai tuoi superiori;
                        </li>
                        <li>
                            non tradire il gruppo o i tuoi compagni;
                        </li>
                        <li>
                            non lottare con i tuoi compagni o non rompere l'armonia dell'organizzazione;
                        </li>
                        <li>
                            non sprecare i fondi dell'organizzazione;
                        </li>
                        <li>   
                            non toccare alcuna donna dei membri dell'organizzazione.
                        </li>
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-camorra hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">La Triade</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/mafieEstero/modalTriade.jpg" alt="Guan Yu" class="m0 stile-img">
                <p class="m0">
                    La Triade è divisa in gruppi che vanno da piccole bande di strada
                    alle più potenti come: Sun Yee On, Wo Shing Wo e 14K.
                    La struttura è gerarchica, essa è divisa in tanti gruppi con valori di influenza diversi. 
                    Le posizioni all’interno delle cosche sono rappresentati da numeri simbolici, basati sull' 
                    I Ching uno dei primi testi classici cinesi:
                </p>
                <ul>
                    <li>
                        Il 489 si riferisce alla Montagna o Capo dragone (il boss)
                    </li>
                    <li>
                        Il 438 è usato per il Vice capo montagna (il vice-boss)
                    </li>
                    <li>
                        Il 426 è utilizzato per il capo dell'ala militare (il caporegime) che si occupa delle azioni difensive ed offensive
                    </li>
                    <li>
                        Il 415 si occupa del lato economico, ricercando risorse e fornendo consigli, una sorta di Consigliere
                    </li>
                    <li>
                        Il 432 è deputato ai collegamenti tra le varie unità
                    </li>
                    <li>
                        Il 49 indica la posizione di quello che sarebbe il "soldato"
                    </li>
                    <li>
                        Le "lanterne blu" sono invece coloro che non sono ancora stati affiliati all'organizzazione, 
                        gli equivalenti degli "associati" nella mafia siciliana.
                    </li>
                </ul>
                <div class="m0">
                    <h3>Il rito di affiliazione</h3>
                    <p>
                        Il rito di affiliazione è molto particolare: 
                        la cerimonia si svolge di fronte ad un altare dedicato a Guan Yu (un generale dell’antica Cina), 
                        sono presenti anche dell'incenso e un animale sacrificale. L’aspirante affiliato deve bere 
                        del vino misto a un po’ del sangue dell’animale sacrificato e deve passare sotto un arco di spade 
                        recitando la formula di giuramento delle Triadi. In seguito un foglio sopra il quale è scritto 
                        il giuramento viene bruciato per confermare che egli manterrà i suoi impegni verso gli dei. 
                        Tre dita della mano sinistra vengono sollevate come gesto vincolante 
                    </p>
                </div>
                <p>
                            
                </p>
            </div>        
        </div>

        <div class="modal centrator modal-ndrangheta hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Organizacija</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/mafieEstero/modalRussa.jpg" alt="vor v zakone" class="m0 stile-img">
                <p class="m0">
                    L’Organizacija, a differenza di Cosa Nostra, non presenta una struttura verticistica. 
                    Non c’è una “Cupola” che dirige tutte le bande. Esse controllano province o intere repubbliche. 
                    Possiamo dividere in tre categorie le cosche:
                    Piccoli gruppi composti da 10/15 persone, indipendenti dall'organizzazione ma ad essa affiliati, 
                    Grandi brigate di 200/300 persone, che controllano i gruppi più piccoli 
                    e, sparse su tutto il territorio, i cosiddetti "ladri nella legge" (vor v zakone), 
                    sono le cosche con più potere, sia economico che politico, spesso sono avvocati, medici, ingegneri e politici. 
                    Sono in grado di svolgere grandi operazioni finanziarie, avendo a disposizione ingenti capitali.
                    I reati principiali sono: frode, riciclaggio internazionale di denaro, estorsione, traffico di droga,
                    traffico di armi e prostituzione.
                </p>
                <div class="m0">
                    <h3>Modus Operandi:</h3>
                    <p>
                        gli affiliati ai gruppi più potenti sono spesso industriali, o più in generale, 
                        uomini d'affari di successo, molti di loro sono immobiliaristi e costruttori; 
                        questo perché la mafia usa spesso l’edilizia, prima con la costruzione, poi con la gestione, 
                        per riciclare il denaro. Il traffico di droga è particolarmente sviluppato fuori dai confini dell’ex Unione Sovietica, 
                        assieme a quello di organi e di armi. La violenza una un tempo diffusa e spietata spaventa 
                        ancora funzionari pubblici o imprenditori privati, i quali o si affidano a agenzie di sicurezza oppure 
                        si piegano alle organizzazioni.
                    </p>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-sacra-corona-unita hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Il Cartello di Sinaloa</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/mafieEstero/modalSinaloa.png" alt="cartello di Sinaloa" class="m0 stile-img">
                <p class="m0">
                    Originario degli stati di Sinaloa, Sonora e Chihuahua; trova le sue origini negli anni 60.
                    Le droghe più esportate sono: marijuana, eroina, cocaina e metanfetamina.
                    Il  funzionamento del cartello è simile a un’alleanza in cui ogni membro o subalterno controlla 
                    attività e zone di competenza, ma giurano fedeltà ai capi massimi e si proteggono a vicenda  
                    Con regole di obbedienza simili alla mafia Italiana. Le organizzazioni Messicane sono note per la loro violenza 
                    e le continue guerre tra i vari cartelli. Basti pensare che negli anni '80 il cartello di Sinaloa entro in 
                    conflitto con il Cartello di Tijuana; entrambi i cartelli erano figli del Cartello di Guadalajara, 
                    che si sciolse dopo l’arresto del Boss  Miguel Ángel Félix Gallardo.
                    Alla fine degli anni '80 Sinaloa si alleò con il  Cartello di Juárez in contrasto con il Cartello del Golfo e di Tijuana.
                    Ad oggi il cartello di Tijuana è stato quasi sconfitto.
                    Nel 2005, il Cartello di Beltrán Leyva, che era alleato con Sinaloa, ruppe l'alleanza. E già nel 2006, 
                    il cartello di Sinaloa aveva eliminato completamente la presenza del cartello rivale al confine e 
                    si sospettava che riuscisse a corrompere i funzionari del governo statale. Dal febbraio 2010, 
                    i principali cartelli messicani si sono divisi in due alleanze, una composta dal Cartello di Juarez, 
                    il cartello di TIjuana e il Cartello di Beltrán Leyva e l'altro con il Cartello del Golfo, Sinaloa e
                    i Caballeros Templarios. L'alleanza di questi ultimi terminerà con il predominio quasi totale di Sinaloa nelle 
                    aree di influenza dei vecchi nemici e alleati.

                </p>
            </div>        
        </div>

        <div class="modal centrator modal-stidda hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Mafia Italo-Americana</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                
                <p class="m0">
                    Nonostante non sia più potente come negli 30-40 del 900, non è ancora stata superata delle gang di strada o dalle mafie russe
                    /cinesi. Le aree di maggiore influenza negli stati uniti sono: East Coast, Midwest, New England e Florida,in Canada nel Québec.
                    La struttura familiare di Cosa Nostra è stata mantenuta dagli immigrati anche in America. 
                    Negli ultimi anni molte famiglie storiche come quella di Now Orleans non esistono più o hanno 
                    diminuito affiliati tra i loro ranghi. Inoltre vasti settori criminali sono stati conquistati da 
                    altre mafie o bande di strada, in genere messicani, russi o cinesi. Ad ogni modo si tratta di bande 
                    o cartelli in lotta fra loro. Si tratta comunque di organizzazioni meno potenti e radicate rispetto 
                    a Cosa Nostra Americana. Nonostante ciò la mafia italiana in America è stata costretta ad evolversi, cercando 
                    di operare sempre più nell’ombra e reclutando bande di strada o anche di bikers (motociclisti) fuorilegge 
                    per attuare i propri crimini. Oppure variando l’organizzazione, come ad esempio fa la famiglia Genovese: 
                    non possiedono più un unico boss, ma la leadership viene passata continuamente di mano in mano a vari boss, 
                    a seconda delle convenienze, con un sistema a rotazione, in modo tale da far perdere le proprie tracce.

                </p>
                <img src="../Assets/mafieEstero/modalItaloamerica.jpg" alt="vor v zakone" class="m0 stile-img">
                <div class="m0">
                    <h3>Codice d'onore</h3>
                    <ul>
                        <li>
                            Nazionalità: ogni membro deve essere di origini italiane o italoamericane, 
                            e di sesso maschile. Inoltre bisogna che venga presentato al resto della famiglia da un altro made man (gli uomini d'onore di Cosa Nostra), 
                            o talvolta due, che devono conoscerlo da almeno 10-15 anni, per garantire la sua fiducia e capacità all'organizzazione.
                        </li>
                        <li>
                            Omertà: regola del silenzio assoluto. Il made man non deve parlare mai con nessuno della 
                            famiglia di cui entra a far parte, né tantomeno rivelarne le attività.
                        </li>
                        <li>
                            Segreti di famiglia: I membri non hanno diritto di parlare degli affari della famiglia a dei non-membri.
                        </li>
                        <li>
                            Sangue per sangue: se un membro della famiglia è stato ucciso da un membro di un'altra famiglia, 
                            nessuno può vendicarlo, fino a quando non sia il boss a concedere tale permesso
                        </li>
                        <li>
                            Niente lotte fra i membri: non devono esserci faide tra i membri della famiglia, né con armi, né a mani nude.
                        </li>
                        <li>
                            Omaggio: ogni membro deve pagare una volta al mese il boss con una quota delle sue entrate.
                        </li>
                        <li>
                            Niente adulterio: i membri non hanno il diritto di commettere adulterio con la moglie di un altro membro della famiglia.
                        </li>
                        <li>
                            Niente barba: tutti i membri devono rigorosamente tagliarsi la barba
                        </li>
                    </ul>
                </div>
            </div>        
        </div>


        `
        
    
}


