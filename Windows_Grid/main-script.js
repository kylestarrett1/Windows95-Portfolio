$(document).ready(function() {

    // Tilt for center image
    $('.center-image').tilt({
        scale: 1.08
    })

    // Hide all windows at load
    $( function() {
        $('.startMenu').hide();
        $('.shutdownPrompt').hide();
        $('.programsSubmenu').hide();
    
        $('#contact').hide();
    
        $('#aboutWindow').hide();

        $('.aboutTaskbar').hide();
    });

    // Load with default start border
    $('#start').addClass('borderRest');

    $('.aboutTaskbar').addClass('borderRest');

    // Toggle programs menu
    $('.programs').click(function() {
        $('.programsSubmenu').toggle();
    });

    // Info icon click to open contact form
    $( function() {
        $('.contactForm>span').dblclick(function() {
            $('#contact').toggle();
        });
    });

    $( function() {
        $('.about>span').dblclick(function() {
            $('#aboutWindow').toggle();
            $('.aboutTaskbar').toggle();
        });
    });

    // All draggable windows
    $( function() {
        $( ".shutdownPrompt" ).draggable();
        $("#contact").draggable();
        $("#aboutWindow").draggable();
    } );

    // Show shutdown window with prompts
    $( function() {
        $('.shutdown').click(function() {
            $('.shutdownPrompt').show();
        });
    
        $('.cancelShutdownPrompt').click(function() {
            $('.shutdownPrompt').hide();
        });
    
        $('.declineShutdown').click(function() {
            $('.shutdownPrompt').hide();
        });
    });

    // Clock 
    startTime();

    // Outside click to close start menu
    $(function() {
        $('#window-container').click(function() {  
            $('.startMenu').hide(); //hide the button
            $('#start').css({"border-top": "ridge 2px white",
                             "border-right": "ridge 2px black",
                             "border-bottom": "ridge 2px black",
                             "border-left": "ridge 2px white"});
        });
        
        $('#start').click(function() {
            $('.startMenu').toggle(); 
            $(this).toggleClass("borderRest borderClick");
        });
    });

});

function startTime() {

    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    var hd = h;
    $('#clock').html((hd = 0 ? "12" : hd > 12 ? hd - 12 : hd) + ":" + m + " " + (h < 12 ? "AM" : "PM"));
    t = setTimeout(function () { startTime() }, 500);
}

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }


    