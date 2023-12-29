// // function myFunction(){
// //     console.log(" Welcom to Apna College ");
// //     console.log("we are learning to JS");
// // }
// // myFunction();
// // // myFunction();
// console.log(b);
// let a=10;
// var b=100;
// // const c=200;
function primeNumber(n){
    let count=0;
    for(let i=2;i<n;i++){
        if(n%i==0){
            count=count+1; 
        }
    }
    return count;
}
let count1=primeNumber(10);
if(count1==0){
    console.log("Prime Number");
}
else{
    console.log("Not a Prime Number");
}