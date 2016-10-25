/**
 * JS 常用的工具类
 */
(function(root, factory){
	if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.eventListener = factory();
    }
}(this, function(){

    var ua = navigator.userAgent.toLowerCase();

	function os(){
        if (ua.match(/Android/i) == 'android') {
            return "Android";
        }else{
            return "IOS";
        }
	}

    function runIframe(url){
        var ifr = document.createElement('iframe');
        ifr.src = url;
        ifr.style.display = 'none';
        document.body.appendChild(ifr);
        setTimeout(function(){
            document.body.removeChild(ifr);
        },500);
    }

    function queryString(val){
        var uri = window.location.search;
        var re = new RegExp("" + val + "=([^&?]*)", "ig");
        return ((uri.match(re)) ? (uri.match(re)[0]
            .substr(val.length + 1)) : null);
    }

    /**
     * 判断UA里面是否有val
     */
    function checkUA(val){
        if (ua.indexOf(val) > -1) {
            return true;
        }
        return false;
    }

    function checkClassName(node, className){
        return node.className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'));
    }

    function addClass(node, className){
        if (!this.checkClassName(node,className)) {
            node.className += " "+className;
        }
    }

    function removeClass(node, className){
        if (this.checkClassName(node,className)) {
            var reg = new RegExp('(\\s|^)'+className+'(\\s|$)');
            node.className=node.className.replace(reg,' ');
        }
    }

	return {
		os: os,
        runIframe: runIframe,
        queryString: queryString,
        checkUA: checkUA,
        checkClassName: checkClassName,
        addClass: addClass,
        removeClass: removeClass
	}
}));