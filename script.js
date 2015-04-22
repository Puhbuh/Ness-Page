var complete = function(){};
$(document).ready(function(){
 
 
   //cat flower thing
   var picTransition = function(){
      $('#sam').hide();
      $('#k').click(function(){
         $('#k').hide(1000, function complete(){
            $('#sam').show(complete)
         });     
      });
   };

   //nav bar
   //jsbin.com/jimiqu
   
   //slide down animation
   var box = function(){
      $('.box').animate({height: '550px'}, 1100)
   };
   //reset div 
   var reset = function(){
      $('.box').css({height: 0}); 
   };
   var pick = function(item){
      return $('#list li').index(item);
   }; 
   var showStuff = function(i){
      picTransition();
      $('.box').hide();
      var content = $(".box").get(i);
      $(content).show();
      box();
   };
   var setPick = function(item) {
      var itemNum = 
      pick(item);
      reset();
      showStuff(itemNum);
   };
   var menuClick = function(event) {
      setPick(event.currentTarget);  
   };
   $('#list li').hover(function(){
     $(this).stop(true, false).animate({'margin-left': "35px"});
     }, function() {
         $(this).stop(true, false).animate({'margin': 0});
     }).click(menuClick);
   setPick($("#list li")[0]);  
   
   //slideshow
      var currentPosition = 0;
		var slideWidth = 650;
		var slides = $('.slide');
		var numberOfSlides = slides.length;
		var slideShowInterval;
		var speed = 4000;
		
		slideShowInterval = setInterval(changePosition, speed);
		slides.wrapAll('<div id="slidesHolder"></div>')
		slides.css({ 'float' : 'left' });		
		$('#slidesHolder').css('width', slideWidth * numberOfSlides);
				
		function changePosition() {
			if(currentPosition == numberOfSlides - 1) {
				currentPosition = 0;
			} else {
				currentPosition++;
			}
			moveSlide();
		}		
		function moveSlide() {
				$('#slidesHolder')
				  .animate({'marginLeft' : slideWidth*(-currentPosition)});
		}
});









