const form = document.information

form.addEventListener("submit", baddieOne)
form.addEventListener("submit", baddieTwo)
form.addEventListener("submit", baddieThree)

function baddieOne (e) {
    e.preventDefault ()

    const goomba = form.goombas.value

    const goombaAdd = (goomba * 5)

    form.goombas.value = ""

    const total = document.createElement("div")
    total.textContent = goombaAdd + " coins"
    document.getElementById("gTotal").append(total)

}

function baddieTwo (e) {
    e.preventDefault ()
    const bobomb = form.bobombs.value

    const bobombAdd = (bobomb * 7)

    form.bobombs.value = ""

    const total = document.createElement("div")
    total.textContent = bobombAdd + " coins"
    document.getElementById("bTotal").append(total)

}

function baddieThree (e) {
    e.preventDefault ()
    
    const cheepCheep = form.cheepCheeps.value

    const cheepCheepAdd = (cheepCheep * 11)

    form.cheepCheeps.value = ""

    const total = document.createElement("div")
    total.textContent = cheepCheepAdd + " coins"
    document.getElementById("cTotal").append(total)

}