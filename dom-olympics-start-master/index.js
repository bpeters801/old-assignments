const header = document.getElementById("header");
header.innerHTML = "Javascript Made This!!";
header.style.fontSize = "40px";
header.style.fontWeight = "bold";
header.style.textAlign = "center";

const title = document.createElement("title");
title.textContent = "[Brittani]";
title.style.display ="block";
header.append(title);
title.style.fontSize = "20px";
title.style.color ="peachpuff";

const subtitle = document.getElementById("subtitle");
subtitle.textContent = "wrote the JavaScript";
title.append(subtitle);
subtitle.style.color = "black";


const myRightMessage = document.querySelectorAll("div.message.right")
const newMessage =myRightMessage[0]
console.log (newMessage)
newMessage.textContent =("This is a new message!")
const newMessage2 =myRightMessage[1]
newMessage2.textContent =("Hello there!")
const leftMessage = document.querySelectorAll("div.message.left")
const newLMessage =leftMessage[0]
console.log (newLMessage)
newLMessage.textContent =("Today is an amazing day!!")
const newLmessage2 = leftMessage[1]
newLmessage2.textContent =("Have an amazing week!")

function clearInterval(){
    myRightMessage[0].textContent = "";
    myRightMessage[1].textContent = "";
    leftMessage[0].textContent = "";
    leftMessage[1].textContent = "";
    main.textContent = " ";
}
const clearButton = document.getElementById("clear-button")
clearButton.addEventListener("click", clearInterval)



const selectMenu = document.getElementById("theme-drop-down")
selectMenu[0].setAttribute("id","blueBrown")
selectMenu[1].setAttribute("id","redBlack")
selectMenu.addEventListener("change", function (){
    if (selectMenu.value === "theme-one") {
        const brownLeft = document.getElementsByClassName("left");
        for (i = 0; i < brownLeft.length; i++) {

            brownLeft[i].style.backgroundColor = "red";
        }
        const blueRight = document.getElementsByClassName("right");
        for (i = 0; i < blueRight.length; i++) {
            blueRight[i].style.backgroundColor = "lightBlue";
            blueRight[i].style.color = "black";
        }
    }
    else if(selectMenu.value === "theme-two")   {
        const redLeft = document.getElementsByClassName("left");
        for (i = 0; i < redLeft.length; i++) {
            redLeft[i].style.backgroundColor = "red";
        }
        const blackRight = document.getElementsByClassName("right");
        for (i = 0; i < blackRight.length; i++) {
            blackRight[i].style.backgroundColor = "black";
            blackRight[i].style.color = "white";
        }
    }
}
)
var form = document.getElementsByName("message")
var sendButton = form[0].getElementsByTagName("button")[0]
var newMsgValue = document.getElementById("input")

var textBox = document.getElementsByClassName("messages")[0]

sendButton.addEventListener("click", function addMsg(){
    var newMsg = document.createElement("div")
    newMsg.textContent = newMsgValue.value
    textBox.append(newMsg)
    console.log(textBox)
})








