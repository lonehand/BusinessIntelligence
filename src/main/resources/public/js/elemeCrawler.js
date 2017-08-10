(function($){
	
	var address = "http://localhost:9578/bi/eleme/";
	/**************************饿了么*******************************/
	//点击开抓按钮时
	$(".eleme .crawlerOrder").on('click',function(){
		
		//获取当前抓取时间及用户名
		var startDateTime = $(this).parents("tr").find(".startDateTime").val();
		var endDateTime = $(this).parents("tr").find(".endDateTime").val();
		var merchantUserName =  $(this).parents("tr").find(".merchantUserName").val();
		//发送请求
		$.ajax({

			url:address + "crawlerOrder",//请求路径
			type:"get",//请求方式 get和post
			dataType:"json",//返回数据的格式
			data:{
				//给后台发送数据	抓取时间	startTime等是要传给后台的字段名 可换 ,startDateTime是抓取开始时间
				startTime: startDateTime,
				endTime: endDateTime,
				userName: merchantUserName
			},
			success:function(e){
				//e 为请求成功后返回的数据
				console.log(e);
				alert(e);
//				$(this).parents("tr").find(".getTime").text();//text(括号里放返回的日期)
			},
			error:function(){
				//请求失败时的函数
				
				console.log("请求失败");//控制台输出请求失败
			}
		})
	})
	
	//点击下载按钮时
	$(".eleme .download").on("click",function(){
		//发送请求
		$.ajax({
			url:"./new_file.json",//请求路径
			type:"get",//请求方式 get和post
			dataType:"json",//返回数据的格式
			success:function(e){
				//e 为请求成功后返回的数据
				//console.log(e)
				
			},
			error:function(){
				//请求失败时的函数
				console.log("请求失败");//控制台输出请求失败
			}
		})
	})
	
	//crawlerOrder订单数据抓取
		$(".eleme .download").on("click",function(){
		//发送请求
		$.ajax({
			url:address+"crawlerOrder",//请求路径
			type:"get",//请求方式 get和post
			dataType:"json",//返回数据的格式
			success:function(e){
				//e 为请求成功后返回的数据
				//console.log(e)
				
			},
			error:function(){
				//请求失败时的函数
				console.log("请求失败");//控制台输出请求失败
			}
		})
	})
	
	//crawlerEvaluate顾客评价抓取
	$(".eleme .crawlerEvaluate").on("click",function(){
			//发送请求
			$.ajax({
				url:address+"crawlerEvaluate",//请求路径
				type:"get",//请求方式 get和post
				dataType:"json",//返回数据的格式
				success:function(e){
					//e 为请求成功后返回的数据
					//console.log(e)
					
				},
				error:function(){
					//请求失败时的函数
					console.log("请求失败");//控制台输出请求失败
				}
			})
		})
		
	
	
	
})(jQuery);
