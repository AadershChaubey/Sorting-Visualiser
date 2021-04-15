function mergeSort(arr){
    return mergeSortMain(arr, 0, arr.length);
}

function mergeSortMain(arr, start, end){
    start = parseInt(start);
    end = parseInt(end);
    if(start === end){
        let newArr = [];
        if(arr[start] !== undefined)newArr.push(arr[start]);
        else newArr = undefined;
        return newArr;
    }
    let mid = ((start + end) / 2).toFixed(0);
    var array1 = mergeSortMain(arr, start, mid - 1);
    var array2 = mergeSortMain(arr, mid, end);
    return mergeArrays(array1, array2);
}

function mergeArrays(array1, array2){
    if(array1 === undefined && array2 === undefined)return [];
    if(array1 === undefined) return array2;
    if(array2 === undefined) return array1;
    ans = [];
    let i = 0;
    let j = 0;

    while(i != array1.length && j != array2.length){
        if(array1[i].height <= array2[j].height) ans.push(array1[i++]);
        else ans.push(array2[j++]);
    }

    while(i != array1.length)ans.push(array1[i++]);
    while(j != array2.length)ans.push(array2[j++]);

    return ans;
}