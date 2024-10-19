//braches filter
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("brunchData");
		
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex-1].style.display = "block"; 

        $('.pins .pin').removeClass('active')
        $('.pins .pin').eq(slideIndex-1).addClass('active')    
    }

$(document).ready(function() {    
    
    //logistics animation
    var waypoint = new Waypoint({
        element: document.getElementById('logistics'),
        offset: '60%',
        handler: function(direction) {
            setTimeout(function(){
                $('.logistics').find('.icon:first-child').addClass('active')
            }, 300)
            setTimeout(function(){
                $('.logistics').find('.icon:nth-child(2)').addClass('active')
            }, 700)
            setTimeout(function(){
                $('.logistics').find('.icon:nth-child(3)').addClass('active')
            }, 1100)
            setTimeout(function(){
                $('.logistics').find('.icon:nth-child(4)').addClass('active')
            }, 1500)
            setTimeout(function(){
                $('.logistics').find('.icon:nth-child(5)').addClass('active')
            }, 1900)
            setTimeout(function(){
                $('.logistics').find('.icon:nth-child(6)').addClass('active')
            }, 2300)
            setTimeout(function(){
                $('.logistics').find('.icon:nth-child(7)').addClass('active')
            }, 2700)
            setTimeout(function(){
                $('.logistics').find('.icon:nth-child(8)').addClass('active')
            }, 3100)
        }
    }) 

    //service slider animation
    var waypoint = new Waypoint({
        element: document.getElementById('slider-service'),
        offset: '50%',
        handler: function(direction) {
            $('.slider-service').find('.owl-item.active').children().addClass('active')
            $('.slider-service').find('.owl-item.active').find('.labels').addClass('active')
        }
    })
    
    var kmInit = 0;
    var kmYear = 1000000;
    var kmDay = kmYear / 365;
    var kmHour = kmDay / 24;
    var kmMinute = kmHour / 60;
    
    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var currDay = Math.floor(diff / oneDay) - 1;
    var currHour = now.getHours() - 1;
    var currMinute = now.getMinutes();
    
    var km = kmInit + Math.round((currDay * kmDay) + (currHour * kmHour) + (currMinute * kmMinute));
    
    var interval = 2000;
    
    if (currHour >= 8 && currHour <= 18) {
        interval = 1000;
    }
    
    startCounting(km, interval);
    
    function startCounting(km, interval) {
        setInterval(function () {        
            var kmString = ("0000000" + km).substr(-7,7);
            km = km + 1;
            showCounter(kmString);
        }, interval);
    }
    
    function showCounter(kmString) {
        kmArray = kmString.split("");
        
        $(".counter-box .counter").html(
            '<span class="num">' + kmArray[0] + '</span>' +
            '<span class="num">' + kmArray[1] + '</span>' +
            '<span class="num">' + kmArray[2] + '</span>' +
            '<span class="num">' + kmArray[3] + '</span>' +
            '<span class="num">' + kmArray[4] + '</span>' +
            '<span class="num">' + kmArray[5] + '</span>' +
            '<span class="num red">' + kmArray[6] + '</span>'
        );
    }
    
});

