
var valid = function () {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;


    if (isNaN(weight) || isNaN(height)) {
        return alert("Value must be a number!");
    }
    if (weight === "" || height === "") {
        return alert("Please enter a value");
    }
    else {
        var result = ((weight / (Math.pow(height, 2))) * 703);
        var result = parseFloat(result).toFixed(2)
        // return alert("Your BMI is " + result)
        return document.getElementById('resultline').innerHTML = ("Your BMI is " + result);
    }
}

