function openblock(idblock) {
    if (document.getElementById(idblock).style.display == "none") {
        /*Если свойство display равно none*/
        document.getElementById(idblock).style.display = "block"; // переключаем свойство в block
    } else {
        /*Если свойство display не равно none*/
        document.getElementById(idblock).style.display = "none"; // переключаем свойство в none
    }
}