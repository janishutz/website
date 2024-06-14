const degLat = document.getElementById( 'deg-lat' );
const minLat = document.getElementById( 'min-lat' );
const secLat = document.getElementById( 'sec-lat' );
const latitude = document.getElementById( 'lat' );
const degLong = document.getElementById( 'deg-long' );
const minLong = document.getElementById( 'min-long' );
const secLong = document.getElementById( 'sec-long' );
const longitude = document.getElementById( 'long' );

const output = document.getElementById( 'out' );


var convertDMSDecimal = () => {
    let long = 0;
    let lat = 0;
    if ( !isNaN( degLat.value ) && !isNaN( minLat.value ) && !isNaN( secLat.value ) && !isNaN( degLong.value ) && !isNaN( minLong.value ) && !isNaN( secLong.value ) ) {
        try {
            // calculate latitude
            lat = Math.round( ( parseInt( degLat.value ) + parseInt( minLat.value ) / 60 + parseFloat( secLat.value ) / 6000 ) * 100000 ) / 100000;

            // calculate longitude
            long = Math.round( ( parseInt( degLong.value ) + parseInt( minLong.value ) / 60 + parseFloat( secLong.value ) / 6000 ) * 100000 ) / 100000;
        } catch ( err ) {
            console.error( err );
            alert( 'An error occurred whilst calculating. Please ensure that degrees & minutes are entered as whole numbers' );
        }
        output.value = String( lat ) + latitude.value + ' ' + String( long ) + longitude.value;
    } else {
        alert( 'Invalid input. Please ensure that all input fields only contain numbers!' );
    }
}

var copy = () => {
    navigator.clipboard.writeText( output.value );
}


var clearApp = () => {
    degLat.value = '';
    minLat.value = '';
    secLat.value = '';
    degLong.value = '';
    minLong.value = '';
    secLong.value = '';
    latitude.value = 'N';
    longitude.value = 'W';
}