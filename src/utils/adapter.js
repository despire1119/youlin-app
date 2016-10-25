let docEl = document.documentElement
let headEl = document.getElementsByTagName('head')[0]
let baseScreenWidth = 375
let baseFontSize = 20
let maxWidth = 640


 Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


let getFontSize = ()=>{
    let docWidth = docEl.clientWidth
    return (docWidth < maxWidth?docWidth:maxWidth) * baseFontSize / baseScreenWidth
}
let init = ()=>{
    let styleEl = document.getElementsByTagName('style')[0]
    let exist = !!styleEl
    styleEl = exist?styleEl:document.createElement('style')
    let fontSize = getFontSize()
    let style = 'html{font-size:'+fontSize+'px;}'
    styleEl.innerHTML = style
    if(!exist){
        headEl.appendChild(styleEl)
    }
}

let dateTransform = () =>{
    Date.prototype.Format = function(fmt) {
        var o = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            "S": this.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }


}
// let isResizing
// window.addEventListener('resize', function(){
//     if(isResizing){
//         return
//     }
//     isResizing = setTimeout(function(){
//         init()
//         clearTimeout(isResizing)
//         isResizing = undefined
//     }, 300)
// }, false)

export {
    init,
    dateTransform
}
