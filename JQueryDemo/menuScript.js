/*
 $(function(){	
 	$("nav.menuBar>ol>li>ol").css('visibility','hidden');
	
	$("nav.menuBar>ol>li").mouseenter(function(){
		$(this).children('ol').css('visibility','visible');
	});
	
	$("nav.menuBar>ol>li").mouseleave(function(){
			$(this).children('ol').css('visibility','hidden');
	});
	
 });

*/

$(function(){			
	$("nav.menuBar>ol>li>ol").hide();
	
	$("nav.menuBar>ol>li").mouseenter(function(){
		$(this).children('ol').slideDown();
		//$(this).children('ol').fadeIn();
	});
	
	$("nav.menuBar>ol>li").mouseleave(function(){
		$(this).children('ol').slideUp();
		//$(this).children('ol').fadeOut();
	});
	
 });
	