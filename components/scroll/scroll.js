window.scrollHint = ( maxScroll ) => {
    $( () => {
        let isShowing = false;
        const el = document.getElementById( 'scroll-indicator' );
        if ( !el ) {
            throw new Error( 'There is no element with ID "scroll-indicator" present on DOM' );
        }
        el.innerHTML = `
        <div class="scroll-wrapper">
            <div class="scroll-container">
                Scroll to discover more
                <span class="material-symbols-outlined scroll-symbol">keyboard_double_arrow_down</span>
            </div>
        </div>`;
        
        el.onclick = () => {
            if ( window.scrollY === 0 ) {
                window.scrollTo( { 'top': window.innerHeight, 'behavior': 'smooth' } );
            } else if ( window.scrollY % window.innerHeight === 0 ) {
                window.scrollTo( { 'top': ( Math.ceil( window.scrollY / window.innerHeight ) + 1 ) * window.innerHeight, 'behavior': 'smooth' } );
            } else {
                window.scrollTo( { 'top': Math.ceil( window.scrollY / window.innerHeight ) * window.innerHeight, 'behavior': 'smooth' } );
            }
            $( '#scroll-indicator' ).fadeOut( 300 );
            try {
                clearTimeout( scrollCorrectionTimeout );
            } catch ( _err ) {};
            isShowing = false;
            timeout = setTimeout( () => { showHint() }, 2500 );
        }

        document.onscrollend = () => {
            scrollCorrectionTimeout = setTimeout( () => {
                scrollCorrection();
            }, 1000 );
            timeout = setTimeout( () => { 
                showHint();
            }, 2500 );
        }
        document.onscroll = () => {
            try {
                clearTimeout( timeout );
            } catch ( _e ) {}
            try {
                clearTimeout( scrollCorrectionTimeout );
            } catch ( _err ) {};
            if ( isShowing ) {
                isShowing = false;
                $( '#scroll-indicator' ).fadeOut( 300 );
            }
        };

        window.onresize = () => {
            scrollCorrection();
            showHint();
        }

        let timeout = setTimeout( () => { 
            showHint();
        }, 2500 );

        let scrollCorrectionTimeout = 0;
        
        const showHint = () => {
            if ( Math.round( window.scrollY / window.innerHeight ) < maxScroll && maxScroll > 0 ) {
                $( '#scroll-indicator' ).fadeIn( 300 );
                isShowing = true;
            } else {
                $( '#scroll-indicator' ).fadeOut( 300 );
                isShowing = false;
            }
        }

        const scrollCorrection = () => {
            if ( Math.round( window.scrollY / window.innerHeight ) <= maxScroll && maxScroll > 0 && Math.floor( window.scrollY / window.innerHeight ) < maxScroll ) {
                window.scrollTo( { top: Math.round( window.scrollY / window.innerHeight ) * window.innerHeight, behavior: 'smooth' } );
            }
        }

        scrollCorrection();
    } );
}