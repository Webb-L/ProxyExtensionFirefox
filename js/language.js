const Language = {
    languages: {
        "zh-CN": {
            public: {
                cancel: "取消",
                confirm: "确认"
            },
            index: {
                title: "设置代理",
                list: {
                    no_proxy: "不使用代理服务器",
                    auto_proxy: "自动检测此网络的代理设置",
                    system_proxy: "使用系统代理设置",
                    config_proxy: "手动配置代理",
                },
            },
            settings: {
                title: "设置",
                showState: "显示状态"
            },
            popup: {
                index: {
                    title: "手动配置代理列表",
                    name: "名称（name）",
                    isShow: "是否显示（isShow）",
                    autoConfigUrl: "自动配置网址（autoConfigUrl）",
                    autoLogin: "自动登录（autoLogin）",
                    ftp: "Ftp（ftp）",
                    http: "超文本传输协定（http）",
                    httpProxyAll: "http代理全部（httpProxyAll）",
                    passthrough: "通过（passThrough）",
                    proxyDNS: "代理DNS（proxyDNS）",
                    socks: "Socks（socks）",
                    socksVersion: "Socks版本（socksVersion）",
                    ssl: "安全证书（ssl）",
                    action: "动作（action）",
                    maxShowLength: "最多展示5条数据。",
                    isDelete: "是否需要删除《$name》？",
                    isDeleteTips: "提示：删除后无法找回。",
                },
                create: {
                    title: "创建手动配置代理",
                    autoConfigUrl: "自动配置网址（autoConfigUrl）",
                    autoConfigUrlDescription: "用于配置代理的 URL。",
                    autoLogin: "自动登录（autoLogin）",
                    autoLoginDescription: "如果保存了密码，则不提示进行身份验证。 默认为 false.",
                    ftp: "Ftp（ftp）",
                    ftpDescription: "FTP 代理的地址。 可以包含端口。",
                    http: "超文本传输协定（http）",
                    httpDescription: "超文本传输协定（http）",
                    httpProxyAll: "http代理全部（httpProxyAll）",
                    httpProxyAllDescription: "对所有协议使用 HTTP 代理服务器。 默认为 false.",
                    passthrough: "通过（passThrough）",
                    passthroughDescription: "不应代理的主机的逗号分隔列表。 默认为“本地主机，127.0.0.1”。",
                    proxyDNS: "代理DNS（proxyDNS）",
                    proxyDNSDescription: "对所有协议使用 HTTP 代理服务器。 默认为 false.",
                    socks: "Socks（socks）",
                    socksDescription: "SOCKS 代理的地址。 可以包含端口。",
                    socksVersion: "Socks版本（socksVersion）",
                    socksVersionDescription: "SOCKS 代理的版本。 可能是 4 或 5。默认为 5。",
                    ssl: "安全证书（ssl）",
                    sslDescription: "SSL 代理的地址。 可以包含端口。",
                    saveConfig: "保存配置",
                    inputName: "请输入名称",
                    notNullName: "名称不能为空！",
                    nameMaxLength: "名称长度不能超过25个字符！",
                    saveSuccess: "保存成功！",
                },
                edit: {
                    title: "编辑手动配置代理",
                    autoConfigUrl: "自动配置网址（autoConfigUrl）",
                    autoConfigUrlDescription: "用于配置代理的 URL。",
                    autoLogin: "自动登录（autoLogin）",
                    autoLoginDescription: "如果保存了密码，则不提示进行身份验证。 默认为 false.",
                    ftp: "Ftp（ftp）",
                    ftpDescription: "FTP 代理的地址。 可以包含端口。",
                    http: "超文本传输协定（http）",
                    httpDescription: "超文本传输协定（http）",
                    httpProxyAll: "http代理全部（httpProxyAll）",
                    httpProxyAllDescription: "对所有协议使用 HTTP 代理服务器。 默认为 false.",
                    passthrough: "通过（passThrough）",
                    passthroughDescription: "不应代理的主机的逗号分隔列表。 默认为“本地主机，127.0.0.1”。",
                    proxyDNS: "代理DNS（proxyDNS）",
                    proxyDNSDescription: "对所有协议使用 HTTP 代理服务器。 默认为 false.",
                    socks: "Socks（socks）",
                    socksDescription: "SOCKS 代理的地址。 可以包含端口。",
                    socksVersion: "Socks版本（socksVersion）",
                    socksVersionDescription: "SOCKS 代理的版本。 可能是 4 或 5。默认为 5。",
                    ssl: "安全证书（ssl）",
                    sslDescription: "SSL 代理的地址。 可以包含端口。",
                    saveConfig: "保存配置",
                    inputName: "请输入名称",
                    notNullName: "名称不能为空！",
                    nameMaxLength: "名称长度不能超过25个字符！",
                    saveSuccess: "保存成功！",
                },
            }
        }
    },
    setTransition: function (ele, message) {
        document.querySelector(ele).innerText = message
    },
    setTransitionPlaceholder: function (ele, message) {
        document.querySelector(ele).placeholder = message
    }
}