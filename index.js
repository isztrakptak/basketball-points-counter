let homeScore = document.getElementById("home-scoreboard")
let guestScore = document.getElementById("guest-scoreboard")

homeCount = 0
guestCount = 0

function add1Pt() {
    homeCount += 1
    homeScore.textContent = homeCount
}

function add2Pt() {
    homeCount += 2
    homeScore.textContent = homeCount
}

function add3Pt() {
    homeCount += 3 
    homeScore.textContent = homeCount
    
}

function add1PtGuest() {
    guestCount += 1
    guestScore.textContent = guestCount
}

function add2PtGuest() {
    guestCount += 2
    guestScore.textContent = guestCount
}

function add3PtGuest() {
    guestCount += 3 
    guestScore.textContent = guestCount
    
}