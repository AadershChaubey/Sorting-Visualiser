var animationTimer = 0;

function visualiseSearch(animationArray, Array){
    console.log(Array);

    let i = 0;
    let n = animationArray.length;
    let pivot = {'bar': {'style':{}}};
    animationTimer = setInterval(() => {
        pivot.bar.style.background = "rgb(155, 139, 139)";
        if(i >= n) {
            clearInterval(animationTimer);
            reset();
            return;
        }
        pivot = Array[parseInt(animationArray[i].pivot)];
        pivot.bar.style.background = "yellow";
        if(animationArray[i].swap){
            let objectBar1 = Array[parseInt(animationArray[i].pair[0])];
            let objectBar2 = Array[parseInt(animationArray[i].pair[1])];
            swapObjectBars(objectBar1, objectBar2);
        }else{
            let objectBar = Array[parseInt((animationArray[i].index))];
            objectBar.bar.style.background = "skyblue";
            
            setTimeout(()=>{
                objectBar.bar.style.background = "rgb(155, 139, 139)";
            }, 0);
        }
        i++;
    }, 0);
}

function swapObjectBars(objectBar1, objectBar2){
    let temp = {};
    temp = objectBar1.bar.style.height;
    objectBar1.bar.style.height = objectBar2.bar.style.height;
    objectBar2.bar.style.height = temp;
}


function reset(){
    // let i = 0;
    // Array.forEach(element => {
    //     // Array.height = i;
    //     element.bar.style.height = SortedArrayHeight[i++];
    // });
}