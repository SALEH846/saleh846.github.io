function dollarToPkr(dollars){
    let rups = dollars * 170;
    return rups;
}

function pkrToDollars(pkr){
    let usd = pkr / 170;
    return usd;
}

function convert(){
    if (document.getElementById("dollars").value && document.getElementById("rupees").value){
        alert("Enter only one value at a time");
    }
    else if (document.getElementById("dollars").value){
        let result = dollarToPkr(Number(document.getElementById("dollars").value));
        document.getElementById("rupees").value = result;
    }
    else if (document.getElementById("rupees").value){
        let result = pkrToDollars(Number(document.getElementById("rupees").value));
        document.getElementById("dollars").value = result;
    }
}

function grade(){
    let grade = Number(document.getElementById("grade").value);
    switch(true){
        case (grade>=80):
            document.getElementById("returnedGrade").innerHTML = "Grade: A-one";
            break;
        case (grade<80 && grade>=70):
            document.getElementById("returnedGrade").innerHTML = "Grade: A";
            break;
        case (grade<70 && grade>=60):
            document.getElementById("returnedGrade").innerHTML = "Grade: B";
            break;
        case (grade<60 && grade>=50):
            document.getElementById("returnedGrade").innerHTML = "Grade: C";
            break;
        case (grade<50 && grade>=40):
            document.getElementById("returnedGrade").innerHTML = "Grade: D";
            break;
        case (grade<40 && grade>0):
            document.getElementById("returnedGrade").innerHTML = "Grade: F";
            break;
        default:
            document.getElementById("returnedGrade").innerHTML = "No grade";
            break;
    }
}

function whatToWear(){
    let temperature = Number(document.getElementById("temperature").value);
    switch(true){
        case (temperature<=25 && temperature>15):
            document.getElementById("suggestedWearing").innerHTML = "Jacket";
            break;
        case (temperature<=15 && temperature>0):
            document.getElementById("suggestedWearing").innerHTML = "Coat";
            break;
        default:
            document.getElementById("suggestedWearing").innerHTML = "Don't go out!";
            break;
    }
}