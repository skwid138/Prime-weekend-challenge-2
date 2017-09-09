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
    

    // variables to collect value of inputs
    var nameInput = $('#nameInput').val();
    var factInput = $('#factInput').val();

    // object to hold values to send
    var personToSend = {
        name: nameInput,
        fact: factInput
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
}



$(document).ready(onReady);