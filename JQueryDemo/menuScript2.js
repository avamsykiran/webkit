
$(function(){			
	$("nav.menuBar>ol>li>ol").hide();
	
	$("nav.menuBar>ol>li").mouseenter(function(){
		var menu = $(this).children('ol');
		
		if(menu.hasClass('fade'))
			menu.fadeIn();
		else if(menu.hasClass('slide'))
			menu.slideDown();
		else
			menu.show();
	});
	
	$("nav.menuBar>ol>li").mouseleave(function(){
		var menu = $(this).children('ol');
		if(menu.hasClass('fade'))
			menu.fadeOut();
		else if(menu.hasClass('slide'))
			menu.slideUp();
		else
			menu.hide();
	});
	
 });
	