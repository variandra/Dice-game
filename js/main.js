// const numberOfd4 = document.querySelector("#numberOfd4");
// const numberOfd6 = document.querySelector("#numberOfd6");
// const numberOfd8 = document.querySelector("#numberOfd8");
// const numberOfd10 = document.querySelector("#numberOfd10");
// const numberOfd12 = document.querySelector("#numberOfd12");
// const numberOfd20 = document.querySelector("#numberOfd20");

const  d4results = document.querySelector("#d4");
const  d6results = document.querySelector("#d6");
const  d8results = document.querySelector("#d8");
const d10results = document.querySelector("#d10");
const d12results = document.querySelector("#d12");
const d20results = document.querySelector("#d20");
const  d4total = document.querySelector("#d4total");
const  d6total = document.querySelector("#d6total");
const  d8total = document.querySelector("#d8total");
const d10total = document.querySelector("#d10total");
const d12total = document.querySelector("#d12total");
const d20total = document.querySelector("#d20total");

let dieRolls = [];
let diceRollTotal;
let showResultsButton = document.querySelector("#showResultsButton");
let rollButton = document.querySelector("#roll");
let inputarray = document.querySelectorAll("input");
let allDice = document.querySelector("#allDice");
let clear = document.querySelector("#clear");


let d4Total = 0;
let d6Total = 0;
let d8Total = 0;
let d10Total = 0;
let d12Total = 0;
let d20Total = 0;

rollButton.addEventListener("click", () =>{
    rollEM();
    showResultButton();
} );

clear.addEventListener("click", () =>{
    dieRolls = [];
    d4results.innerHTML = "";
    d6results.innerHTML = "";
    d8results.innerHTML = "";
    d10results.innerHTML = "";
    d12results.innerHTML = "";
    d20results.innerHTML = "";
    d4total.innerHTML = "";
    d6total.innerHTML = "";
    d8total.innerHTML = "";
    d10total.innerHTML = "";
    d12total.innerHTML = "";
    d20total.innerHTML = "";
    d4Total = 0;
    d6Total = 0;
    d8Total = 0;
    d10Total = 0;
    d12Total = 0;
    d20Total = 0;
} );
showResultsButton.addEventListener("click", () =>{
    showResult();
} );


function rollEM(){
    
    for(let i=0; i < inputarray.length; i++){
        let element = inputarray[i];
        let diceSides = element.getAttribute("data-diceSides")
        for(let j=0; j < element.value; j++){
            let roll = Math.random();
            let rollDice = (Math.floor(roll*diceSides)+1);
            if (diceSides == 6){
                let name = `D${diceSides} rolled:`
                switch(rollDice){
                    case 1: 
                        document.querySelector(`#d${diceSides}`).innerHTML += `${j+1}: ${rollDice} ⚀ <br/>`;
                        dieRolls.push({[name] : `${rollDice}`});
                        d6Total += rollDice;
                        document.querySelector(`#d${diceSides}total`).innerHTML = d6Total;
                    break;
                    case 2: 
                        document.querySelector(`#d${diceSides}`).innerHTML += `${j+1}: ${rollDice} ⚁ <br/>`;
                        dieRolls.push({[name]: `${rollDice}`});
                        d6Total += rollDice;
                        document.querySelector(`#d${diceSides}total`).innerHTML = d6Total;
                        break;
                    case 3: 
                        document.querySelector(`#d${diceSides}`).innerHTML += `${j+1}: ${rollDice} ⚂ <br/>`;
                        dieRolls.push({[name]: `${rollDice}`});
                        d6Total += rollDice;
                        document.querySelector(`#d${diceSides}total`).innerHTML = d6Total;
                        break;
                    case 4: 
                        document.querySelector(`#d${diceSides}`).innerHTML += `${j+1}: ${rollDice} ⚃ <br/>`;
                        dieRolls.push({[name]: `${rollDice}`});
                        d6Total += rollDice;
                        document.querySelector(`#d${diceSides}total`).innerHTML = d6Total;
                        break;
                    case 5: 
                        document.querySelector(`#d${diceSides}`).innerHTML += `${j+1}: ${rollDice} ⚄ <br/>`;
                        dieRolls.push({[name]: `${rollDice}`});
                        d6Total += rollDice;
                        document.querySelector(`#d${diceSides}total`).innerHTML = d6Total;
                        break;
                    case 6: 
                        document.querySelector(`#d${diceSides}`).innerHTML += `${j+1}: ${rollDice} ⚅ <br/>`;
                        dieRolls.push({[name]: `${rollDice}`});
                        d6Total += rollDice;
                        document.querySelector(`#d${diceSides}total`).innerHTML = d6Total;
                        break;
                    default:
                        break;
                    }
                    
                }else if(element.value === 0){
                    console.log("no dice to roll")
                }else{
                    let name = `D${diceSides} rolled:`
                    document.querySelector(`#d${diceSides}`).innerHTML += `${j+1}: ${rollDice} <br/>`;
                    dieRolls.push({[name]: `${rollDice}`});
                    d6Total += rollDice;
                    document.querySelector(`#d${diceSides}total`).innerHTML = d6Total;
                }
    
                    // console.log(`Number of dice to roll: ${element.value}`);
                    // console.log(`Number of side on dice: ${diceSides}`);
                    // console.log(`Result: ${roll}`)
                    // console.log(`Result: ${rollDice}`)
        }
    }
    console.log(d6Total)
}
function showResult(){
    if(allDice.style.display === ""){
        allDice.style.display = "flex";
    }
    else if(allDice.style.display === "flex"){
        allDice.style.display = "";
    };
}
function showResultButton(){
    showResultsButton.style.display = "inline-block";
    clear.style.display = "flex";
}
