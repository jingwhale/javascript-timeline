window.onload = function(){
 	var 
 		//记录当前已经添加active类的li的索引号
 		curIndex = 0,

 		//查找所有被点击的元素对象
 		timeLine = document.getElementById("timeline"),
 		clickArea = timeLine.getElementsByTagName("s"),

 		//查找所有li元素对象
 		timePoint = timeLine.getElementsByTagName("li");

 	//为每个被点击的对象绑定单击事件
 	for( var i=0, len=clickArea.length; i<len;i++ ){
 		(function( i ){
 			clickArea[i].onclick = function(){
	 			//为被点击的时间点li添加active类
	 			timePoint[i].className = "active";

	 			//根据索引号变量的值，去除上一个li的active类
	 			timePoint[curIndex].className = "";

	 			//将索引号变量值更新为被点击的li的索引号
	 			curIndex = i;
	 		};
 		})( i );
 	}
 };