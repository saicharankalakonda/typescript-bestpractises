//@ts-nocheck
// flattten an array 

//https://medium.com/swlh/how-to-flatten-an-array-in-javascript-6b3fef075655
const flatten = (nested) => {
    const flat = [];
    const handleFlat = (array) => {
        let counter = 0
        while (counter < array.length) {
            const val = array[counter];
            if (Array.isArray(val)) {
                handleFlat(val);
            } else {
                flat.push(val)
            }
            counter++;
        }
    }
    handleFlat(nested);
    return flat;
}


export const flattenArray = (nestedArray) => {
    const flattendResultArray = new Array();

    const handleFlat = (arr) => {
        let i = 0;
        while (i < arr.length) {
            if (Array.isArray(arr[i])) {
                handleFlat(arr[i]);
            } else {
                flattendResultArray.push(arr[i]);
            }
            i++;

        }
    }
    handleFlat(nestedArray)

    return flattendResultArray;
}

export const nestedArr = [1, 2, 3, [1, 2, [1, 2, 23, [18826]]]];


function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

function* generateAlphaNum() {
    yield* generateSequence(48, 57);
    yield* generateSequence(65, 90);
    yield* generateSequence(97, 122);
}

export function letsCallGenerateAlphaNum() {

    let str = '';

    for (let code of generateAlphaNum()) {
        console.log(code)
        str += String.fromCharCode(code)
    }
    return str;
}


let count = 0;
export function* pseudoRandom(previous) {
    try {
        let result = previous * 16807 % 2147483647;
        console.log(result);
        count++;
        if (count > 10000) {
            return 1;
        }
        yield result;
        yield* pseudoRandom(result)
    }
    catch {
        console.error();

    }

}


export function callPseudoRandom() {
    let arr = pseudoRandom(1);
    return arr;
}