let prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDarkMode) {
    getElement("body").setAttribute("class", getElement("body").getAttribute("class") + " mdui-theme-layout-dark")
} else {
    console.log("11")
    getElement("body").setAttribute("class", "mdui-loaded")
    getElement(".mdui-color-theme").style.backgroundColor = "#fff"
    getElement("#pa3").style.display = "block"
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