{
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
}
{
    const icons = document.querySelectorAll('.icon-bs');
    const fillIcon = document.querySelectorAll('.icon-bs-fill');

    for (let i = 0; i < icons.length; i++) {
        const icon = icons[i];
        const fillIcn = fillIcon[i];

        icon.addEventListener('mouseover', () => {
            icon.style.display = 'none';
            fillIcn.style.display = 'inline';
        });

        fillIcn.addEventListener('mouseout', () => {
            icon.style.display = 'inline';
            fillIcn.style.display = 'none';
        });

    }

}

{
    // Get references to the language links
    const langAzLink = document.getElementById('lang-az');
    const langRuLink = document.getElementById('lang-ru');

    langAzLink.addEventListener('click', function () {
        setLanguage('az');
    });

    langRuLink.addEventListener('click', function () {
        setLanguage('ru');
    });

    function setLanguage(language) {
        document.documentElement.lang = language;
        localStorage.setItem('userLanguage', language);

        if (language === 'az') {
            langAzLink.classList.add('active');
            langRuLink.classList.remove('active');
        } else if (language === 'ru') {
            langRuLink.classList.add('active');
            langAzLink.classList.remove('active');
        }
    }


}