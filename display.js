const container = document.querySelector(".container");
const widthOfSingleBar = 10;
let numberOfBars = (container.offsetWidth / widthOfSingleBar).toFixed(0);
let DiffBetweenHeight = (container.offsetHeight / numberOfBars).toFixed(1);
let maxHeight = container.offsetHeight.toFixed(0);
var Array = [];   // it contains refernce to all the bars and their height

// shuffleArray();
createBars();
shuffleArray(Array);
displayBars(Array);
// console.log(Array);


function shuffleArray(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}


//  it creates bar (elements) and pushes it to Array
function createBars(){
    Array = [];
    for(let i = 1; i <= numberOfBars; i++){
        let bar = document.createElement("div");
        bar.classList.add("bar");
        // container.append(bar);
        bar.style.height = (widthOfSingleBar + (i - 1) * DiffBetweenHeight) + "px";
        bar.style.minWidth = widthOfSingleBar + "px";
        let barObject = {};
        barObject.height = i;
        barObject.bar = bar;
        Array.push(barObject);
    }
}


// it appends bars inside container(div)
function displayBars(arr){
    arr.forEach((bar)=>{
        container.append(bar.bar);
    })
}

// just make sure container is empty before we append all bars into it
function removeAllBars(){
    container.innerHTML = "";
}

function clone(arr){
    const ans = [];
    for(let i = 0; i < arr.length; i++){
        let newObject = {};
        newObject.bar = document.createElement("div");
        newObject.bar.style.height = arr[i].bar.offsetHeight;
        newObject.bar.style.width = arr[i].bar.offsetWidth;
        newObject.height = arr[i].height;

        ans.push(newObject);
    }
    return ans;
}