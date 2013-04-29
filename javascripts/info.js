    
$(document).ready(function() {

    //move the image in pixel
    var move = -15;
    
    //zoom percentage, 1.2 =120%
    var zoom = 1.2;

    //On mouse over those thumbnail
    $('.player').hover(function() {
        
        //Set the width and height according to the zoom percentage
        //width = $('.zitem').width() * zoom;
        //height = $('.zitem').height() * zoom;
        
        //Move and zoom the image
        //$(this).find('img').stop(false,true).animate({'width':width, 'height':height, 'top':move, 'left':move}, {duration:200});
        
        //Display the caption
        $(this).find('div.info').stop(false,true).slideDown(400);
    },
    function() {
        //Reset the image
        //$(this).find('img').stop(false,true).animate({'width':$('.zitem').width(), 'height':$('.zitem').height(), 'top':'0', 'left':'0'}, {duration:100});  

        //Hide the caption
        $(this).find('div.info').stop(false,true).slideUp(300);
    });

});