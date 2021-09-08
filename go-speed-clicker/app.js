const clicks = document.getElementById("button")
let count = localStorage.number || 0;

document.addEventListener('click', function() {
    count++
    clicks.textContent = count

    localStorage.number = count

    clicks.textContent = localStorage.number
})



