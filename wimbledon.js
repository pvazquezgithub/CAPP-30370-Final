document.getElementById('usopen').addEventListener("click",function(){
  var input = document.getElementById('usopen');    
  console.log('Alt:'+input.getAttribute('alt'));
    });
document.getElementById('fopen').addEventListener("click",function(){
  var input = document.getElementById('fopen');    
  console.log('Alt:'+input.getAttribute('alt'));
    });
document.getElementById('aopen').addEventListener("click",function(){
  var input = document.getElementById('aopen');    
  console.log('Alt:'+input.getAttribute('alt'));
    });


document.getElementById('home').addEventListener("click",function(){
  var input = document.getElementById('home');    
  console.log('Alt:'+input.getAttribute('alt'));
    });



   
    section2 = $('#section2');
   
$(section2).on('click', '.usopen', function(){
    console.log( 'Width: ' + $(this).width() );
      console.log( 'Height: ' + $(this).height() );
    });
$(section2).on('click', '.fopen', function(){
    console.log( 'Width: ' + $(this).width() );
      console.log( 'Height: ' + $(this).height() );
    });
$(section2).on('click', '.aopen', function(){
    console.log( 'Width: ' + $(this).width() );
      console.log( 'Height: ' + $(this).height() );
    });
$(section2).on('click', '.home', function(){
    console.log( 'Width: ' + $(this).width() );
      console.log( 'Height: ' + $(this).height() );
    });


    
$(window).resize(function(e) {
  console.log( 'Width:' + $(window).width());
  console.log( 'Height:' + $(window).height());
    
});

console.log( 'Width:' + $(window).width());
  console.log( 'Height:' + $(window).height());

$(header).on('click', function() {
  console.log('Text:' + $(this).text());
  console.log('Color:' + $(this).css('color')); 
  console.log('Font-Size:' + $(this).css('font-size'));
});
