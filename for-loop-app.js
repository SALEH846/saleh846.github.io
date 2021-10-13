function checkPrime(){
    let num = Number(document.getElementById("number").value);
    let isPrime = false;
    for(let i=2; i<num; i++){
        if(num % i === 0){
            isPrime = true;
            break;
        }
    }
    if(isPrime){
        document.getElementById("primeOrNot").innerHTML = "Not prime";
    }
    else{
        document.getElementById("primeOrNot").innerHTML = "Prime";
    }
}