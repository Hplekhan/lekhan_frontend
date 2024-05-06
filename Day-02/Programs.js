function fibonacci() {
    let a = 0, b = 1;
    console.log(a); 
    console.log(b); 
    for (let i = 2; i < 5; i++) { 
        const c = a + b;
        console.log(c); 
        a = b;
        b = c;
    }
}
fibonacci();

console.log("--------------")


// factorial
let n=4;
let f=1;

while(n>0){
    f=f*n;
    n--;
}
console.log(f);


console.log("--------------")


//greater number 
arr = [12,45,23,11,1,8,4,80]

max= arr[0]

for(let i=0;i<arr.length;i++){
    if(arr[i] > max){
        max=arr[i];
    }
    console.log(max)
   
}

console.log("--------------")

// function Sort(array) {
//     const length = ar.length;
//     for (let i = 0; i < length - 1; i++) {
//         for (let j = 0; j < length - 1 - i; j++) {
//             if (ar[j] > ar[j + 1]) {
                
//                 const temp = ar[j];
//                 ar[j] = ar[j + 1];
//                 ar[j + 1] = temp;
//             }
//         }
//     }
//     return array;
// }
// const array = [5, 2, 9, 1, 5];
// const sortedArray = Sort(array);
// console.log(sortedArra
