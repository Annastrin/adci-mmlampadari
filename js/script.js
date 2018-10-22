let sliderImages = {
    'dot1': "url('./img/slider-img1.jpg')",
    'dot2': "url('./img/main-img-full.jpg')",
    'dot3': "url('./img/slider-img2.jpg')"
};

let prevSlider = '#dot2';

$(document).ready(function(){ 
    
    /* Slide main images */
    $(".dot").click(function(event){        
        $(prevSlider).removeClass("active");
        $(".main").css("background-image", sliderImages[event.target.id]);
        $(event.target).addClass("active");
        prevSlider = '#' + event.target.id;
    });


    /* Hide and show articles at the bottom of the main */
    $(".hide-button").click(function(){
        $(".articles-block").slideUp(200);
    });

    $(".show-button").click(function(){
        $(".articles-block").slideDown(200);
    });


    /* Open and close the modal window with authentication */
    $(".auth-area").click(function(){
        $(".auth-window").addClass("active");
        $("body").addClass("modal-open");
    });

    let closeModal = () => {
        $(".auth-window").removeClass("active");
        $("body").removeClass("modal-open");
    }

    $("#close-modal").click(function(){
        closeModal();
    });   

    $(window).click(function(event){        
        let modal = $(".auth-window");
        if (event.target == modal[0]) {
            closeModal();
        }      
    });  
    
});