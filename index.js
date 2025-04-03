function loadData() {
    var request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    request.onload = function () {
        if (request.status === 200) {
            try {
                var data = JSON.parse(request.responseText);
                console.log("Загрузка выполнена успешно:", data);
                displayCars(data);
                simulateFalseError();
            }
            catch (error) {
                console.error("Парсинг не удался:", error);
            }
        }
        else {
            console.error("Ошибка загрузки данных:", request.statusText);
        }
    };
    request.onerror = function () {
        console.error("Ошибка сети");
    };
    request.send();
}
function displayCars(data) {
    data.forEach(function (car) {
        var carElement = document.createElement("div");
        carElement.innerHTML = "\n        <h3>".concat(car.data.make, " ").concat(car.data.model, "</h3>\n        <p>\u0413\u043E\u0434 \u0432\u044B\u043F\u0443\u0441\u043A\u0430: ").concat(car.data.year, "</p>\n        <p>\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043A\u0430\u0440: ").concat(car.data.is_electric ? "Да" : "Нет", "</p>\n        <p>\u041E\u0441\u043E\u0431\u0435\u043D\u043D\u043E\u0441\u0442\u0438:</p>\n        <ul>\n          ").concat(car.data.features.map(function (feature) { return "<li>".concat(feature, "</li>"); }).join(""), "\n        </ul>\n      ");
        document.body.appendChild(carElement);
    });
}
function simulateFalseError() {
    try {
        throw new Error("Это ложная ошибка");
    }
    catch (error) {
        console.error("Обработка ложной ошибки:", error.message);
    }
}
loadData();
