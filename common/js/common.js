

$(function(){
	

	
	//search
	$(".search").on("click",function(){
		$(".search_box").fadeToggle(500);
		
		});
	

//메뉴아이콘
	$('.menu_btn').click(function(){
		$('p.x1').toggleClass('active');
		$('p.x2').toggleClass('active');
		$('p.x3').toggleClass('active');
		$('.back').toggleClass('active');
		$('.menu2').toggleClass('active');
	});
			//top scroll 부드럽게 올라가기	
	$(document).ready(function(){
		$('.top').click(function(e){
			$.scrollTo(this.hash || 0, 300);
			e.preventDefault();
	   });
	});
//top
	$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 500 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".top").fadeIn();
      }else{
          $(".top").fadeOut();
      }
 });


	
	}); //function end

