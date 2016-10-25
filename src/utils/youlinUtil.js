/**
 *  YOULIN APP 使用的方法
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

	function cookie(){
        return "123456789";
		var strCookie = document.cookie;
        var arrCookie = strCookie.split(";");
        for (var i = 0; i < arrCookie.length; i++) {
            var temp = arrCookie[i].split("=");
            var key = temp[0].replace(/(^\s*)|(\s*$)/g, '');
            if (key == "identity") {
                var value = unescape(temp[1]);
                return value;
            }
        }
	}

    function getYoulinVersion() {
        if (ua.match(/Youlin\/Android/i) == 'youlin/android') {
            var index = ua.indexOf('youlin/android');
            var version = ua.substring(index + 15);
            return version;
        }else if(ua.match(/Youlin\/IOS/i) == 'youlin/ios'){
            var index = ua.indexOf('youlin/ios');
            var version = ua.substring(index + 11);
            return version;
        }
    }

    function isInYoulin(){
        if (ua.indexOf('youlin') > -1) {
            return true;
        }
        return false;
    }

	return {
		cookie: cookie,
        youlinVersion: getYoulinVersion,
        isInYoulin: isInYoulin
	}
}));