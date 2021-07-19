window.setProxy = json => browser.proxy.settings.set({value: json});

try {
    initLanguage();
} catch (e) {
}
initData();

const mduiList = getElement("#manual_list .mdui-list");
const list = JSON.parse(localStorage.getItem("list")) !== null ?
    JSON.parse(localStorage.getItem("list")) : [];
initManualConfigList();

getElement("#manual").onclick = function () {
    const input = getElement("input", this)
    input.checked = !input.checked
    getElement("#manual_list").setAttribute("class", input.checked ? "" : "mdui-hidden")
}

document.querySelectorAll("#manual_list .item").forEach(ele => {
    const input = getElement("input", ele)
    input.checked = input.value === localStorage.getItem("id")

    ele.onclick = () => {
        if (input.checked) return
        input.checked = !input.checked
        let proxySettings = list[input.value]
        proxySettings["proxyType"] = "manual"
        delete proxySettings["name"]
        delete proxySettings["id"]
        delete proxySettings["use"]
        window.setProxy(proxySettings)
        localStorage.setItem("use", "manual")
        localStorage.setItem("id", input.value)
    }
})
/**
 * 获取所有item
 */
document.querySelectorAll("li.item").forEach(ele => {
    const input = getElement("input", ele)
    input.checked = localStorage.getItem("use") === input.value
    ele.onclick = () => {
        input.checked = true
        let proxySettings = {proxyType: input.value};

        window.setProxy(proxySettings)
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
    let listItem = ``
    list.forEach((item, index) => {
        if (item.use !== null && item.use === true) {
            listItem += `
                <label class="mdui-list-item mdui-ripple item">
                    <div class="mdui-radio">
                        <input type="radio" name="select_proxy" value="${index}"/>
                        <i class="mdui-radio-icon"></i>
                    </div>
                    <div class="mdui-list-item-content">${item.name}</div>
                </label>`
        }
    })
    mduiList.innerHTML = listItem
}

/**
 * 初始化页面文字语言
 */
function initLanguage() {
    const language = Language
    const lang = language.languages[navigator.language]
    language.setTransition("title", lang.index.title)
    language.setTransition(".mdui-typo-title", lang.index.title)
    language.setTransition(".no_proxy", lang.index.list.no_proxy)
    language.setTransition(".auto_proxy", lang.index.list.auto_proxy)
    language.setTransition(".system_proxy", lang.index.list.system_proxy)
    language.setTransition(".config_proxy", lang.index.list.config_proxy)
}