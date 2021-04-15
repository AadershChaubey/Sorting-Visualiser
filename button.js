const sortButton = document.querySelector(".sort-btn");
const shuffleButton = document.querySelector(".shuffle-btn")
sortButton.addEventListener("click", ()=>{
    // Array = mergeSort(Array);
    // removeAllBars();
    // displayBars(Array);
    quickSort(Array);
    removeAllBars();
    displayBars(Array);
});

shuffleButton.addEventListener("click", ()=>{
    shuffleArray(Array);
    displayBars(Array);
});

