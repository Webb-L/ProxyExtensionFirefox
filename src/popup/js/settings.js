try {
    initLanguage()
}catch (e){
}

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
console.log(modeShowState);
getElement("#no_proxy").checked = modeShowState.no_proxy
getElement("#no_proxy").onclick = function () {
    modeShowState.no_proxy = !modeShowState.no_proxy
    this.checked = modeShowState.no_proxy
    localStorage.setItem("modeShowState", JSON.stringify(modeShowState))
}
getElement("#auto_proxy").checked = modeShowState.auto_proxy
getElement("#auto_proxy").onclick = function () {
    modeShowState.auto_proxy = !modeShowState.auto_proxy
    this.checked = modeShowState.auto_proxy
    localStorage.setItem("modeShowState", JSON.stringify(modeShowState))
}

getElement("#system_proxy").checked = modeShowState.system_proxy
getElement("#system_proxy").onclick = function () {
    modeShowState.system_proxy = !modeShowState.system_proxy
    this.checked = modeShowState.system_proxy
    localStorage.setItem("modeShowState", JSON.stringify(modeShowState))
}
getElement("#config_proxy").checked = modeShowState.config_proxy
getElement("#config_proxy").onclick = function () {
    modeShowState.config_proxy = !modeShowState.config_proxy
    this.checked = modeShowState.config_proxy
    localStorage.setItem("modeShowState", JSON.stringify(modeShowState))
}

/**
 * 初始化页面文字语言
 */
function initLanguage() {
    Language.setTransition("title", lang.settings.title)
    Language.setTransition(".mdui-typo-title", lang.settings.title)
    Language.setTransition(".show-state", lang.settings.showState)
    Language.setTransition(".no_proxy", lang.index.list.no_proxy)
    Language.setTransition(".auto_proxy", lang.index.list.auto_proxy)
    Language.setTransition(".system_proxy", lang.index.list.system_proxy)
    Language.setTransition(".config_proxy", lang.index.list.config_proxy)
}