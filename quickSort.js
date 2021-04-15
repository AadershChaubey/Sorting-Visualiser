function quickSort(arr){
    console.log("quickSort");
    quickSortHelper(arr, 0, arr.length - 1); 
    return;
}

function quickSortHelper(arr, start, end){
    start = parseInt(start);
    end = parseInt(end);
    if(start >= end)return;
    let pivot = start;
    let i = start + 1;
    while(i <= end){
        if(arr[pivot].height > arr[i].height){
            swap(arr, pivot + 1, i);
            swap(arr, pivot, ++pivot);
        }else i++;
    }

    function swap(arr, a, b){
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
    quickSortHelper(arr, start, pivot - 1);
    quickSortHelper(arr, pivot + 1, end);
    return;
}