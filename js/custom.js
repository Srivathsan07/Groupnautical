 		//Jquery
	   $(document).ready(function(){
		   
		   //href_location
		    $('.scroll-link').click(function(e){
				  e.preventDefault();
				  $id = $(this).attr('href');
				  $('body,html').animate({
				   scrollTop: $($id).offset().top - 100
				  }, 750);
				 });
		   
			//Map == hide show
			$(".world-map").click(function(){
				$(".address_section").toggleClass("active");
			});
			//Menu_hover
			$("li.dropdown").mouseover(function(){
				$(this).addClass("myactive");
			});
			$("li.dropdown").mouseout(function(){
				$(this).removeClass("myactive");
			});	
			
			//Flurry-ball
			 $('.home-banner-page').flurry({
              character: "⚈",
              color: ["#fff"],
              speed: 6000,
              height: 480,
              frequency: 1,
			  small:8,
              large: 22,
              rotation: 10,
              rotationVariance: 20,
              startRotation: 10,
              wind: 1,
              windVariance: 1,
              opacityEasing: "cubic-bezier(1,0,.96,.9)"
            });
			
			//Slider-HomePages
			$("#testimonial-slider").owlCarousel({
				items:4,
				itemsDesktop:[1000,4],
				itemsDesktopSmall:[979,3],
				itemsTablet:[991,3],
				pagination:true,
				autoPlay:false
			});
			//client Says
				//Slider-HomePages
			$("#testimonial-slider21").owlCarousel({
				items:2,
				itemsDesktop:[1000,4],
				itemsDesktopSmall:[979,3],
				itemsTablet:[991,3],
				pagination:true,
				autoPlay:false
			});
			
			//hover
			$(".testmeeet_team").mouseover(function(){
				$(this).addClass("active");
			});
			$(".testmeeet_team").mouseout(function(){
				$(this).removeClass("active");
			});
			
			
			
		});
		//Javascript
		// Responsive Menu bar
         	function openNav() {
         	document.getElementById("myNavbar").style.left = "0";
         	}
         
         	function closeNav() {
         		document.getElementById("myNavbar").style.left = "-100%";
         	}
			

		//header fixed
		$(window).scroll(function(){
		  var sticky = $('.groupnautical-sticky'),
			  scroll = $(window).scrollTop();

		  if (scroll >= 250) sticky.addClass('fixed');
		  else sticky.removeClass('fixed');
		});