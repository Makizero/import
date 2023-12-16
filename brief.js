    // Функция для проверки ссылок в окне #urls и нажатия на кнопку
    function checkUrlsAndClickButton() {
        var textarea = document.querySelector("#urls");
        if (textarea.value.includes("http") || textarea.value.includes("https")) {
            var button = document.querySelector("#content > div > div.box-center-content > div:nth-child(9) > form > p:nth-child(2) > input:nth-child(1)");
            button.click();
        }
    }
    // Функция для скрытия элементов по селекторам CSS
    function hideElements() {
        var cssSelectors = ["#footer", "#sidebar", ".box-center-top", "#header", "#global_header_2022_03", ".message-box-info"];
        cssSelectors.forEach(function (selector) {
            var element = document.querySelector(selector);
            if (element) {
                element.style.display = "none";
            }
        });
        var urlsTextarea = document.querySelector("#urls");
    }
    // Установка интервала для циклической проверки ссылок и нажатия на кнопку
    var urlCheckInterval = setInterval(checkUrlsAndClickButton, 3000);
    // Скрытие элементов и изменение атрибутов
    hideElements();
