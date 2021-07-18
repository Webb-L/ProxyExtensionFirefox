initTransition();
const list = JSON.parse(localStorage.getItem("list"))
const params = location.search.match(/id=\d+/)
const id = params ? Number(params[0] ? params[0].split("=")[1] : 0) : 0
if (id === 0) history.back()
let index = 0
list.forEach((item, i) => {
    if (item.id === id) index = i
})

/**
 * 初始化表单
 */
const data = list[index];

function initFrom() {
    for (let key in data) {
        getElement("input").forEach(ele => {
            if (ele.name === key) {
                if (ele.value !== null && ele.getAttribute("type") === "text") ele.value = data[key]
                if (ele.value !== null && ele.getAttribute("type") === "number") ele.value = data[key]
                if (ele.value !== null && ele.getAttribute("type") === "checkbox") ele.checked = true
            }
        })
    }
}

initFrom();

getElement("#save_config").onclick = () => {
    const value = list[index].name
    getElement("input").forEach(item => {
        if (item.value !== null && item.getAttribute("type") === "text" && item.value !== "") {
            data[item.name] = item.value
        }
        if (item.value !== null && item.getAttribute("type") === "number" && item.value !== "") {
            data[item.name] = Number(item.value)
        }
        if (item.value !== null && item.getAttribute("type") === "checkbox" && item.checked) {
            data[item.name] = item.checked
        }
    })
    if (localStorage.getItem("list") === null) localStorage.setItem("list", "[]")
    mdui.prompt('',
        lang.popup.edit.inputName,
        function (value) {
            if (value === "") {
                mdui.snackbar({
                    message: lang.popup.edit.notNullName,
                    position: 'right-top'
                });
            } else if (value.length > 25) {
                mdui.snackbar({
                    message: lang.popup.edit.nameMaxLength,
                    position: 'right-top'
                });
            } else {
                data['name'] = value
                list[index] = data
                list[index].name = value
                localStorage.setItem("list", JSON.stringify(list))
                location.reload()
                mdui.snackbar({
                    message: lang.popup.edit.saveSuccess,
                    position: 'right-top'
                });
            }
        },
        function (value) {
        },
        {
            defaultValue: value
        }
    );
}

/**
 * 初始化页面文字语言
 */
const language = Language
const lang = language.languages[navigator.language]
function initTransition() {
    const language = Language
    const lang = language.languages[navigator.language]
    language.setTransition("title", lang.popup.edit.title)
    language.setTransition(".mdui-typo-title", lang.popup.edit.title)
    language.setTransitionPlaceholder(".autoConfigUrl", lang.popup.edit.autoConfigUrl)
    language.setTransitionPlaceholder(".autoConfigUrlDescription", lang.popup.edit.autoConfigUrlDescription)
    language.setTransition(".autoLogin", lang.popup.edit.autoLogin)
    language.setTransition(".autoLoginDescription", lang.popup.edit.autoLoginDescription)
    language.setTransitionPlaceholder(".ftp", lang.popup.edit.ftp)
    language.setTransitionPlaceholder(".ftpDescription", lang.popup.edit.ftpDescription)
    language.setTransitionPlaceholder(".http", lang.popup.edit.http)
    language.setTransitionPlaceholder(".httpDescription", lang.popup.edit.httpDescription)
    language.setTransition(".httpProxyAll", lang.popup.edit.httpProxyAll)
    language.setTransition(".httpProxyAllDescription", lang.popup.edit.httpProxyAllDescription)
    language.setTransitionPlaceholder(".passthrough", lang.popup.edit.passthrough)
    language.setTransitionPlaceholder(".passthroughDescription", lang.popup.edit.passthroughDescription)
    language.setTransition(".proxyDNS", lang.popup.edit.proxyDNS)
    language.setTransition(".proxyDNSDescription", lang.popup.edit.proxyDNSDescription)
    language.setTransitionPlaceholder(".socks", lang.popup.edit.socks)
    language.setTransitionPlaceholder(".socksDescription", lang.popup.edit.socksDescription)
    language.setTransitionPlaceholder(".socksVersion", lang.popup.edit.socksVersion)
    language.setTransitionPlaceholder(".socksVersionDescription", lang.popup.edit.socksVersionDescription)
    language.setTransitionPlaceholder(".ssl", lang.popup.edit.ssl)
    language.setTransitionPlaceholder(".sslDescription", lang.popup.edit.sslDescription)
    language.setTransition("#save_config", lang.popup.edit.saveConfig)
}

function getElement(element, parent = document) {
    let elements = parent.querySelectorAll(element);
    return elements.length > 1 ? elements : elements[0];
}