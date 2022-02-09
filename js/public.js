let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(prefersDarkMode);
if (prefersDarkMode) {
    getElement("body").setAttribute("class", getElement("body").getAttribute("class") + " mdui-theme-layout-dark")
} else {
    getElement("body").setAttribute("class", "mdui-loaded")
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