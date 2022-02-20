window.setProxy = json => browser.proxy.settings.set({value: json});

try {
    initLanguage();
} catch (e) {
}
initData();

let modeShowStateConfig = localStorage.getItem("modeShowState")
if (modeShowStateConfig === null) {
    modeShowStateConfig = JSON.stringify({
        "no_proxy": true,
        "auto_proxy": true,
        "system_proxy": true,
        "config_proxy": true
    })
    localStorage.setItem("modeShowState", modeShowStateConfig)
}
const modeShowState = JSON.parse(modeShowStateConfig)

const mduiList = getElement("#manual_list .mdui-list");
const list = JSON.parse(localStorage.getItem("list")) !== null ?
    JSON.parse(localStorage.getItem("list")) : [];
initManualConfigList();

getElement("#manual").style.display = modeShowState.config_proxy ? "flex" : "none"
getElement("#manual_list").style.display = modeShowState.config_proxy ? "block" : "none"

function setConfigProxy(index) {
    let proxySettings = list[index]
    proxySettings["proxyType"] = "manual"
    delete proxySettings["name"]
    delete proxySettings["id"]
    delete proxySettings["use"]
    window.setProxy(proxySettings)
    localStorage.setItem("use", "manual")
}

getElement("#manual").onclick = function () {
    const input = getElement("input", this)
    input.checked = !input.checked
    if (input.checked) {
        const checkId = localStorage.getItem("id")
        if (checkId) {
            setConfigProxy(checkId);
            document.querySelectorAll("#manual_list input").forEach(ele => {
                if (ele.value === checkId) {
                    ele.checked = true
                }
            })
        }
    } else {
        localStorage.setItem("use", "none")
        window.setProxy({proxyType: "none"})
        getElement('[value="none"]').checked = true
        getElement("#manual_list")
            .setAttribute("class", "mdui-hidden")
    }
    getElement("#manual_list").setAttribute("class", input.checked ? "" : "mdui-hidden")
}

document.querySelectorAll("#manual_list .item").forEach(ele => {
    const input = getElement("input", ele)
    input.checked = input.value === localStorage.getItem("id")

    ele.onclick = () => {
        if (input.checked) return
        input.checked = !input.checked
        setConfigProxy(input.value)
        localStorage.setItem("use", "manual")
        localStorage.setItem("id", input.value)
    }
})
/**
 * 获取所有item
 */
document.querySelectorAll("li.item").forEach((ele, index) => {
    const input = getElement("input", ele)
    input.checked = localStorage.getItem("use") === input.value
    switch (index) {
        case 0:
            ele.style.display = modeShowState.no_proxy ? "flex" : "none"
            break;
        case 1:
            ele.style.display = modeShowState.auto_proxy ? "flex" : "none"
            break;
        case 2:
            ele.style.display = modeShowState.system_proxy ? "flex" : "none"
            break;
    }

    ele.onclick = () => {
        input.checked = true
        getElement("#manual_list")
            .setAttribute("class", "mdui-hidden")
        getElement("#manual input").checked = false
        window.setProxy({proxyType: input.value})
        localStorage.setItem("use", input.value)
    }
})

/**
 * 初始化页面数据。
 */
function initData() {
    if (localStorage.getItem("use") === null)
        localStorage.setItem("use", "none")
    getElement("#manual input")
        .checked = localStorage.getItem("use") === "manual"
    getElement("#manual_list")
        .setAttribute("class", localStorage.getItem("use") === "manual" ? "" : "mdui-hidden")
}

/**
 * 初始化手动配置代理服务列表
 */
function initManualConfigList() {
    list.forEach((item, index) => {
        if (item.use !== null && item.use === true) {
            const label = document.createElement("label")
            label.className = "mdui-list-item mdui-ripple item"
            const div = document.createElement("div")
            div.className = "mdui-radio"
            const input = document.createElement("input")
            input.type = "radio"
            input.name = "select_proxy"
            input.value = index.toString()
            div.appendChild(input)
            const icon = document.createElement("i")
            icon.className = "mdui-radio-icon"
            div.appendChild(icon)
            label.appendChild(div)
            const itemName = document.createElement("div")
            itemName.className = "mdui-list-item-content"
            itemName.innerText = item.name
            label.appendChild(itemName)
            mduiList.appendChild(label)
        }
    })
}

/**
 * 初始化页面文字语言
 */
function initLanguage() {
    const language = Language
    const lang = language.languages[browser.i18n.getUILanguage()] ? language.languages[browser.i18n.getUILanguage()] : language.languages[navigator.language]
    language.setTransition("title", lang.index.title)
    language.setTransition(".mdui-typo-title", lang.index.title)
    language.setTransition(".no_proxy", lang.index.list.no_proxy)
    language.setTransition(".auto_proxy", lang.index.list.auto_proxy)
    language.setTransition(".system_proxy", lang.index.list.system_proxy)
    language.setTransition(".config_proxy", lang.index.list.config_proxy)
}