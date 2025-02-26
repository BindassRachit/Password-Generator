
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = ".,></?':;{}[]\|()*&^%$#@!_+=-";

//selector.. 

const passBox = document.getElementById("pass-box");
const lowerinput = document.getElementById("lower-case");
const upperinput = document.getElementById("upper-case");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const totalchar = document.getElementById("total-char");
const slider1 = document.querySelector("#slider1");
const slider2 = document.querySelector("#slider2");
const slider3 = document.querySelector("#slider3");
const slider4 = document.querySelector("#slider4");
const slider5 = document.querySelector("#slider5");
const paragraph = document.querySelector("#paragraph");


//selector off


//function in 

const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassward = (passward = "") => {
    if (upperinput.checked) {
        passward += getRandomData(upperSet)
    }
    if (lowerinput.checked) {
        passward += getRandomData(lowerSet)
    }
    if (number.checked) {
        passward += getRandomData(numberSet)
    }
    if (symbol.checked) {
        passward += getRandomData(symbolSet)
    }
    if (passward.length < totalchar.value) {
        return generatePassward(passward)
    }
    
    if (totalchar.value > 1){
        slider1.style.transform =`translateX(0px)`;
        slider2.style.transform =`translateX(-5000px)`;
        slider3.style.transform =`translateX(-5000px)`;
        slider4.style.transform =`translateX(-5000px)`;
        slider5.style.transform =`translateX(-5000px)`;
        paragraph.innerText = ("Very Week Passward");
    }
    if (totalchar.value > 6){
        slider1.style.transform =`translateX(-600px)`;
        slider2.style.transform =`translateX(-500px)`;
        slider3.style.transform =`translateX(-5000px)`;
        slider4.style.transform =`translateX(-5000px)`;
        slider5.style.transform =`translateX(-5000px)`;
        paragraph.innerText = ("Week Passward");
    }
    if (totalchar.value >= 10){
        slider2.style.transform =`translateX(-1100px)`;
        slider3.style.transform =`translateX(-1000px)`;  
        paragraph.innerText = ("Good Passward");
    }
    if (totalchar.value >= 14){
        slider3.style.transform =`translateX(-1600px)`;
        slider4.style.transform =`translateX(-1500px)`;
        paragraph.innerText = ("Strong Passward");
    }
    if (totalchar.value >= 18){
        slider4.style.transform =`translateX(-2200px)`;
        slider5.style.transform =`translateX(-2000px)`;
        paragraph.innerText = ("Very Strong Passward");
    }
    
    passBox.innerText = trunckateString(passward,totalchar.value);

}

generatePassward();

document.getElementById("btn").addEventListener(
    "click", 
    function(){
        generatePassward();  // function call
    }
)

function trunckateString(str, num){
    if (str.length > num) {
        let substr = str.substring(0, num);
        return substr;
    }
    else {
        return str;
    }
}