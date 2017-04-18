function getIP(){ 
		var ipVal = "";
		var ip_url2 = "http://120.27.213.192:9101/ip";
	    var options = {  
	        type: "get",
	        url: ip_url2,  
	        async:false,  
	        success: function (result) {  
	            if (result.code != 0) {
	            	console.log("获取ip失败，try ipinfo");
	            	ipVal = getIpinfo();	            
	            }else{
					ipVal = result.data;
	            }

	        },  
	        dataType: "json",  
	        error: function (result) {  
	            console.log("获取ip失败，try ipinfo");
	            ipVal =  getIpinfo();	            
	        }  
	    };  
	    $.ajax(options); 
	    
	    return ipVal;
	}
/**
* 获取ipinfo
**/
function getIpinfo(){
	var ipVal = "";
	var ip_url = "http://ipinfo.io/json";
    var options = {  
        type: "get",
        url: ip_url,  
        async:false,  
        success: function (result) {  
            ipVal = result.ip;
        },  
        dataType: "json",  
        error: function (result) {  
            alert("error:"+JSON.stringify(result));  
        }  
    };  
    $.ajax(options);
    return ipVal;
}


Date.prototype.Format = function (fmt) {  
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
function r(randomFlag, min, max){
    var str = "",
        range = min,
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', '_',
'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
    // 随机产生
    if(randomFlag){
        range = Math.round(Math.random() * (max-min)) + min;
    }
    for(var i=0; i<range; i++){
        pos = Math.round(Math.random() * (arr.length-1));
        str += arr[pos];
    }
    return str;
}