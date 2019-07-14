$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});





	$( "#openNav" ).click(function() {	openNav(); });
	$( "#closeNav" ).click(function() {	closeNav();	});
	
	var nav = $("#myNav"); 

	function openNav() {	nav.css( 'height','100%');	 }
		function closeNav() { nav.css( 'height','0') }


	function animate(element, animaton) {
		element.addClass('animated '+animaton)
				.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
										$(this).removeClass('animated '+animaton);
						});
	}

	var introHeading = $('#sec-intro').find('.intro-header');					
	var subtext = $('#sec-intro').find('.intro-header +p');

	var serviceItem = $('#sec-services').find('.service-item');
	
	var technologiesLeft = $('#sec-technologies').find('.fromleft');
	var technologiesRight = $('#sec-technologies').find('.fromright');
	var technologiesSubheading = $('#sec-technologies').find('.page-heading + p');



	animate( subtext , 'flipInX');
	animate( introHeading , 'fadeInUp');

	$('#fullpage').fullpage({
		sectionsColor: ['#067BC2', '#F8333C', '#FFAE03', '44AF69', 'rgb(128, 239, 71)'  ],
		anchors: ['intro', 'services', 'technlogies', 'portfolio', 'contact' ],
		navigationTooltips:  ['INTRO', 'SERVICES', 'TECHNOLOGIES', 'PORTFOLIO', 'CONTACT' ],
		scrollingSpeed: 500,
		menu: '#menu',
		navigation: true,
		
		navigationPosition: 'right',
		

		onLeave: function(index, nextIndex, direction){			

			// 		Intro section transition 
			if (nextIndex == 1){				
				animate( introHeading , 'fadeInUp');
				animate( subtext , 'flipInX');
			}
			// 		Service section transition 
			if (  nextIndex == 2 ){					
				animate( serviceItem , 'slideInUp');
			}
			// 		Technologies section transition 
			if (nextIndex == 3){		
				animate( technologiesLeft , 'bounceInLeft');
				animate( technologiesRight , 'bounceInRight');
				animate( technologiesSubheading , 'fadeInUp');
				
			}
			// 		portfolio section transition 
			if (nextIndex == 4){						
				
			}

			// 		Contact section transition 
			if (nextIndex == 5){	
			}
		},	

		afterLoad: function(anchorLink, index){
			console.log( 'index: '+index+' anchorLink: '+anchorLink);
			if (index == 4){						
				
			$('#openNav').css('color' , '#444');
			}

						

		},
		




	});











	
});