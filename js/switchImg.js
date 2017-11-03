/*点击左侧产品小图片切换大图*/
$(function(){
	$(".pro_detail_left ul li img").livequery("click",function(){ 
		  var imgSrc = $(this).attr("src");  //	被点击的小图片对应的路径 img/aaa.jpg
		  var i = imgSrc.lastIndexOf(".");   //返回.最后出现的位置
		  var unit = imgSrc.substring(i);    //文件扩展名
		  imgSrc = imgSrc.substring(0,i);    //文件主名
		  var imgSrc_small = imgSrc + "_small"+ unit;//蓝色小图
		  var imgSrc_big = imgSrc + "_big"+ unit;//蓝色大图
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
	});
});