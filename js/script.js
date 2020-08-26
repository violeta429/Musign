
$(function(){

	 // 스크롤에 따른 애니메이션 추가 waypoint plugin 사용

	   $(".wp").waypoint(function(direction){
		if(direction==="down"){
				$(".wp").removeClass('hide').addClass('fadein');
				$('.content-img').addClass('clip');

			}
		},{
			offset:"45%"
		}); 

			

		$('.circle').waypoint(function(direction){
			if(direction==="down"){
				$('.circle').removeClass('hide').addClass("circle-ani")
			}
		},{
		   offset:"45%"
		});

// 스크롤 다운시 섹션3뒤에 그라디언트 배경

       $('section:nth-of-type(2)').waypoint(function(direction){
       	if(direction==="down"){
       	 $(".mint").addClass("backcolor");
       	 $(".service-text i").removeClass("hide").addClass("clip");
       	 $(".service-text h1").removeClass("hide").addClass("clip").addClass("ani-delay1");
       	}
       },{ 
       	offset: "20%"
       });

       
       $('.aboutmusign').waypoint(function(direction){
       	if(direction==="up"){
       	 $(".mint").removeClass("backcolor");
       	}
       },{ 
       	offset: "70%"
       });
  
      // service-img-wrap 안에 텍스트 스크롤시 보이기
      
       $('.service-img-wrap div h1:nth-of-type(1)').waypoint(function(direction){
       	if(direction==="down"){
       	 $(".service-img-wrap div h1:nth-of-type(1)").removeClass("hide").addClass("clip")
       	}
       },{ 
       	offset: "70%"
       });

        $('.service-img-wrap div h1:nth-of-type(2)').waypoint(function(direction){
       	if(direction==="down"){
       	 $(".service-img-wrap div h1:nth-of-type(2)").removeClass("hide").addClass("clip")
       	}
       },{ 
       	offset: "65%"
       });

       $('.service-img-wrap div h1:nth-of-type(3)').waypoint(function(direction){
       	if(direction==="down"){
       	 $(".service-img-wrap div h1:nth-of-type(3)").removeClass("hide").addClass("clip")
       	}
       },{ 
       	offset: "60%"
       });

       $('.service-img').waypoint(function(direction){
       	if(direction==="down"){
       	 $(".service-img").removeClass("hide").addClass("clip")
       	}
       },{ 
       	offset: "60%"
       });

    
      $('.intro-img').waypoint(function(direction){
       	if(direction==="down"){
       	 $(".intro-img").removeClass("hide").addClass("clip")
       	}
       },{ 
       	offset: "50%"
       });

       $('.ourvalue-text').waypoint(function(direction){
            if(direction==="down"){
             $(".ourvalue-text h1").removeClass("hide").addClass("clip")
            }
       },{ 
            offset: "70%"
       });

      


}) //function