//01 网站换肤
$(function(){
		var $li =$("#skin li");
		$li.click(function(){
			switchSkin( this.id );
		});
		var cookie_skin = $.cookie("MyCssSkin");
		if (cookie_skin) {
			switchSkin(cookie_skin);
		}
});

function switchSkin(skinName){
		$("#"+skinName).addClass("selected")                //当前<li>元素选中
		.siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
	    $("#cssfile").attr("href","style/skin/"+ skinName +".css"); //设置不同皮肤
		$.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}
//02导航效果（兼容IE6）
$(function(){
	   $("#navigation ul li:has(ul)").hover(function(){
			$(this).children("ul").stop(true,true).slideDown(400);
        },function(){
		    $(this).children("ul").stop(true,true).slideUp("fast");
		});
})

//01 新闻滚动 
$(function(){
        var $this = $(".scrollNews");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");//模拟鼠标离开
});

function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); //获取行高
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
   })
}

//02 模块展开和折叠 
$(function(){
	 $(".module_up_down").toggle(function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","images/toggle.jpg");
			});
		 },function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","images/toggle.jpg");
			});
	 })
})


//02-2 模块展开和折叠 
$(function(){
	 $(".module").toggle(function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","images/toggle.jpg");
			});
		 },function(){
			var $self = $(this);
			$self.prev().slideToggle(600,function(){
				  $("img",$self).attr("src","images/toggle.jpg");
			});
	 })
})

