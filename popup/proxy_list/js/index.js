if (localStorage.getItem("list") === null) localStorage.setItem("list", "[]")
const list = JSON.parse(localStorage.getItem("list"))
const params = location.search.match(/page=\d+/)
const page = params ? Number(params[0] ? params[0].split("=")[1] : 0) : 0
list.reverse()
const language = Language
const lang = language.languages[browser.i18n.getUILanguage()] ? language.languages[browser.i18n.getUILanguage()] : language.languages[navigator.language]
try {
    initLanguage();
} catch (e) {
}
initTable();
initFooter();

/**
 * 初始化页面文字语言
 */
function initLanguage() {
    language.setTransition("title", lang.popup.index.title)
    language.setTransition(".mdui-typo-title", lang.popup.index.title)
    language.setTransition(".name", lang.popup.index.name)
    language.setTransition(".isShow", lang.popup.index.isShow)
    language.setTransition(".autoConfigUrl", lang.popup.index.autoConfigUrl)
    language.setTransition(".autoLogin", lang.popup.index.autoLogin)
    language.setTransition(".ftp", lang.popup.index.ftp)
    language.setTransition(".http", lang.popup.index.http)
    language.setTransition(".httpProxyAll", lang.popup.index.httpProxyAll)
    language.setTransition(".passthrough", lang.popup.index.passthrough)
    language.setTransition(".proxyDNS", lang.popup.index.proxyDNS)
    language.setTransition(".socks", lang.popup.index.socks)
    language.setTransition(".socksVersion", lang.popup.index.socksVersion)
    language.setTransition(".ssl", lang.popup.index.ssl)
    language.setTransition(".action", lang.popup.index.action)
}

/**
 * 创建操作按钮。
 * @param item
 * @returns {{btnGroup: HTMLDivElement, itemAction: HTMLTableDataCellElement}}
 */
function createAction(item) {
    const itemAction = document.createElement("td")
    const btnGroup = document.createElement("div")
    btnGroup.className = "mdui-btn-group"

    const btnUse = document.createElement("button")
    btnUse.type = "button"
    btnUse.id = item.id
    btnUse.className = `mdui-btn use ${item.use ? 'mdui-hidden' : ''}`
    const useIcon = document.createElement("i")
    useIcon.className = "mdui-icon material-icons"
    useIcon.innerText = "vertical_align_top"
    btnUse.appendChild(useIcon)
    btnGroup.appendChild(btnUse)

    const btnUnUse = document.createElement("button")
    btnUnUse.type = "button"
    btnUnUse.id = item.id
    btnUnUse.className = `mdui-btn unUse ${item.use ? '' : 'mdui-hidden'}`
    const unUseIcon = document.createElement("i")
    unUseIcon.className = "mdui-icon material-icons"
    unUseIcon.innerText = "vertical_align_bottom"
    btnUnUse.appendChild(unUseIcon)
    btnGroup.appendChild(btnUnUse)

    const btnEdit = document.createElement("button")
    btnEdit.type = "button"
    btnEdit.id = item.id
    btnEdit.className = `mdui-btn edit`
    const editIcon = document.createElement("i")
    editIcon.className = "mdui-icon material-icons"
    editIcon.innerText = "edit"
    btnEdit.appendChild(editIcon)
    btnGroup.appendChild(btnEdit)

    const btnDelete = document.createElement("button")
    btnDelete.type = "button"
    btnDelete.id = item.id
    btnDelete.className = `mdui-btn delete`
    const deleteIcon = document.createElement("i")
    deleteIcon.className = "mdui-icon material-icons"
    deleteIcon.innerText = "delete"
    btnDelete.appendChild(deleteIcon)
    btnGroup.appendChild(btnDelete)
    return {itemAction, btnGroup};
}

/**
 * 初始化表格
 */
function initTable() {
    for (let i = (page * 6); i < (page * 6) + 6; i++) {
        const item = list[i]
        if (item === undefined) continue
        const tr = document.createElement("tr")
        const index = document.createElement("td")
        index.innerText = Number(i) + 1
        tr.appendChild(index)

        const itemName = document.createElement("td")
        itemName.className = "mdui-table-col-numeric"
        itemName.innerText = resultData(item.name)
        tr.appendChild(itemName)

        const itemUse = document.createElement("td")
        itemUse.className = "mdui-table-col-numeric"
        itemUse.innerText = resultData(item.use)
        tr.appendChild(itemUse)

        const itemAutoConfigUrl = document.createElement("td")
        itemAutoConfigUrl.className = "mdui-table-col-numeric"
        itemAutoConfigUrl.innerText = resultData(item.autoConfigUrl)
        tr.appendChild(itemAutoConfigUrl)

        const itemAutoLogin = document.createElement("td")
        itemAutoLogin.className = "mdui-table-col-numeric"
        itemAutoLogin.innerText = resultData(item.autoLogin)
        tr.appendChild(itemAutoLogin)

        const itemFTP = document.createElement("td")
        itemFTP.className = "mdui-table-col-numeric"
        itemFTP.innerText = resultData(item.ftp)
        tr.appendChild(itemFTP)

        const itemHTTP = document.createElement("td")
        itemHTTP.className = "mdui-table-col-numeric"
        itemHTTP.innerText = resultData(item.http)
        tr.appendChild(itemHTTP)

        const itemHttpProxyAll = document.createElement("td")
        itemHttpProxyAll.className = "mdui-table-col-numeric"
        itemHttpProxyAll.innerText = resultData(item.httpProxyAll)
        tr.appendChild(itemHttpProxyAll)

        const itemPassthrough = document.createElement("td")
        itemPassthrough.className = "mdui-table-col-numeric"
        itemPassthrough.innerText = resultData(item.passthrough)
        tr.appendChild(itemPassthrough)

        const itemProxyDNS = document.createElement("td")
        itemProxyDNS.className = "mdui-table-col-numeric"
        itemProxyDNS.innerText = resultData(item.proxyDNS)
        tr.appendChild(itemProxyDNS)

        const itemSocks = document.createElement("td")
        itemSocks.className = "mdui-table-col-numeric"
        itemSocks.innerText = resultData(item.socks)
        tr.appendChild(itemSocks)

        const itemSocksVersion = document.createElement("td")
        itemSocksVersion.className = "mdui-table-col-numeric"
        itemSocksVersion.innerText = resultData(item.socksVersion)
        tr.appendChild(itemSocksVersion)

        const itemSSL = document.createElement("td")
        itemSSL.className = "mdui-table-col-numeric"
        itemSSL.innerText = resultData(item.ssl)
        tr.appendChild(itemSSL)

        const {itemAction, btnGroup} = createAction(item);

        itemAction.appendChild(btnGroup)
        tr.appendChild(itemAction)
        getElement("tbody").appendChild(tr)
    }

    initTableEvent();
}

/**
 * 初始化表格事件
 */
function initTableEvent() {
    document.querySelectorAll(".use").forEach(ele => ele.onclick = function () {
        let count = 1
        list.forEach(item => {
            if (item.use) count++
            item.use = true
        })
        list.reverse()
        localStorage.setItem("list", JSON.stringify(list))
        location.reload()
    })

    document.querySelectorAll(".unUse").forEach(ele => ele.onclick = function () {
        list.forEach(item => {
            if (item.id === Number(this.id)) delete item.use
        })
        list.reverse()
        localStorage.setItem("list", JSON.stringify(list))
        location.reload()
    })

    document.querySelectorAll(".edit").forEach(ele => ele.onclick = function () {
        list.forEach(item => {
            if (item.id === Number(this.id)) location.href = "edit.html?id=" + this.id
            console.log(item.id);
        })
    })

    document.querySelectorAll(".delete").forEach(ele => ele.onclick = function () {
        const proxyId = Number(this.id)
        let index = 0
        list.forEach((item, i) => {
            if (item.id === proxyId) index = i
        })
        try {
            mdui.dialog({
                title: lang.popup.index.isDelete.replace("$name", list[index].name),
                content: lang.popup.index.isDeleteTips,
                buttons: [
                    {
                        text: lang.public.cancel
                    },
                    {
                        text: lang.public.confirm,
                        onClick: function () {
                            list.splice(index, 1)
                            list.reverse()
                            localStorage.setItem("list", JSON.stringify(list))
                            location.reload()
                        }
                    }
                ]
            });
        } catch (e) {
            mdui.dialog({
                title: "Do you want to delete $name?".replace("$name", list[index].name),
                content: "Tip: it cannot be retrieved after deletion.",
                buttons: [
                    {
                        text: "cancel"
                    },
                    {
                        text: "confirm",
                        onClick: function () {
                            list.splice(index, 1)
                            list.reverse()
                            localStorage.setItem("list", JSON.stringify(list))
                            location.reload()
                        }
                    }
                ]
            });
        }
    })
}

/**
 * 初始化页脚
 */
function initFooter() {
    const maxPage = Math.floor(list.length / 6)
    const iconFirst = document.createElement("i")
    iconFirst.className = "mdui-icon material-icons"
    const firstPage = document.createElement("a")
    firstPage.href = "?page=0"
    firstPage.className = "mdui-btn mdui-hidden-xs"
    iconFirst.innerText = "first_page"
    firstPage.appendChild(iconFirst)
    getElement("footer").appendChild(firstPage)

    const iconNext = document.createElement("i")
    iconNext.className = "mdui-icon material-icons"
    const nextPage = document.createElement("a")
    nextPage.href = `?page=${(page - 1) <= -1 ? page : page - 1}`
    nextPage.className = "mdui-btn mdui-hidden-xs"
    iconNext.innerText = "keyboard_arrow_left"
    nextPage.appendChild(iconNext)
    getElement("footer").appendChild(nextPage)

    const indexPage = document.createElement("button")
    indexPage.className = "mdui-btn"
    indexPage.id = "count"
    indexPage.disabled = true
    indexPage.innerText = `${(page + 1)}/${maxPage + 1}`
    getElement("footer").appendChild(indexPage)

    const iconPrev = document.createElement("i")
    iconPrev.className = "mdui-icon material-icons"
    const prevPage = document.createElement("a")
    prevPage.href = `?page=${(page + 1) <= maxPage ? page + 1 : page}`
    prevPage.className = "mdui-btn mdui-hidden-xs"
    iconPrev.innerText = "keyboard_arrow_right"
    prevPage.appendChild(iconPrev)
    getElement("footer").appendChild(prevPage)

    const iconLast = document.createElement("i")
    iconLast.className = "mdui-icon material-icons"
    const lastPage = document.createElement("a")
    lastPage.href = `?page=${maxPage}`
    lastPage.className = "mdui-btn mdui-hidden-xs"
    iconLast.innerText = "last_page"
    lastPage.appendChild(iconLast)
    getElement("footer").appendChild(lastPage)
}

/**
 * 返回数据
 * @param item
 * @returns {string}
 */
function resultData(item) {
    return item === undefined ? "" : item
}

function getElement(element, parent = document) {
    let elements = parent.querySelectorAll(element);
    return elements.length > 1 ? elements : elements[0];
}