$(document).ready(function () {
    // $(document).keydown(function(e){
    //     if (e.keyCode == 40) { 
    //         //alert('#' + dataslide4N + '')
    //        $("html, body").animate({

    //                 scrollTop: $('#' + dataslide4N + '').offset().top
    //             }, 1500, 'easeInOutQuint');
    //        $('section[id="' + dataslide1C + '"] .button').addClass('flash');
    //        return false;
    //        event.preventDefault();
    //     }

    //     if (e.keyCode == 38) { 
    //         //alert('#' + dataslide4N + '')
    //        $("html, body").animate({

    //                 scrollTop: $('#' + dataslide2P + '').offset().top
    //             }, 1500, 'easeInOutQuint');
    //        return false;
    //        event.preventDefault();
    //     }

    //     if (e.keyCode == 32) { 
    //        $(".button0").click()
    //     }
    // });

    slides = $('.slide');
    slides.waypoint(function (event, direction) {
        //cache the variable of the data-slide attribute associated with each slide
        var dataslideThis = $(this).attr('data-slide'),
            idCurrent = 'slide' + dataslideThis, //Current
            idPrev = 'slide' + (dataslideThis - 1), //Previous
            dataslideNext = parseInt(dataslideThis) + 1,
            idNext = 'slide' + dataslideNext; //Next
        //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the previous navigation link 
        if (direction === 'down') {
            $('section[id="' + idCurrent + '"] audio').addClass('active');
            $('section[id="' + idPrev + '"] audio').trigger("pause").removeClass('active').animate({
                volume: 1
            }, 1000);
            $('section[id="' + idNext + '"] audio').trigger("pause").removeClass('active').animate({
                volume: 1
            }, 1000);
            $('section[id="' + idCurrent + '"] audio.active').trigger("play");
            $('section[id="' + idCurrent + '"] audio.active').animate({
                volume: 1
            }, 1000);


            $('section[id="' + idCurrent + '"] div.year').fadeIn(2000);
            $('section[id="' + idPrev + '"] a.button').fadeOut(1000);
        }
        // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and 
        //remove the active class from the next navigation link 
        else {
            $('section[id="' + idCurrent + '"] audio').trigger("pause").removeClass('active').animate({
                volume: 1
            }, 1000);
            $('section[id="' + idPrev + '"] audio').addClass('active');
            $('section[id="' + idPrev + '"] audio.active').trigger("play");
            $('section[id="' + idPrev + '"] audio.active').animate({
                volume: 1
            }, 1000);


            $('section[id="' + idCurrent + '"] div.year').fadeOut(1000);
            $('section[id="' + idPrev + '"] a.button').fadeIn(1000);
        }

        //below turns sound down when not activated
        $('audio:not(.active)').animate({
            volume: 0
        }, 0, function () {
            $('audio:not(.active)').get(0).pause();
        })


//*****************************************************************************************************//


        //below music finishes moves to next slide
        $("#1920s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide2").offset().top
            }, 1500, 'easeInOutQuint');
            $("#start").removeClass('active')
        });
        $("#1930s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide3").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1940s").bind("ended", function () {

            $("html,body").animate({
                scrollTop: $("#slide4").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1950s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide5").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1960s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide6").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1970s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide7").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1980s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide8").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#1990s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide9").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#2000s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide10").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#2010s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide11").offset().top
            }, 1500, 'easeInOutQuint');
        });
        $("#2020s").bind("ended", function () {
            $("html,body").animate({
                scrollTop: $("#slide12").offset().top
            }, 1500, 'easeInOutQuint');
        });

        if ($('#mute').hasClass('muted')) {
            $('audio.active').trigger("pause");
            $('audio').animate({
                volume: 0
            }, 0);
        };
    }, {
        offset: '50%'
    });
});
