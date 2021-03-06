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
        },
        "fa-IR": {
            public: {
                cancel: "لغو",
                confirm: "تایید"
            },
            index: {
                title: "تنظیم پراکسی",
                list: {
                    no_proxy: "استفاده نکردن از سرور پروکسی",
                    auto_proxy: "تشخیص خودکار تنظیمات پراکسی برای این شبکه",
                    system_proxy: "استفاده از تنظیمات پروکسی سیستم",
                    config_proxy: "پیکربندی پروکسی به صورت دستی",
                },
            },
            settings: {
                title: "برپایی",
                showState: "حالت نمایش"
            },
            popup: {
                index: {
                    title: "لیست پروکسی را به صورت دستی پیکربندی کنید",
                    name: "نام（name）",
                    isShow: "نمایش داده شود（isShow）",
                    autoConfigUrl: "پیکربندی خودکار آدرس‌ها（autoConfigUrl）",
                    autoLogin: "ورود خودکار（autoLogin）",
                    ftp: "پروتکل انتقال فایل（ftp）",
                    http: "پروتکل انتقال ابرمتن（http）",
                    httpProxyAll: "پروکسی پروتکل انتقال ابرمتن همه（httpProxyAll）",
                    passthrough: "عبور کند（passThrough）",
                    proxyDNS: "پروکسی سیستم نام دامنه（proxyDNS）",
                    socks: "جوراب（socks）",
                    socksVersion: "نسخه جوراب（socksVersion）",
                    ssl: "گواهی امنیتی（ssl）",
                    action: "عمل（action）",
                    maxShowLength: "نمایش حداکثر ۵ قطعه داده",
                    isDelete: "آیا باید «$name» را حذف کنم؟",
                    isDeleteTips: "نکته: پس از حذف، قابل بازیابی نیست.",
                },
                create: {
                    title: "یک پروکسی پیکربندی دستی ایجاد کنید",
                    autoConfigUrl: "پیکربندی خودکار آدرس ها（autoConfigUrl）",
                    autoConfigUrlDescription: "آدرس مورد استفاده برای پیکربندی پروکسی.",
                    autoLogin: "ورود خودکار（autoLogin）",
                    autoLoginDescription: "اگر رمز عبور ذخیره شده باشد، برای احراز هویت از آن خواسته نمی شود. پیش فرض به نادرست.",
                    ftp: "پروتکل انتقال فایل（ftp）",
                    ftpDescription: "آدرس پروکسی FTP. می تواند حاوی پورت ها باشد.",
                    http: "پروتکل انتقال ابرمتن（http）",
                    httpDescription: "پروتکل انتقال ابرمتن（http）",
                    httpProxyAll: "پروکسی پروتکل انتقال ابرمتن همه（httpProxyAll）",
                    httpProxyAllDescription: "برای همه پروتکل ها از سرور پروکسی پروتکل انتقال ابرمتن استفاده کنید. پیش فرض به نادرست.",
                    passthrough: "عبور کند（passThrough）",
                    passthroughDescription: "لیست میزبان هایی که نباید پروکسی شوند با کاما جدا شده اند. به طور پیش فرض به localhost و ۱۲۷.۰.۰.۱",
                    proxyDNS: "پروکسی سیستم نام دامنه（proxyDNS）",
                    proxyDNSDescription: "برای همه پروتکل ها از سرور پروکسی پروتکل انتقال ابرمتن استفاده کنید. پیش فرض به نادرست.",
                    socks: "جوراب（socks）",
                    socksDescription: "آدرس پروکسی جوراب. می تواند حاوی پورت ها باشد.",
                    socksVersion: "نسخه جوراب（socksVersion）",
                    socksVersionDescription: "نسخه پروکسی جوراب. ممکن است ۴ یا ۵ باشد. پیش فرض ۵ است.",
                    ssl: "گواهی امنیتی（ssl）",
                    sslDescription: "آدرس پروکسی گواهی امنیتی. می تواند حاوی پورت ها باشد.",
                    saveConfig: "ترتیب نگهداری",
                    inputName: "لطفا یک نام وارد کنید",
                    notNullName: "نام الزامی است！",
                    nameMaxLength: "طول نام نمی تواند بیش از ۲۵ کاراکتر باشد！",
                    saveSuccess: "با موفقیت ذخیره شد！",
                },
                edit: {
                    title: "پروکسی پیکربندی دستی را ویرایش کنید",
                    autoConfigUrl: "پیکربندی خودکار آدرس ها（autoConfigUrl）",
                    autoConfigUrlDescription: "آدرس مورد استفاده برای پیکربندی پروکسی.",
                    autoLogin: "ورود خودکار（autoLogin）",
                    autoLoginDescription: "اگر رمز عبور ذخیره شده باشد، برای احراز هویت از آن خواسته نمی شود. پیش فرض به نادرست.",
                    ftp: "پروتکل انتقال فایل（ftp）",
                    ftpDescription: "آدرس پروکسی پروتکل انتقال فایل. می تواند حاوی پورت ها باشد.",
                    http: "پروتکل انتقال ابرمتن（http）",
                    httpDescription: "پروتکل انتقال ابرمتن（http）",
                    httpProxyAll: "پروکسی پروتکل انتقال ابرمتن همه（httpProxyAll）",
                    httpProxyAllDescription: "برای همه پروتکل ها از سرور پروکسی پروتکل انتقال ابرمتن استفاده کنید. پیش فرض به نادرست.",
                    passthrough: "عبور کند（passThrough）",
                    passthroughDescription: "لیست میزبان هایی که نباید پروکسی شوند با کاما جدا شده اند. به طور پیش فرض به localhost و ۱۲۷.۰.۰.۱",
                    proxyDNS: "پروکسی سیستم نام دامنه（proxyDNS）",
                    proxyDNSDescription: "برای همه پروتکل ها از سرور پروکسی پروتکل انتقال ابرمتن استفاده کنید. پیش فرض به نادرست.",
                    socks: "جوراب（socks）",
                    socksDescription: "آدرس پروکسی جوراب. می تواند حاوی پورت ها باشد.",
                    socksVersion: "نسخه جوراب（socksVersion）",
                    socksVersionDescription: "نسخه پروکسی جوراب. ممکن است ۴ یا ۵ باشد. پیش فرض ۵ است.",
                    ssl: "گواهی امنیتی（ssl）",
                    sslDescription: "آدرس پروکسی گواهی امنیتی. می تواند حاوی پورت ها باشد.",
                    saveConfig: "ترتیب نگهداری",
                    inputName: "لطفا یک نام وارد کنید",
                    notNullName: "نام الزامی است！",
                    nameMaxLength: "طول نام نمی تواند بیش از ۲۵ کاراکتر باشد！",
                    saveSuccess: "با موفقیت ذخیره شد！",
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

let lang
browser.i18n.getAcceptLanguages().then(data => {
    data.push(browser.i18n.getUILanguage())
    data.push(navigator.language)
    for (let languagesKey in Language.languages) {
        for (let dataKey in data) {
            console.log(data[dataKey].toLowerCase(), languagesKey.toLowerCase(), data[dataKey].toLowerCase() === languagesKey.toLowerCase());
            if (data[dataKey].toLowerCase() === languagesKey.toLowerCase()) {
                lang = Language.languages[languagesKey]
                console.log(lang);
                return;
            }
        }
    }
})