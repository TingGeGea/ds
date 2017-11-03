/*商品评分效果*/
$(function(){
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");//获取a的title值
	     alert("您给此商品的评分是："+title);//弹窗
		 var cl = $(this).parent().attr("class");//获取li的样式名
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
})