module.exports = function reverse (n) {
    console.log(typeof n+" n");
    if(n<0){
        n= -n;
    }

    let number = (n+"").split("").map(x => x*1);
    
    
    if(number[number.length-1] === 0){
        number.splice(number.length-1, 1);
    }
    

    number = +number.reverse().join("");
    console.log(number+"+"+ typeof number+" number");
    return number;
    
}
