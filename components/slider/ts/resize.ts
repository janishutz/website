/* eslint-disable no-var */
interface SizeConfig {
    [name: string]: {
        'min-width': number;
        'max-width': number;
    }
}
let sizeConfig: SizeConfig = {};


var resizeConfigure = ( config: SizeConfig ) => {
    sizeConfig = config;
};


const handleResize = () => {
    const sizes = Object.keys( sizeConfig );

    for ( let i = 0; i < sizes.length; i++ ) {
        const size = sizes[i];

        if (
            window.innerWidth < sizeConfig[ size ][ 'max-width' ]
            && window.innerWidth > sizeConfig[ size ][ 'min-width' ] ) {}
    }
};

const allowedExtensions = [
    'webp',
    'jpg',
    'jpeg',
    'svg',
    'png'
];

/**
 * Load type of image, can be used to load images for different platforms (i.e. mobile optimization)
 * @param postfix - What is appended to each image after a dash. Example: /path/to/image becomes /path/to/image-platform.jpg
 * for postfix = platform
 */
const loadImageType = ( postfix: string ) => {
    sliderElements.forEach( el => {
        const baseURL = el.dataset.imageBaseUrl;
        const filetype = el.dataset.filetype;

        if ( allowedExtensions.indexOf( filetype ) === -1 ) {
            console.warn( '[ SLIDER ] Invalid filetype ' + filetype + ' for image element with id ' + el.id );

            return;
        }

        if ( !baseURL ) {
            console.error( '[ SLIDER ] ImageBaseURL undefined for element with id ' + el.id );

            return;
        }

        if ( baseURL.lastIndexOf( '.' ) > baseURL.lastIndexOf( '/' ) ) {
            console.warn( '[ SLIDER ] ImageBaseURL incorrect for element with id ' + el.id );

            return;
        }

        el.style.backgroundImage = `url( ${ baseURL }-${ postfix + filetype } )`;
    } );
};
