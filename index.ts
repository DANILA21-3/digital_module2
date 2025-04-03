function loadData() {
    const request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    
    request.onload = () => {
        if (request.status === 200) {
            try {
                const data = JSON.parse(request.responseText);
                console.log("Загрузка выполнена успешно:", data);
                
                simulateFalseError();

            } catch (error) {
                console.error("Парсинг не удался:", error);              
            }
        } else {
            console.error("Ошибка загрузки данных:", request.statusText);     
        }
    };

    request.onerror = () => {
        console.error("Ошибка сети");
    };

    request.send();
}

loadData();

function simulateFalseError() {
    try {
        throw new Error("Это ложная ошибка");
    } catch (error) {
        console.error("Обработка ложной ошибки:", error.message);
    }
}
