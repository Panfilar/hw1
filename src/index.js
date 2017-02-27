/* ДЗ 7.1 - BOM */

/**
 * Функция должна создавать окно с указанным именем и размерами
 *
 * @param {number} name - имя окна
 * @param {number} width - ширина окна
 * @param {number} height - высота окна
 * @return {Window}
 */
function createWindow(name, width, height) {
    var myWindow=window.open('', name, width+'px'+','+height+'px');
    return myWindow;
}

/**
 * Функция должна закрывать указанное окно
 *
 * @param {Window} window - окно, размер которого надо изменить
 */
function closeWindow(window) {
    return window.close('', window);
}

/**
 * Функция должна создавать cookie с указанными именем и значением
 *
 * @param name - имя
 * @param value - значение
 */
function createCookie(name, value) {
    var myCookie=document.cookie=name+'='+value;

    return myCookie;
}

/**
 * Функция должна удалять cookie с указанным именем
 *
 * @param name - имя
 */
function deleteCookie(name) {
    document.cookie=name+'="";expires='+new Date(0);
}

export {
    createWindow,
    closeWindow,
    createCookie,
    deleteCookie
};
