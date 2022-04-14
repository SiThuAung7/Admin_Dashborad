$(document).ready(function(){

// Show Menu
   $(".show-sidebar-btn").click(function(){
       $(".sidebar").animate({marginLeft:0});
   });

//Hide Menu
    $(".hide-sidebar-btn").click(function(){
        $(".sidebar").animate({marginLeft:"-100%"});
    });
});

// anchor link
function anchor(url){
    setTimeout(() => {
        location.href = `${url}`;
    }, 500);
}

// Popover
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// Full Screen Mode
$('.full-screen-btn').click(()=>{
    let current = $('.full-screen-btn').parents('.card');
    current.toggleClass('full-screen');

    if(current.hasClass('full-screen')){
        $('.full-screen-btn').html(`<i class="feather feather-minimize text-secondary"></i>`);
    }else{
        $('.full-screen-btn').html(`<i class="feather feather-maximize text-secondary"></i>`);
    }
});
