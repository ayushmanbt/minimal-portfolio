const body = document.querySelector('body');
const changer = document.getElementById('changer');

const FromLightToDark = () => {
    body.classList.remove('light');
    body.classList.add('dark');
    window.localStorage.setItem("mode", "dark");
}

const FromDarkToLight = () => {
    body.classList.remove('dark');
    body.classList.add('light');
    window.localStorage.setItem("mode", "light");
}


if (window.localStorage.getItem("mode")){
    if(window.localStorage.getItem("mode") == 'dark') FromLightToDark();
    else FromDarkToLight();
}
else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    FromLightToDark();
}

function changemode () {
    if(body.classList.contains('light')){
        FromLightToDark();
        return;
    }
    FromDarkToLight();
}