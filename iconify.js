const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    const src = icon.getAttribute("src");
    icon.style.webkitMaskImage = `url("${src}")`
})