
// 1. find the min value in an Array.
function minValue(list){
    const n = list.length;

    // Assume the first elem is the min value.
    let min = list[0];

    // let i start from the second elem until the last one.
    for(let i = 1; i < n; i++){
        // if the condition match, update min.
        if(min > list[i]){
            min = list[i];
        }
    }

    return min;
}

// 2. Sort the Array using Bubble sort algo.
function BubbleSort(list){
    const n = list.length;

    let isSwapped = false;

    for(let line = 0; line < n; line++){
        for(let b = 0; b < n - 1; b -= 1){
            if(list[b] > list[b + 1]){
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
                isSwapped = true;
            }
        }

        if(!isSwapped){
            break;
        }
    }
}

// 3. Selection Sort
function SelectionSort(list){
    const n = list.length;

    for(let a = 0; a < n - 1; a++){
        let s = a;
        for(let b = a + 1; b < n; b++){
            if(list[s] > list[b]){
                s = b;
            }
        }

        let minVal = list[s];
        for(let k = s; k > a; k--){
            list[k] = list[k - 1];
        }

        list[a] = minVal;
    }
}

// 4. Avoid shifting problem.
function SelectionSortV2(list){
    const n = list.length;

    for(let a = 0; a < n - 1; a++){
        let s = a;
        for(let b = a + 1; b < n; b++){
            if(list[s] > list[b]){
                s = b;
            }
        }

        let temp = list[s];
        list[s] = list[a];
        list[a] = temp;
    }
}


function Qs(list, s, e){
    if(e == undefined) e = list.length - 1;

    if(s < e){


        let index = partiton(list, s, e);

        Qs(list, s, index - 1); // not include pivot.
        Qs(list, index + 1, e);




    }
}

function partiton(list, s, e){
    const pivot = list[e];
    let i = -1;

    for(let j = 0; j < e; j++){
        if(list[j] < pivot){
            i++;
            let temp = list[j];
            list[j]  = list[i];
            list[i]  = temp;
        }
    }

    i++;

    let temp = list[i];
    list[i]  = list[e];
    list[e]  = temp;

    return i;
}
