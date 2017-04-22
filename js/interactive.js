// JavaScript Document

$(document).ready(function() {
    var $window = $(window);

        // Function to handle changes to style classes based on window width
        function checkWidth() {
        if ($window.width() < 768) {
            $('#mainContent').addClass('page-small');
            };

        if ($window.width() >= 768) {
            $('#mainContent').removeClass('page-small');
        }
    }

    // Execute on load
    checkWidth();

    // Bind event listener
    $(window).resize(checkWidth);
});