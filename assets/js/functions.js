$(function() {

  workBelt();

  workLoad();

  clientStuff();

  $("header h1").fitText(1, { minFontSize: '20px', maxFontSize: '72px' });


  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  $('img').attr({
   "ondrag":"return false",
   "ondragdrop":"return false",
   "ondragstart":"return false"
 });

})


function workBelt(){
  $('label').click(function(){
    $('.work-belt').css('left', '-100%');
    $('.work-container').show();
  });

  $('.work-return').click(function(){
    $('.work-belt').css('left', '0%');
    $('.work-container').hide(800);
  });
}



function workLoad(){
  $.ajaxSetup({ cache:true });

  $('label').click(function(){

    var 
    spinner = `<div class="sk-circle">
    <div class="sk-circle1 sk-child"></div>
    <div class="sk-circle2 sk-child"></div>
    <div class="sk-circle3 sk-child"></div>
    <div class="sk-circle4 sk-child"></div>
    <div class="sk-circle5 sk-child"></div>
    <div class="sk-circle6 sk-child"></div>
    <div class="sk-circle7 sk-child"></div>
    <div class="sk-circle8 sk-child"></div>
    <div class="sk-circle9 sk-child"></div>
    <div class="sk-circle10 sk-child"></div>
    <div class="sk-circle11 sk-child"></div>
    <div class="sk-circle12 sk-child"></div>
    </div>`, 
    $this = $(this),
    newTitle = $this.find('strong').text(),
    newFolder = $this.data('folder'),
    newHTML = '/work/'+ newFolder +'.html';
    $('.proj-title').text(newTitle);
    $('.project-load').html(spinner).load(newHTML);

  })

}


function clientStuff(){
  $('.client-unit').first().addClass('active-client');
  $('.client-logo').first().addClass('active-client');
  $('.mobile-item').first().addClass('active-client');

  var lastPosition = 0;

  $('.client-logo, .mobile-item').click(function(){

    var  
    $this = $(this),
    $siblings = $this.parent().children(),
    position = $siblings.index($this);
    lastPosition = position;
    

    $('.client-unit').removeClass('active-client animation-target').eq(position).addClass('active-client  animation-target');
    $('.client-logo').removeClass('active-client').eq(position).addClass('active-client');
    $('.mobile-item').removeClass('active-client').eq(position).addClass('active-client');
    console.log(lastPosition);


  });

  $('.client-control-next').click(function(){

    console.log(lastPosition);

    if (lastPosition < 3){
      $('.client-unit').removeClass('active-client animation-target').eq(lastPosition+1).addClass('active-client  animation-target');
      $('.client-logo').removeClass('active-client').eq(lastPosition+1).addClass('active-client');
      lastPosition++;
    } else {
      lastPosition = 0;
      $('.client-unit').removeClass('active-client animation-target').eq(lastPosition).addClass('active-client  animation-target');
      $('.client-logo').removeClass('active-client').eq(lastPosition).addClass('active-client');
    }
    
  });

  $('.client-control-prev').click(function(){
    console.log(lastPosition);

    if (lastPosition > 0){
      $('.client-unit').removeClass('active-client animation-target').eq(lastPosition-1).addClass('active-client  animation-target');
      $('.client-logo').removeClass('active-client').eq(lastPosition-1).addClass('active-client');
      lastPosition--;
    } else {
      lastPosition = 3;
      $('.client-unit').removeClass('active-client animation-target').eq(lastPosition).addClass('active-client  animation-target');
      $('.client-logo').removeClass('active-client').eq(lastPosition).addClass('active-client');
    }
    
  });
}


/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );