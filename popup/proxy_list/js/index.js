if (localStorage.getItem("list") === null) localStorage.setItem("list", "[]")
const list = JSON.parse(localStorage.getItem("list"))
const params = location.search.match(/page=\d+/)
const page = params ? Number(params[0] ? params[0].split("=")[1] : 0) : 0
list.reverse()
const language = Language
const lang = language.languages[navigator.language]
initLanguage()
initTable();
initFooter();

/**
 * 初始化页面文字语言
 */
function initLanguage() {
    const language = Language
    const lang = language.languages[navigator.language]
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
 * 初始化表格
 */
function initTable() {
    let tbody = ``
    for (let i = (page * 6); i < (page * 6) + 6; i++) {
        const item = list[i]
        if (item === undefined) continue
        tbody += `
            <tr>
                <td>${(Number(i) + 1)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.name)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.use)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.autoConfigUrl)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.autoLogin)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.ftp)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.http)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.httpProxyAll)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.passthrough)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.proxyDNS)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.socks)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.socksVersion)}</td>
                <td class="mdui-table-col-numeric">${resultData(item.ssl)}</td>
                <td>
                    <div class="mdui-btn-group">
                        <button type="button" id="${item.id}" class="mdui-btn use ${item.use ? 'mdui-hidden' : ''}"><i class="mdui-icon material-icons">vertical_align_top</i></button>
                        <button type="button" id="${item.id}" class="mdui-btn unUse ${item.use ? '' : 'mdui-hidden'}"><i class="mdui-icon material-icons">vertical_align_bottom</i></button>
                        <button type="button" id="${item.id}" class="mdui-btn edit"><i class="mdui-icon material-icons">edit</i></button>
                        <button type="button" id="${item.id}" class="mdui-btn delete"><i class="mdui-icon material-icons">delete</i></button>
                    </div>
                </td>
            </tr>`
    }
    getElement("tbody").innerHTML = tbody
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
            if (item.id === Number(this.id) && (count <= 5)) item.use = true
        })
        if (count <= 5) {
            list.reverse()
            localStorage.setItem("list", JSON.stringify(list))
            location.reload()
        } else {
            mdui.snackbar({
                message: lang.popup.index.maxShowLength,
                position: "right-top"
            })
        }
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
    })
}

/**
 * 初始化页脚
 */
function initFooter() {
    const maxPage = Math.floor(list.length / 6)
    getElement("footer").innerHTML = `
        <a href="?page=0" class="mdui-btn mdui-hidden-xs"><i class="mdui-icon material-icons">first_page</i></a>
        <a href="?page=${(page - 1) <= -1 ? page : page - 1}" class="mdui-btn mdui-hidden-xs"><i class="mdui-icon material-icons">keyboard_arrow_left</i></a>
        <button class="mdui-btn" id="count" disabled>${(page + 1)}/${maxPage + 1}</button>
        <a href="?page=${(page + 1) <= maxPage ? page + 1 : page}" class="mdui-btn mdui-hidden-xs"><i class="mdui-icon material-icons">keyboard_arrow_right</i></a>
        <a href="?page=${maxPage}" class="mdui-btn mdui-hidden-xs"><i class="mdui-icon material-icons">last_page</i></a>
`
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