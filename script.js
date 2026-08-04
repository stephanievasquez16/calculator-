// function to add the new value 
function appendValue(value) {
    const element = document.getElementById("display");
    const currentValue = element.value;
    const lastCharacter = currentValue.slice(-1);
    if (currentValue === "0") {
        if ("+-*/".includes(value)) {
            element.value = currentValue + value; 
        }
        else {
            element.value = value;
        }
    }   
    else if (currentValue === "Error") {
        if ("+-*/".includes(value)) {
            return;
        }
        
        element.value = value;
    }
    else if ("+-*/".includes(lastCharacter) && "-+*/".includes(value)) {
        return;
    }
    else {
        element.value += value;
    }
}

// function division par 100
function pourcentage() {
    const element = document.getElementById("display");
    const currentValue = Number(element.value);
    if (element.value === "Error") {
        return;
    }
    const valuePourcentage = currentValue / 100;
    element.value = valuePourcentage

}

// function to clear the display
function clearDisplay() {
    const element = document.getElementById("display");
    element.value = "0";
}

//function to add a negative sign before the number
function negative() {
    const element = document.getElementById("display");
    const currentValue = element.value;
    if (currentValue === "0") {
        return;
    }
    else if (currentValue.startsWith("-")) {
        element.value = currentValue.slice(1);
    }
    else {
        element.value = "-" + currentValue;
    }
}

// function for the result 
function result() {
    const element = document.getElementById("display");
    const currentValue = element.value;
    try {
        let resultValue = eval(currentValue);
        if (!Number.isFinite(resultValue)) {
            resultValue = "Error";
        }
        element.value = resultValue; 
    }
    catch {
        element.value = "Error";
    }
}



