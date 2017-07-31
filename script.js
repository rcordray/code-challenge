console.log('javascript has been sourced');

//generate button created

$(document).ready(function() {
    $('#generate').on('click', function() {
        console.log('generate button was clicked');
        var numberOfClicks = 0;
        numberOfClicks++;
        $('body').append(
            '<div class="colorDiv">' +
            '<p>' + numberOfClicks + '<p>' +
            '<button>Swap</button>' +
            '<button>Delete</button>' + '</div>'
        );

        $('#newDiv').append('<p>"numberOfClicks"</p>');
    })




});