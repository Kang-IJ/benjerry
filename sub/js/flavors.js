// JavaScript Document
$(function(){
	
var tabBtn=$(".tab_btn>ul>li");
var tabBtn1=$(".pc_variety>ul>li");
var tabCont=$(".tab_cont>div");

tabCont.hide().eq(0).show();

tabBtn.click(function(e){
	e.preventDefault();
	
	var target=$(this);
	var index=target.index();
	
	tabBtn.removeClass("active");
	tabBtn1.removeClass("active");
	target.addClass("active");
	tabCont.css("display","none");
	tabCont.eq(index).css("display","block");
	
	});  //tab btn end
	
	
}); //function end

