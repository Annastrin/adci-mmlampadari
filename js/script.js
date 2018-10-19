let sliderImages = {
    'dot1': "url('./img/francesco-casalino-531157-unsplash.jpg')",
    'dot2': "url('./img/main-img.jpg')",
    'dot3': "url('./img/photo-1517991104123-1d56a6e81ed9.jpg')"
};

let prevSlider = '#dot2';

$(document).ready(function(){     
    $(".dot").click(function(event){        
        $(prevSlider).removeClass("active");
        $(".main").css("background-image", sliderImages[event.target.id]);
        $(event.target).addClass("active");
        prevSlider = '#' + event.target.id;
    });


    $(".hide-button").click(function(){
        $(".articles").slideUp(200);
    });

    $(".show-button").click(function(){
        $(".articles").slideDown(200);
    });


    $(".authentication").click(function(){
        $(".authentication-window").css("display", "block");
    });


    $("#close").click(function(){
        $(".authentication-window").css("display", "none");
    });
    
    // TODO close the modal window, when click outside the modal window
    // https://stackoverflow.com/questions/9538868/prevent-body-from-scrolling-when-a-modal-is-opened
    
});