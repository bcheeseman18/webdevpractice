

function average(scores) {
    let total = 0; 
    for(let i = 0; i < scores.length; i++) {
        total += scores[i]; 
    }
    let avg = total / scores.length; 
    return Math.round(avg); 
}

let scores = [92, 78]; 
console.log(average(scores)); 

// function add(a, b) {
//     return a + b; 
    
// }

// console.log(add(3, 4)); 

 