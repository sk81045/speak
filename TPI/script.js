
function senderAJAX(url,json){
	$.ajax({
       url : url,
       type : 'POST',
       dataType: 'json',
       data: json,
       async: false,//使用同步的方式,true为异步方式
	   timeout: 1000,  
       cache: false,  
       beforeSend: false, //加载执行方法    
       error: '',  //错误执行方法 
       success : function(data){
          call = data;
}
});
      return call;
}
var url = "http://lonelygod/Router/speak/app.php";
$(function(){
	$("#gt-submit").click(function(){
		var json = {
			"content":$('#en').val()
	    }; 
		var call = senderAJAX(url,json);
		if(call){
		    $('#de').html("chinglish  :  "+"'"+call.chinglish+"'");
		    $('#english').html("english  :  "+"'"+call.english+"'");
		    $('#sxx').css("border-style"," solid");
		}
	})
})