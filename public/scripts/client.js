// switches for log statements
var log = true;
var noLog = false;

if (log) console.log('sourced client.js');

function onReady( ) {
    if (log) console.log('document ready');

    // listener for addPersonButton
    $('#addPersonButton').on('click', addPerson);
}

function addPerson( ) {
// When the "Add Person" button is clicked the user  input should
// be put into an object and sent to the "/person" route via POST.
    console.log('in addPerson');
    

    // variables for input fields
    var nameInput = $('#nameInput');
    var factInput = $('#factInput');

    // object to hold values of inputs to POST
    var personToSend = {
        name: nameInput.val(),
        fact: factInput.val()
    };
    console.log('person to send object ->', personToSend);
    

    $.ajax({
        method: 'POST',
        url: '/person',
        data: personToSend, // object with person data for server
        success: function (response) {
            console.log('person post response ->', response);

        }
    });
    nameInput.val( '' );
    factInput.val( '' );
}



$(document).ready(onReady);