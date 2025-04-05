var degree = new function(){
    this.degreeButton = $(".degree-button");
}
var majors = {
    "master-finance-and-banking": {"Title":"Finance and Banking","Price":2400,"Study Year":2}
}

$(document).ready(function(){
    let lastScrollY = $(window).scrollTop();
    let scrollTimeout;
    let $registerBtn = $(".register");
    $("#owl-demo1").owlCarousel({
        items: 1, 
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 8000,
        autoplayHoverPause: false, 
        nav: false, 
        dots: true,
    });
    $("#owl-demo-student").owlCarousel({
        items: 1, 
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 8000,
        autoplayHoverPause: false, 
        nav: false, 
        dots: true,
    });
    
    $("#owl-demo2-master").owlCarousel({
        items: 3, 
        loop: false, 
        autoplay: false, 
        nav: false, 
        dots: false,
        margin: 15, 
        responsive: {
            0: { items: 2 },
            1400: { items: 5 } 
        }  
    });    
    $("#owl-demo2-bachelor").owlCarousel({
        items: 3, 
        loop: false, 
        autoplay: false, 
        nav: false, 
        dots: false,
        margin: 15, 
        responsive: {
            0: { items: 2 },
            1400: { items: 5 } 
        }  
    });
    $("#owl-demo2-associate").owlCarousel({
        items: 3, 
        loop: false, 
        autoplay: false, 
        nav: false, 
        dots: false,
        margin: 15, 
        responsive: {
            0: { items: 2 },
            1400: { items: 5 } 
        }  
    });

    showMajor("bachelor")
    degree.degreeButton.click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active")
        let degree = $(this).attr("id")
        showMajor(degree)
    })

    $(".carousel-degree .item").click(function(){
        var degreeid = $(".degree-button.active").index(".degree-button")+1;
        var majorid = $(this).data("id");
        window.location.href = "major.html?degreeid="+degreeid+"&majorid="+majorid;     
    })

    $(window).on("scroll", function () {
        clearTimeout(scrollTimeout);
        $registerBtn.addClass("hidden").removeClass("bounce");
        let currentScrollY = $(window).scrollTop();
        if (currentScrollY < lastScrollY) {
            $registerBtn.removeClass("hidden"); 
        }
        lastScrollY = currentScrollY;

        scrollTimeout = setTimeout(function () {
            $registerBtn.removeClass("hidden").addClass("bounce");
        }, 1500);
    });
    $("#language").click(function(){
        console.log("hello hi bye bye");
        alert('alert')
        window.location.href = "indexkhmer.html";
    })
    
});
function showMajor(degree){
    $(".degree-button").removeClass("active");
    $("#" + degree).addClass("active");
    $("#owl-demo2-"+degree).show();
    $("#owl-demo2-"+degree).siblings(".carousel-degree").hide();
    $("#mobile-"+degree).show();
    $("#mobile-"+degree).siblings(".carousel-degree").hide();
}
