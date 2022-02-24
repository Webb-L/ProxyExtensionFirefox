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
function initTransition() {
    Language.setTransition("title", lang.popup.create.title)
    Language.setTransition(".mdui-typo-title", lang.popup.create.title)
    Language.setTransitionPlaceholder(".autoConfigUrl", lang.popup.create.autoConfigUrl)
    Language.setTransitionPlaceholder(".autoConfigUrlDescription", lang.popup.create.autoConfigUrlDescription)
    Language.setTransition(".autoLogin", lang.popup.create.autoLogin)
    Language.setTransition(".autoLoginDescription", lang.popup.create.autoLoginDescription)
    Language.setTransitionPlaceholder(".ftp", lang.popup.create.ftp)
    Language.setTransitionPlaceholder(".ftpDescription", lang.popup.create.ftpDescription)
    Language.setTransitionPlaceholder(".http", lang.popup.create.http)
    Language.setTransitionPlaceholder(".httpDescription", lang.popup.create.httpDescription)
    Language.setTransition(".httpProxyAll", lang.popup.create.httpProxyAll)
    Language.setTransition(".httpProxyAllDescription", lang.popup.create.httpProxyAllDescription)
    Language.setTransitionPlaceholder(".passthrough", lang.popup.create.passthrough)
    Language.setTransitionPlaceholder(".passthroughDescription", lang.popup.create.passthroughDescription)
    Language.setTransition(".proxyDNS", lang.popup.create.proxyDNS)
    Language.setTransition(".proxyDNSDescription", lang.popup.create.proxyDNSDescription)
    Language.setTransitionPlaceholder(".socks", lang.popup.create.socks)
    Language.setTransitionPlaceholder(".socksDescription", lang.popup.create.socksDescription)
    Language.setTransitionPlaceholder(".socksVersion", lang.popup.create.socksVersion)
    Language.setTransitionPlaceholder(".socksVersionDescription", lang.popup.create.socksVersionDescription)
    Language.setTransitionPlaceholder(".ssl", lang.popup.create.ssl)
    Language.setTransitionPlaceholder(".sslDescription", lang.popup.create.sslDescription)
    Language.setTransition("#save_config", lang.popup.create.saveConfig)
}

function getElement(element, parent = document) {
    let elements = parent.querySelectorAll(element);
    return elements.length > 1 ? elements : elements[0];
}