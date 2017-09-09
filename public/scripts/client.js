if (log) console.log('sourced client.js');
// switches for log statements
var log = true;
var noLog = false;

function onReady( ) {
    if (log) console.log('document ready');

    // listener for addPersonButton
    
}

function addPerson( ) {
// When the "Add Person" button is clicked the user  input should
// be put into an object and sent to the "/person" route via POST.

    // variables to collect value of inputs
    var varName = $().val();
    var varName2 = $().val();

    // object to hold values to send
    var personToSend = {
        name: varName,
        fact: varName2
    };

    $.ajax({
        method: 'POST',
        url: '/person',
        data: personToSend, // object with person data for server
        success: function (response) {
            console.log('ajax post response ->', response);

        }
    });
}



$(document).ready(onReady);