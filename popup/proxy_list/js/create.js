try {
    initTransition();
} catch (e) {
}

let config = {}
getElement("#save_config").onclick = () => {
    getElement("input").forEach(item => {
        if (item.value !== null && item.getAttribute("type") === "text" && item.value !== "") {
            config[item.name] = item.value
        }
        if (item.value !== null && item.getAttribute("type") === "number" && item.value !== "") {
            config[item.name] = Number(item.value)
        }
        if (item.value !== null && item.getAttribute("type") === "checkbox" && item.checked) {
            config[item.name] = item.checked
        }
    })
    if (localStorage.getItem("list") === null) localStorage.setItem("list", "[]")
    const list = JSON.parse(localStorage.getItem("list"))

    mdui.prompt(lang ? lang.popup.create.inputName : "Please enter a name", function (value) {
        if (value === "") {
            mdui.snackbar({
                message: lang ? lang.popup.create.notNullName : "Name is required!",
                position: 'right-top'
            });
        } else if (value.length > 25) {
            mdui.snackbar({
                message: lang ? lang.popup.create.nameMaxLength : "The length of the name cannot exceed 25 characters!",
                position: 'right-top'
            });
        } else {
            config['name'] = value
            config['id'] = new Date().getTime()
            list.push(config)
            localStorage.setItem("list", JSON.stringify(list))
            mdui.snackbar({
                message: lang ? lang.popup.create.saveSuccess : "Saved successfully",
                position: 'right-top'
            });
            setInterval(() => {
                location.reload()
            }, 1500)
        }
    }, ()=>{}, {
        confirmText: lang ? lang.public.confirm : "OK",
        cancelText: lang ? lang.public.cancel : "CANCEL"
    })
}

/**
 * 初始化页面文字语言
 */
const language = Language
const lang = language.languages[browser.i18n.getUILanguage()] ? language.languages[browser.i18n.getUILanguage()] : language.languages[navigator.language]

function initTransition() {
    const language = Language
    const lang = language.languages[browser.i18n.getUILanguage()] ? language.languages[browser.i18n.getUILanguage()] : language.languages[navigator.language]
    language.setTransition("title", lang.popup.create.title)
    language.setTransition(".mdui-typo-title", lang.popup.create.title)
    language.setTransitionPlaceholder(".autoConfigUrl", lang.popup.create.autoConfigUrl)
    language.setTransitionPlaceholder(".autoConfigUrlDescription", lang.popup.create.autoConfigUrlDescription)
    language.setTransition(".autoLogin", lang.popup.create.autoLogin)
    language.setTransition(".autoLoginDescription", lang.popup.create.autoLoginDescription)
    language.setTransitionPlaceholder(".ftp", lang.popup.create.ftp)
    language.setTransitionPlaceholder(".ftpDescription", lang.popup.create.ftpDescription)
    language.setTransitionPlaceholder(".http", lang.popup.create.http)
    language.setTransitionPlaceholder(".httpDescription", lang.popup.create.httpDescription)
    language.setTransition(".httpProxyAll", lang.popup.create.httpProxyAll)
    language.setTransition(".httpProxyAllDescription", lang.popup.create.httpProxyAllDescription)
    language.setTransitionPlaceholder(".passthrough", lang.popup.create.passthrough)
    language.setTransitionPlaceholder(".passthroughDescription", lang.popup.create.passthroughDescription)
    language.setTransition(".proxyDNS", lang.popup.create.proxyDNS)
    language.setTransition(".proxyDNSDescription", lang.popup.create.proxyDNSDescription)
    language.setTransitionPlaceholder(".socks", lang.popup.create.socks)
    language.setTransitionPlaceholder(".socksDescription", lang.popup.create.socksDescription)
    language.setTransitionPlaceholder(".socksVersion", lang.popup.create.socksVersion)
    language.setTransitionPlaceholder(".socksVersionDescription", lang.popup.create.socksVersionDescription)
    language.setTransitionPlaceholder(".ssl", lang.popup.create.ssl)
    language.setTransitionPlaceholder(".sslDescription", lang.popup.create.sslDescription)
    language.setTransition("#save_config", lang.popup.create.saveConfig)
}

function getElement(element, parent = document) {
    let elements = parent.querySelectorAll(element);
    return elements.length > 1 ? elements : elements[0];
}