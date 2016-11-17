$(document).ready(function ($) {
    
    //Cache some variables
    var links = $('.navigation').find('li'),
        slide = $('.slide'),
        button = $('.button'),
        button0 = $('.button0'),
        mywindow = $(window),
        htmlbody = $('html,body');
    
    //Setup waypoints plugin
    slide.waypoint(function (event, direction) {
        
        var dataslide = $(this).attr('data-slide'),
            dataslideThis = $(this).attr('data-slide'),
            idCurrent = 'slide' + dataslideThis,
            idPrev = 'slide' + (dataslideThis - 1),
            dataslideNext = parseInt(dataslideThis) + 1,
            idNext = 'slide' + dataslideNext;

        if (direction === 'down') {
            $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');

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
        } else if (direction === 'up') {
            $('.navigation li[data-slide="' + (dataslide-1) + '"]').addClass('active').next().removeClass('active');

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
        //Setup waypoints plugin End

        //below turns sound down when not activated
        $('audio:not(.active)').animate({
            volume: 0
        }, 0, function () {
            $('audio:not(.active)').get(0).pause();
        })
        
        $('section.slide audio').each(function(){
            $(this).bind('ended', function(){
                var dataslide = parseInt($(this).parents('.slide').attr('data-slide')) + 1;
                goToByScroll(dataslide);
                $("#start").removeClass('active');
            });
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

    mywindow.scroll(function(){
        if ($('.navigation li').not('.navigation li:first-child, .navigation li:last-child').hasClass('active')) {  
            $("#topbar").fadeIn('fast');
            $(".navigation").fadeIn('fast');
        }

        else if ($('.navigation li:last-child').hasClass('active')) {
            $("#topbar").fadeOut('fast');
            $(".navigation").fadeOut('fast');
        }

        else if ($('.navigation li:first-child').hasClass('active')) {
            $("#topbar").fadeOut('fast');
            $(".navigation").fadeOut('fast');
        }
    });

    //Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
    //easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
    function goToByScroll(dataslide) {
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');

    }
    
    links.click(function (e) {
        e.preventDefault();
        var dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });
    
    button.click(function (e) {
        e.preventDefault();
        var dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
    });

    button0.click(function (e) {
        e.preventDefault();
        var dataslide = $(this).attr('data-slide');
        goToByScroll(dataslide);
        $('body').removeClass('noscroll');
        $('.slide[data-slide="0"] audio').trigger("play"); // plays the audio
        
        setTimeout(
            function () {
                $("#topbar").fadeIn('fast');
                $(".navigation").fadeIn('fast')
            }, 1500);

        setTimeout(
            function () {
                $("#1930s").get(0).volume = 0;
                $("#1930s").trigger("play");
                $("#1930s").animate({
                    volume: 1
                }, 1000); // puts the volume to 1 in 1000 ms

                // $("#topbar").fadeIn('fast');
                if ($('#mute').hasClass('muted')) {
                    $('audio.active').trigger("mute");
                    $('audio').animate({
                        volume: 0
                    }, 200);
                    $('audio.active').trigger("pause");
                    $('#mute div').css({
                        'background': 'url(img/mute_on.png) center center no-repeat'
                    });
                };
            }, 2000);
    });
    
    //Mute button on click add class muted, mute and change icon
    $(document).on("click", "#mute", function(){
        $('#mute').addClass('muted');
        // Usage
        if ($('#mute').hasClass('muted')) {
            $('audio.active').trigger("mute");
            $('audio').animate({
                volume: 0
            }, 200);
            $('audio.active').trigger("pause");
            $('#mute div').css({
                'background': 'url(img/mute_on.png) center center no-repeat'
            });
        };
    })
    //Mute button - if exists turn on the music remove class and change bg
    $(document).on("click", "#mute.muted", function(){
        $('audio.active').trigger("play");
        $('audio.active').animate({
            volume: 1
        }, 200);
        $('#mute').removeClass('muted');
        $('#mute div').css({
            'background': 'url(img/mute_off.png) center center no-repeat'
        });
    });   
});