

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
		
				
		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb_r li").removeClass();
				$(".gnb_r li").eq(i).addClass("on");
			}
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
		
				
		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb_r li").removeClass();
				$(".gnb_r li").eq(i).addClass("on");
			}
		}								
	});
		/* menu li on */
	$(window).on("scroll",function(){		
		
		var ht = $(window).height();				
		var scroll = $(window).scrollTop();
						
		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb li").removeClass();
				$(".gnb li").eq(i).addClass("on");
			}
		}								
	});
	
	
	/* menu li on */
	$(window).on("scroll",function(){		
		
		var ht = $(window).height();				
		var scroll = $(window).scrollTop();
						
		for(var i=0; i<7;i++){
			if(scroll>=ht*i && scroll< ht*(i+1)){
				$(".gnb_r li").removeClass();
				$(".gnb_r li").eq(i).addClass("on");
			}
		}								
	});
	
		//각각의 section에서 마우스를 움직이면
	$("section").on("mousemove",function(e){		
	
		//변수 posX에 마우스 커서의 x축 위치 저장
		var posX= e.pageX;
		//변수 posY에 마우스 커서의 y축 위치 저장
		var posY= e.pageY;
		
	
		//favorite flavors 박스의 이미지 위치값을 마우스 커서의 위치값과 연동
		$(".fav1").css({"right":20-(posX/30) , "bottom":220-(posY/30) });
		$(".fav2").css({"right":130+(posX/20) , "bottom":-10+(posY/20) });
		$(".fav3").css({"right":60+(posX/20) , "top":10+(posY/20) });	
			
	});


//slide
jQuery(document).ready(function ($) {

            var jssor_1_options = {
              $AutoPlay: true,
              $SlideDuration: 800,
              $SlideEasing: $Jease$.$OutQuint,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/
        });


	
	}); //function end

