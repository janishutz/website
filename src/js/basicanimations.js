$( document ).ready( function() {
    $( '#ContentToInclude' ).load( '/menu.html' );
    $( '#Footer' ).load('/footer.html');
    setTimeout( highlightLocation, 200 );
} );

function highlightLocation () {
    let pagename = $(location).attr( 'pathname' );
    if ( pagename.slice(0, 8) == '/project' ) {
        $( '#projects' ).css( 'background-color', 'darkblue' );
    } else if ( pagename.slice( 0, 6 ) == '/about' || pagename.slice( 0, 14 ) == '/privacypolicy' ) {
        $( '#about' ).css( 'background-color', 'darkblue' );
    } else if ( pagename.slice( 0, 6 ) == '/' || pagename == '/index.html' ) {
        $( '#home' ).css( 'background-color', 'darkblue' );
    } else if ( pagename.slice( 0, 8 ) == '/support' ) {
        $( '#support' ).css( 'background-color', 'darkblue' );
    } else if ( pagename.slice( 0, 9 ) == '/services' ) {
        $( '#services' ).css( 'background-color', 'darkblue') ;
    };
}