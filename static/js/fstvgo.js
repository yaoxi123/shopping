//首页基本js
$(function() {
	$(".tocart").click(function(){
		window.location.href="cart.html";
	})
	
	$("#show_id").mouseenter(function() {
		$("#first_list").css("display", "block")
		$("#first_list").mouseleave(function() {
			$("#first_list").css("display", "none")
		})
	})

	$(".show_id").mouseenter(function() {
		$("#second_list").css("display", "block")
		$("#second_list").mouseleave(function() {
			$("#second_list").css("display", "none")
		})
	})

	
	function userss(e) {
		var users = $.cookie("loginUser");
		if(users) {
			$(".par1").hide();
			$(".par2").show();
		} else {
			$(".par1").show();
			$(".par2").hide();
		}
	}
	userss();
	$("#getout").click(function() {
		$.cookie("loginUser", "", {expires:22, path:"/"})
		userss();
	})
	
	
		$("img").mouseover(function(){
			$(this).animate({
			   opacity:0.7,
			},"fast")
			$(this).animate({
			   opacity:1,
			},"fast")
		})
	})		


$(function() {
		$.getJSON("json/lunbotu.json", function(data) {
			for(i = 0; i < data.length; i++) {
				var obj = data[i];
				var li = $("<li><a href=" + obj.links + '><img src=' + obj.src + "/></a></li>");
				li.appendTo($(".slide"));
			}
			var li2s = [];
			for(i = 0; i < data.length; i++) {
				var li2 = $("<li>" + (i + 1) + "</li>")
				li2s.push(li2);
				li2.appendTo($(".ico"))
			}
			li2s[0].addClass("active")
			var bannerSlider = new Slider($('.c_show'), {
				time: 2500,
				delay: 400,
				event: 'click',
				auto: true,
				mode: 'fade',
				controller: $('.ico'),
				activeControllerCls: 'active',

			});
			//	            	     lis.removeClass("active")
		})
	})
$(function(){
	$.getJSON("json/goods.json",function(data){
		for(var i =0;i<data.length;i++){
			var obj = data[i];
			var id = data[i].id;
			var img = $("<img src="+obj.src+"/>");
			var p = $("<p>"+obj.name+"</p>");
			var span = $("<span>"+obj.price+"</span>");
			var li = $("<li></li>");
			li.append(img,p,span);
			li.appendTo($(".l_ul"))	//添加li   
		}
		var list = $(".l_ul li");
		list.click(function(){
			window.location.href="details.html";
			var mass = {
			   imgsrc: $(this).find("img").attr("src"),
				 name: $(this).find("p").html(),
			    price: $(this).find("span").html(),
			}
			$.cookie("mass",JSON.stringify(mass),{expires:22,path:"/"})
			//console.log($.cookie("mass"))
		})
		//轮播图
		var box = $(".l_see");
		
		var ul = $(".l_ul");
		list.first().clone().appendTo(ul);
		var size = $(".l_ul li").length;
		var i = 0;
		var timer = setInterval(function() {
			i++;
			move();
		}, 2700)

		function move() {
			if(i < 0) {
				ul.css("left", -(size - 1) * 208)
				i = size - 2
			}
			if(i >= size) {
				ul.css("left", 0);
				i = 1;
			}
			ul.stop().animate({
				left: -i * 208
			}, 700);
		}
		$("#left").click(function() {
			i--;
			move();
		})

		$("#right").click(function() {
			i++;
			move();
		})
	})
})
	//	

//				var bannerSlider = new Slider($('.c_show'), {
//					time: 2500,
//					delay: 400,
//					event: 'click',
//					auto: true,
//					mode: 'fade',
//				    controller: $('.ico'),
//					activeControllerCls: 'active'
//				});

$(function() {
	var show = $(".c_list").find(".list_show");
	var li = $(".c_list_ul").children("li").mouseenter(function() {
		var _index = $(this).index();
		$(show).hide();
		$(show[_index]).show();
	});
	$("#cont").mouseleave(function() {
		$(show).hide();
	})

})

$(function() {
		
	})
	//中间的轮播图
$(function() {
	var box = $("#mm_bb");
	var list1 = $("#mmm_bb #m_bb");
	var list2 = $("#mmm_bb");
	list1.first().clone().appendTo(list2);
	var sizes = $("#mmm_bb #m_bb").length;
	//console.log(sizes)

	var i = 0;
	var timer;

	function start() {
		timer = setInterval(function() {
			i++;
			move();
		}, 2500)
	}
	start();

	function move() {
		if(i < 0) {
			list2.css("left", -(sizes - 1) * 720)
			i = sizes - 2
		}
		if(i >= sizes) {
			list2.css("left", 0);
			i = 1;
		}
		list2.stop().animate({
			left: -i * 720
		}, 500);
	}
	$(".a_left").click(function() {
		clearInterval(timer)
		i--;
		move();
		start();
	})

	$(".a_right").click(function() {
		clearInterval(timer);
		i++;
		move();
		start();
	})
	$("#mm_bb").hover(function() {
			clearInterval(timer)
		},
		function() {
			clearInterval(timer);
			start();
		}
	)

})
//侧边
$(function(){
	$(".p_center_cart").click(function(){
		window.location.href="cart.html";
	})
	$(".p_center > div").mouseenter(function(){
		if ($(this).index() == 0) {
			$(this).eq(0).css({"background":"#ff5c4d","color":"white"});
		}else  {
			$(this).find("i").addClass("activess");
			$(this).find("b").stop().animate({right:"34px"}).css("background","#ff5c4d")
		}
	});
	$(".p_center div").mouseleave(function(){
		if ($(this).index() == 0) {
			$(this).eq(0).css({"background":"#333","color":"#ff5c4d"});
		}
		$(this).find("b").stop().animate({right:"-62px"}).css("background","#3f3c3c");
		$(this).find("i").removeClass("activess")
	})
	
	
	$(".p_foot div").mouseenter(function(){
		$(this).find("i").addClass("activess");
		$(this).find("img").show();
		$(this).find("b").animate({right:"34px"}).css("background","#ff5c4d")
				
	})
	$(".p_foot div").mouseleave(function(){
		$(this).find("b").animate({right:"-62px"}).css("background","#3f3c3c");
		$(this).find("i").removeClass("activess")
		$(this).find("img").hide();
	})
	
	
	    //var scrollTop = $("body").scrollTop();
	    //console.log(scrollTop);
	    $("#totop").click(function(){
		   $("body").animate({scrollTop:0},200);
	    })
		
	$(window).scroll(function(){
		var scrollTop = $("body").scrollTop();
		//console.log(scrollTop)
	    if(scrollTop >= 640){
		  $("#dock").show();
		}else if(scrollTop<640){
		  $("#dock").hide();
		}
	})
	
})
//固定搜索
//$(function(){
//	var scrollTop = $("body").scrollTop();

//			
//	}
//})

