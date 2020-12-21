var s=0;
var b=0;
$(document).ready(function(){
	//gnb
	$(".gnb > li").each(function(index){
		
		if ($(this).find(".menu").hasClass("on"))
		{
			$(this).find(".menu").next(".dep2").show();
			//$(".dep2 .s_menu.on").next(".dep3").show();
		}
	});
	
	$(".head_box .btn_menu").click(function(){
		if ($(this).hasClass("on"))
		{
			$(this).removeClass("on");
			$(".gnb_box").slideUp(100);
		}
		else
		{
			$(this).addClass("on");
			$(".gnb_box").slideDown(100);
		}
	});
	$(".gnb > li > .menu").click(function(){
		if ($(this).hasClass("on"))
		{
			$(this).removeClass("on");
			$(this).next(".dep2").slideUp(100);
		}
		else
		{
			$(".gnb > li > .menu").removeClass("on");
			$(this).addClass("on");
			$(this).next(".dep2").slideDown(100);
			$(".gnb > li > .menu").not(".on").next(".dep2").slideUp(100);
		}
	});
	$(".dep2 > li > .s_menu").click(function(){
		if ($(this).hasClass("on"))
		{
			$(this).removeClass("on");
			//$(this).next(".dep3").slideUp(100);
		}
		else
		{
			$(".dep2 > li > .s_menu").removeClass("on");
			$(this).addClass("on");
			//$(this).next(".dep3").slideDown(100);
			//$(".dep2 > li > .s_menu").not(".on").next(".dep3").slideUp(100);
		}
	});
	$(".gnb_box .gnb > li > .dep2 > li").click(function(){
		$(".head_box .btn_menu").toggleClass("on");
		$(".gnb_box").slideToggle(100);
	});
	//foot
	$(".site_sel").click(function(){
		$(".site_list").slideToggle(0);
		if ($(this).hasClass("on"))
		{
			$(this).removeClass("on");
		}
		else
		{
			$(this).addClass("on");
		}
	});

	//TOP
	/*
	$('a[href*=#],area[href*=#]').click(function() {
	    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
	      var $target = $(this.hash);
	      $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
	      if ($target.length) {
	        var targetOffset = $target.offset().top;
	        $('html,body').animate({
	          scrollTop: targetOffset
	        },
	        500);
	        return false;
	      }
	    }
	  });
	*/

	//======= 고객센터 select ========
	$(".select_box .selected").click(function(){
		
		if ($(this).hasClass("on"))
		{
			$(this).removeClass("on");
		}
		else
		{
			$(".select_box .selected").removeClass("on");
			$(this).addClass("on");
		}
		
	});

	
	
	$(".option li").click(function(){
		
		$(this).parent(".option").find("li").removeClass("on");
		$(this).addClass("on");
		$(this).parents(".select_box").find(".selected").text($(this).find("a").text());
		$(".select_box .selected").removeClass("on");
		
	});
	
	$("#brand li").click(function(){
		
		$(".cs_contact_body .cs_contact_wrap").eq(s).find(".cs_contact_box").removeClass("on");
		$(".cs_contact_body .cs_contact_wrap").eq(s).find(".cs_contact_box").eq($(this).index()).addClass("on");
		b = $(this).index();
	});
	
	//===============

});

//======= 고객센터 select ========
function typeSel(index){
	$(".cs_contact_body .cs_contact_wrap").removeClass("on");
	$(".cs_contact_body .cs_contact_wrap").eq(index).addClass("on");

	$(".cs_contact_body .cs_contact_wrap").eq(index).find(".cs_contact_box").removeClass("on");
	$(".cs_contact_body .cs_contact_wrap").eq(index).find(".cs_contact_box").eq(b).addClass("on");
	s = index;
}
