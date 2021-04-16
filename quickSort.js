function quickSort(arr){
    console.log("quickSort");
    animationArray = [];
    let arrClone = cloneRefrences(arr);
    quickSortHelper(arr, 0, arr.length - 1, animationArray); 
    visualiseSearch(animationArray, arrClone);
    return;
}

function quickSortHelper(arr, start, end, animationArray){
    start = parseInt(start);
    end = parseInt(end);
    if(start >= end)return;
    let pivot = start;
    let i = start + 1;
    while(i <= end){
        animationArray.push({'index': i, 'swap' : false, 'pivot' : pivot});
        if(arr[pivot].height > arr[i].height){
            animationArray.push({'pair': [pivot + 1, i], 'swap' : true, 'pivot' : pivot});
            swap(arr, pivot + 1, i);
            animationArray.push({'pair': [pivot, pivot + 1], 'swap' : true, 'pivot' : pivot + 1});
            swap(arr, pivot, ++pivot);
        }else i++;
    }

    function swap(arr, a, b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    quickSortHelper(arr, start, pivot - 1, animationArray);
    quickSortHelper(arr, pivot + 1, end, animationArray);
    return;
}