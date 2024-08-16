.forEach() // harek element ma kama garxa
.filter() // right vako element matra return garxa
.map() // euta operation garera naya array dinxa
.reduce(acc,value,indx,arr) // array lai reduce garxa jastai sum of the element of the array vanyo vani eas bata garna sajilo hunxa
.slice(start,last but not include the last item)
.slice(-1)//gives the last element of the array
.splice(start, kati ota element , yedi add garnu xa vani)
.sort()  // sort the element ascii 
.sort(a,b)  // for the number return a-b ascending b-a decending
.concat(kun array add garni )    // naya array dinxa yedi khali parameter vayo vani clone gardinxa array
.fill(0) //array to sabai element lai 0 ley fill gardinxa
.includes('apple') // ture ki false check garxa yo xa ki xaina array ma vanerw
.join('') // array ko element haru lai join garnu paryo vani we can use the join
.reverse()// reverse the array element but only the string
.push() //last element add garxa
.pop() //last element hataidinxa
.unshift()// suru ma add garxa
.shift() // suru ko element hataidinxa
.indexOf()// kun element ka xa vanerw tha painxa
.lastindexof() // element last ma kun index ma xa yedi repeat vako xa vani
.every() //yedi sabi element haru even xa vani true navaye false
.some()// yedi euta matra element even xa vani pani hunxa
Array.isArray(nam of array)// array hoki haina vanerw check garxa
       
       
       
       
       
       
       
       
       
       
       
       
       /* to check whether it is array or not */

/*
const str = 'mero nam nishant ho';
const number = [1,2,3,4]
console.log(Array.isArray(str));
console.log(Array.isArray(number));
*/

        /*to clone an array */
/*
const number = [1,2,3,4,5];

const a = number.concat();
const b = [...number];
console.log(a);
console.log(b);
*/


        /* to find the first element of the array */
/*
const number = [1,2,3,4,5,6,7,8,9];
function takeOut(n){
    return number.slice(0,n);
}
*/

    /*to get the last element of the array */
/*
const number = [1,2,3,4,5,6];
console.log(number.slice(-3));

*/

    /* to join the element of the array */
/*
const color = ['red','white','black'];

console.log(color.join(','));
console.log(color.join('+'));

*/

/* to put the dash after the even element */

// const number = [1,2,3,4,5,6,7];

// const res = number.reduce((acc,value)=>{
//     if(value%2 === 0){
//         acc
//     }
// },0)

    /* sorting the array in ascending order */
/*
var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

const res = arr1.sort(callback);

function callback(a,b){
    return a-b;
}

console.log(res);
*/
/*
const str =['a','b','c','a'];

const arr ={}

str.forEach((value)=>{
    if(arr[value]){
        arr[value]++;
    }
    else{
        arr[value] = 1;
    }
})

console.log(arr);

*/

/*
const str = 'my name is nishant'

const res = str.split('');
console.log(res.reverse().join(''))

*/














