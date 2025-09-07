const input = [1,2,3,4,5]

// const twointox = (i) =>{
//     return i*2
// }

// for(let i=0; i<input.length; i++){
//     input[i]=twointox(input[i])
// }
const ans = input.map(function(i){
    return i*2
})

const ans2 = input.filter(function(i){
    if(i%2===0){
        return true
    }  
    else{
        return false
    }
})
console.log(ans);
console.log(ans2);