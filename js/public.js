let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    getElement("body").setAttribute("class", getElement("body").getAttribute("class") + " mdui-theme-layout-dark")
    getElement(".mdui-toolbar").style.backgroundColor = "#303030"
}else {
    getElement(".mdui-toolbar").style.backgroundColor = "#fff"
}

/**
 * 获取控件
 * @param element
 * @param parent
 * @returns {NodeListOf<*>|*}
 */
function getElement(element, parent = document) {
    let elements = parent.querySelectorAll(element);
    return elements.length > 1 ? elements : elements[0];
}