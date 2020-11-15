document.addEventListener("DOMContentLoaded", function () {
    var initialValue = document.getElementById("initial_value").nodeValue;

    var convertButton = document.querySelector("convert_button");
    
    convertButton.addEventListener("click", function () {
        var result = document.createElement("<p>");
        result.textContent(initialValue);
        document.body.appendChild(result);
    })
})