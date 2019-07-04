function writeCode(prefix, code, fn) {
    let n = 0
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let id = setInterval(() => {
        n += 1

        domCode.innerHTML = code.substring(0, n)
        // style.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            clearInterval(id)

            fn && fn()
        }

    }, 50)

}
var result = `
自我介绍

姓名：冯国欣
1997年2月生
城市：上海
基础：入谷前自学啦 4 个月

报名原因：目前在制药公司不脱产学习。
待遇工资稳定，不喜欢这样的环境。
经哥哥介绍前端，感觉很感兴趣，
就开始学习前端。
自学由于掌握的知识点零零散散，
无法系统掌握，
于是报名饥人谷希望得到系统学习

学习目标：争取在金9能转行成功，找到工作

`
writeCode('', result)