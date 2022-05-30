

$(function(){
	
	//section 높이 맞추기
	var ht = $(window).height();	
	$("section").height(ht);
	$(window).on("resize",function(){
		var ht = $(window).height();	
		$("section").height(ht);
	});	
	
		$("section").on("mousewheel",function(event,delta){    
		//마우스 휠을 올렸을때
          if (delta > 0) {  
             var prev = $(this).prev().offset().top;
			 $("html,body").stop().animate({"scrollTop":prev},500);
			 //마우스 휠을 내렸을때
          }else if (delta < 0) {  
			 var next = $(this).next().offset().top;
			 $("html,body").stop().animate({"scrollTop":next},500);                                         
          }
	
});
		/* 오른쪽 menu li on */
	$(window).on("scroll",function(){	
	
		var ht = $(window).height();
		
		var scroll = $(window).scrollTop();
		
				
		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb li").removeClass();
				$(".gnb li").eq(i).addClass("on");
			};
		}								
	});
	
	
	//menu
	
		var nav = $('.menu');
    var navoffset = $('.menu').offset();  
    $(window).scroll(function () {
        if ($(this).scrollTop() >= navoffset.top) {  
            nav.css('position','fixed').css('top',0).css('background','rgba(0,0,0,0.7');  
        	$(".logo2").css("display","block");
		}else {
            nav.css('position','absolute').css('top',80).css('background','transparent'); 
			$(".logo2").css("display","none");
        }
    });
	
	
	
	//스크롤 부드럽게
	$(document).ready(function(){
		$('.gnb a, .gnb_r a').click(function(e){
			$.scrollTo(this.hash || 0,300);		
				e.preventDefault();
				
			})
		});
	/*선택되어있는 곳 색 표시*/
	$(window).on("scroll",function(){	
	
		var ht = $(window).height();
		
		var scroll = $(window).scrollTop();
		
				
		for(var i=0; i<5;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb_r li").removeClass();
				$(".gnb_r li").eq(i).addClass("on");
			};
		}								
	});
	
	
	
	}); //function end

