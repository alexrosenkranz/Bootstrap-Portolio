var spotify = require('spotify'); 


 
spotify.get({ type: '', query: 'alexrosenkranz' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    console.log(data);
 
    // Do something with 'data' 
});