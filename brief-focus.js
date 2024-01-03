    function checkUrlsAndClickButton() {
        var textarea = document.querySelector("#urls");
        if (textarea.value.includes("http") || textarea.value.includes("https")) {
            var button = document.querySelector("#content > div > div.box-center-content > div:nth-child(9) > form > p:nth-child(2) > input:nth-child(1)");
            button.click();
        }
    }
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

    var intervalId;

    function startOrStopInterval() {
        var isWindowActive = false;
        window.addEventListener('focus', function(event) {
          if (!isWindowActive) {
            intervalId = setInterval(checkUrlsAndClickButton, 1000);
            isWindowActive = true;
          }
        });

        window.addEventListener('blur', function() {
          clearInterval(intervalId);
          isWindowActive = false;
        });
    }

    startOrStopInterval();
    hideElements();
