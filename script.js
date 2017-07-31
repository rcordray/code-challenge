console.log('javascript has been sourced');

//generate button created

$(document).ready(function() {
    $('#generate').on('click', function() {
        console.log('generate button was clicked');
        $('body').append('<div id="newDiv"></div>');
    })




});