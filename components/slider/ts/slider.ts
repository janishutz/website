const fetchedElements = document.getElementsByClassName( 'slider-element' );
const sliderElements: HTMLDivElement[] = [];
let okToMove = true;
let currentSlideIndex = 0;
const sliderContainer: HTMLDivElement = ( document.getElementsByClassName( 'slider-container' )[ 0 ] as HTMLDivElement );

function sliderGoToIndex ( index: number ) {
    if ( okToMove ) {
        if ( index < sliderElements.length && index >= 0 ) {
            okToMove = false;
            // Determine next and previous elements
            let previousElement = 0;
            let nextElement = 0;
            if ( index < sliderElements.length - 1 ) {
                nextElement = index + 1;
            } else {
                nextElement = 0;
            }

            if ( index === 0 ) {
                previousElement = sliderElements.length - 1;
            } else {
                previousElement = index - 1;
            }

            // Determine move direction:
            // true = next, false = previous
            let moveDirection = true;
            if ( ( index < currentSlideIndex || ( index === sliderElements.length - 1 && currentSlideIndex === 0 ) ) && !( index === 0 && currentSlideIndex === sliderElements.length - 1 ) ) {
                moveDirection = false;
            }

            /* 
                Add correct classes to all elements 
            */

            // New current element
            sliderElements[ index ].classList.add( 'current' );
            sliderElements[ index ].classList.remove( 'next' );
            sliderElements[ index ].classList.remove( 'past' );

            // New next element
            if ( moveDirection ) {
                sliderElements[ nextElement ].classList.add( 'future' );
            } else {
                sliderElements[ nextElement ].classList.add( 'next' );
            }
            sliderElements[ nextElement ].classList.remove( 'current' );
            sliderElements[ nextElement ].classList.remove( 'past' );

            // new past element
            sliderElements[ previousElement ].classList.add( 'past' );
            sliderElements[ previousElement ].classList.remove( 'current' ); 
            sliderElements[ previousElement ].classList.remove( 'next' ); 

            // Glitch fixes
            setTimeout( () => {
                if ( moveDirection ) {
                    sliderElements[ nextElement ].classList.add( 'next' );
                    sliderElements[ nextElement ].classList.remove( 'future' );
                }
                currentSlideIndex = index;
                setTimeout( () => {
                    okToMove = true;
                }, 500 );
            }, 1000 );
        } else if ( index < 0 ) {
            sliderGoToIndex( sliderElements.length - 1 );
        } else {
            sliderGoToIndex( 0 );
        }
    }
}


type SliderAction = 'next' | 'previous';
function sliderControl ( action: SliderAction ) {
    if ( action === 'next' ) {
        sliderGoToIndex( currentSlideIndex + 1 );
    } else if ( action === 'previous' ) {
        sliderGoToIndex( currentSlideIndex - 1 );
    }

    sliderAutoAdvance();
}

let sliderAutoAdvanceInterval = 0;
let sliderInterval = 0;
function activateSlider ( interval: number ) {
    sliderAutoAdvanceInterval = interval;
    sliderContainer.addEventListener( 'mouseenter', () => {
        stopSliderAutoAdvance()
    } );

    sliderContainer.addEventListener( 'mouseleave', () => {
        sliderAutoAdvance();
    } );

    document.addEventListener( 'blur', () => {
        stopSliderAutoAdvance()
    } );

    window.addEventListener( 'focus', () => {
        sliderAutoAdvance();
    } );

    sliderAutoAdvance();
}

const sliderAutoAdvance = () => {
    if ( sliderAutoAdvanceInterval > 0 ) {
        stopSliderAutoAdvance();
        sliderInterval = setInterval( () => {
            sliderGoToIndex( currentSlideIndex + 1 );
        }, sliderAutoAdvanceInterval );
    }
}

const stopSliderAutoAdvance = () => {
    try {
        clearInterval( sliderInterval );
    } catch ( e ) {};
}

for ( let el in fetchedElements ) {
    if ( fetchedElements[ el ].className ) {
        sliderElements.push( ( fetchedElements[ el ] as HTMLDivElement ) );
    }
}
sliderGoToIndex( 0 ); 