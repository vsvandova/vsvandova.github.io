function changeText(idElement) {
    var element = document.getElementById('element' + idElement);
    if (idElement === 1 || idElement === 2) {
        if (element.innerHTML === 'Editovat') element.innerHTML = 'Ukončit editaci';
        else {
            element.innerHTML = 'Editovat';
        }
    }
}
