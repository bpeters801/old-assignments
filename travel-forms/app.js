const form = document.travel
const submit = document.getElementById("submit")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let firstName = form.firstN.value;
    let lastName = form.lastN.value;
    let age = form.age.value;
    let gender = form.gender.value;
    let traveling = form.states.value;
    let diet = []
    let dietary = form.dietary;

    for (let i = 0; i < dietary.length; i++){
        if (dietary[i].checked){
            diet.push(dietary[i].value)
        }
    }

    alert(
        ("First Name: ") + firstName + ("\nLast Name: ") + lastName + ("\nAge: ") + age + ("\nGender: ") + gender + ("\nTraveling to: ") + traveling + ("\nDietary restrictions: ") + diet)
})

