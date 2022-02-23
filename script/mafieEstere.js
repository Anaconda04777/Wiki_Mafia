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
                    <h2 class="m0">Integer dui turpis</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit udin nibh sollicitudin sit amet. 
                    Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit 
                </p>
                <div class="m0">
                    <h3>Nullam vitae mi faucibus</h3>
                    <ul>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-camorra hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Integer dui turpis</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit udin nibh sollicitudin sit amet. 
                    Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit 
                </p>
                <div class="m0">
                    <h3>Nullam vitae mi faucibus</h3>
                    <ul>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-ndrangheta hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Integer dui turpis</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit udin nibh sollicitudin sit amet. 
                    Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit 
                </p>
                <div class="m0">
                    <h3>Nullam vitae mi faucibus</h3>
                    <ul>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-sacra-corona-unita hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Integer dui turpis</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit udin nibh sollicitudin sit amet. 
                    Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit 
                </p>
                <div class="m0">
                    <h3>Nullam vitae mi faucibus</h3>
                    <ul>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                    </ul>
                </div>
            </div>        
        </div>

        <div class="modal centrator modal-stidda hide">
            <div class="card bg2">
                <div>
                    <h2 class="m0">Integer dui turpis</h2>
                    <img src="../Assets/icons/close.png" alt="Facebook" class="m0">
                </div>
                
                <img src="../Assets/xi.jpeg" alt="Facebook" class="m0">
                <p class="m0">
                    udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit udin nibh sollicitudin sit amet. 
                    Proin et magna eget lectus egestas rhoncus 
                    ac vitae tellus. Nullam vitae mi faucibus enim facilisis venenatis sit 
                </p>
                <div class="m0">
                    <h3>Nullam vitae mi faucibus</h3>
                    <ul>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                        <li>
                            udin nibh sollicitudin sit amet. Proin et magna eget lectus egestas rhoncus 
                            ac vitae tellus.
                        </li>
                    </ul>
                </div>
            </div>        
        </div>


        `
        
    
}


