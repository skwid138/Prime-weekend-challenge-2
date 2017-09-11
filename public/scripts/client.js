// switches for log statements
var log = true;
var noLog = false;

if (log) console.log('sourced client.js');

function onReady( ) {
    if (log) console.log('document ready');

    // get people on page load
    getPeople();

    // listener for addPersonButton
    $('#addPersonButton').on('click', addPerson);

    // listener for carousel
    $('#peopleSection').on('click', carousel);
}

function addPerson( ) {
// When the "Add Person" button is clicked the user  input should
// be put into an object and sent to the "/person" route via POST.
    if (log) console.log('in addPerson');
    
    // variables for input fields
    var nameInput = $('#nameInput');
    var factInput = $('#factInput');

    // object to hold values of inputs to POST
    var personToSend = {
        name: nameInput.val(),
        fact: factInput.val()
    };
    if (log) console.log('person to send object ->', personToSend);

    $.ajax({
        method: 'POST',
        url: '/person',
        data: personToSend, // object with person data for server
        success: function (response) {
            if (log) console.log('person post response ->', response);
        }
    });
    getPeople( );
    nameInput.val( '' );
    factInput.val( '' );
}

function getPeople( ) {
    $.ajax({
        method: 'GET',
        url: '/person',
        success: function (response) {
            if (log) console.log('getPeople response ->', response);
            $('#peopleSection').empty();
            var $div = $('<div>');
            for (var i = 0; i < response.length; i++) {
                $div.append('<p>');
                $div.append(response[i].name + ': ' + response[i].fact);
                // $div.append('<button id="prevButton">Prev</button>'); // buttons for carousel
                // $div.append('<button id="nextButton">Next</button>'); // buttons for carousel
            }
            $('#peopleSection').append($div);
        }
    });
}

function carousel( ) {
//Create a carousel that shows only one person at a time. 
// There should be "next" and "previous" buttons that wrap
//and an indicator of which person is being shown:
}



$(document).ready(onReady);