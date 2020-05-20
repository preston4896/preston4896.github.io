"strict mode";

// scrollMagic code
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene();

// navBar items active status code.
// Code snippet: https://stackoverflow.com/questions/49530497/how-do-i-make-bootstrap-navbar-change-active-state
$(document).ready(function() {
    $( ".ml-auto .nav-item" ).bind( "click", function(event) {
        var clickedItem = $( this );
        $( ".ml-auto .nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });
});