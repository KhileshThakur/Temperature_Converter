let inputtemp = document.getElementById('inputtemp');
let resulttemp = document.getElementById('resulttemp');
let inputTypetemp = document.getElementById('inputTypetemp');
let resultTypetemp = document.getElementById('resultTypetemp');
let inputTypeValuetemp, resultTypeValuetemp;

inputtemp.addEventListener("keyup", myResult);
inputTypetemp.addEventListener("change", myResult);
resultTypetemp.addEventListener("change", myResult);

inputTypeValuetemp = inputTypetemp.value;
resultTypeValuetemp = resultTypetemp.value;

function myResult() {
    inputTypeValuetemp = inputTypetemp.value;
    resultTypeValuetemp = resultTypetemp.value;

    if (inputTypeValuetemp === "celsius" && resultTypeValuetemp === "kelvin") {
        resulttemp.value = inputtemp.value + 273.15;
    }
    else if (inputTypeValuetemp === "celsius" && resultTypeValuetemp === "faranheit") {
        resulttemp.value = Number((inputtemp.value * (9 / 5)) + 32);
    }
    else if (inputTypeValuetemp === "celsius" && resultTypeValuetemp === "celsius") {
        resulttemp.value = inputtemp.value;
    }

    if (inputTypeValuetemp === "faranheit" && resultTypeValuetemp === "celsius") {
        resulttemp.value = Number((inputtemp.value - 32) * (5 / 9));
    }
    else if (inputTypeValuetemp === "faranheit" && resultTypeValuetemp === "kelvin") {
        resulttemp.value = Number((inputtemp.value - 32) * (5 / 9) + 273.15);
    }
    else if (inputTypeValuetemp === "faranheit" && resultTypeValuetemp === "faranheit") {
        resulttemp.value = inputtemp.value;
    }

    if (inputTypeValuetemp === "kelvin" && resultTypeValuetemp === "celsius") {
        resulttemp.value = Number(inputtemp.value) - 273.15;
    }
    else if (inputTypeValuetemp === "kelvin" && resultTypeValuetemp === "faranheit") {
        resulttemp.value = Number((inputtemp.value - 273.15) * (9 / 5) + 32);
    }
    else if (inputTypeValuetemp === "kelvin" && resultTypeValuetemp === "kelvin") {
        resulttemp.value = Number(inputtemp.value);
    }
}