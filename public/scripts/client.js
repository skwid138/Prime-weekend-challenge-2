if (log) console.log('sourced client.js');
// switches for log statements
var log = true;
var noLog = false;

function onReady( ) {
    if (log) console.log('document ready');
    
}

$(document).ready(onReady);