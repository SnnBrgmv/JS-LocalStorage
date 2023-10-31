const userLanguage = localStorage.getItem('userLanguage');

        
        function setLanguage(language) {
            document.documentElement.lang = language;
            localStorage.setItem('userLanguage', language);
        }

        
        const aze = document.getElementById("lang-az");
        const ru = document.getElementById("lang-ru");

        aze.addEventListener("click", function () {
            setLanguage('az');
        });

        ru.addEventListener("click", function () {
            setLanguage('ru');
        });

        
        if (userLanguage) {
            setLanguage(userLanguage);
        }