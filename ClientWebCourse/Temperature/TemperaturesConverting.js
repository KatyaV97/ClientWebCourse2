document.addEventListener("DOMContentLoaded", function () {
    var AIS = AIS || {};

    AIS.initialValue = document.getElementById("initial_value");
    AIS.scale = document.getElementById("scale");
    AIS.error = document.getElementById("error_message");
    AIS.result = document.getElementById("result");

    document.getElementById("convert_button").addEventListener("click", function () {
        AIS.result.textContent = "";

        if (AIS.initialValue.value === "") {
            AIS.error.textContent = "Введите значение температуры!";
            return;
        }
        else if (AIS.scale.options.selectedIndex === -1) {
            AIS.error.textContent = "Выберете шкалу перевода!";
            return;
        }

        AIS.error.textContent = "";

        AIS.result.textContent = "Преобразованное значение: " + getConvertedTemperature();
    })

    function getConvertedTemperature() {
        switch (AIS.scale.options[AIS.scale.options.selectedIndex].text) {
            case "Кельвин":
                return Number(AIS.initialValue.value) + 273.15;
            case "Фаренгейт":
                return Number(AIS.initialValue.value) * 1.8 + 32;
        }
    }
})