$(document).ready(function () {
    // MAIN NAVIGATION 
    $(".js--section-features").waypoint(function (direction) {
        if (direction == "down") {
          $("nav").addClass("fixed")  
        } else {
            $("nav").removeClass("fixed")
        }
    },{
        offset: "70px"
    })

    // LINKING BUTTONS 
    $(".link-plans").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1500)
    })

    $(".link-features").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1500)
    })

    //LINKING NAV-LINKS
    $(".to-home").click(function () {
        $("html, body").animate({scrollTop: $(".js--home").offset().top}, 1500)
    })
    $(".to-features").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1500)
    })
    $(".to-works").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-works").offset().top}, 1500)
    })
    $(".to-cities").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-cities").offset().top}, 1500)
    })
    $(".to-plans").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1500)
    })

    // RESPONSIVE HAMBURGER
    $(".mobile-nav-icon").click(function () {
        var links = $(".js--main-nav")
        var icon = $(".mobile-nav-icon i")
        links.slideToggle(200)

        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round")
            icon.removeClass("ion-navicon-round")
        } else {
            icon.removeClass("ion-close-round")
            icon.addClass("ion-navicon-round")
        }
    })


});