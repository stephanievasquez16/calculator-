
function appendValue(value) {
    const element = document.getElementById("display");
    const currentValue = element.value;
    if (currentValue === "0") {
        element.value = value;
    }
    else {
        element.value += value;
    }
}

// function to clear the display

function clearDisplay() {
    const element = document.getElementById("display");
    element.value = "0";
    }
