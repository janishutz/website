const fs = require( 'fs' );
const navMenu = '' + fs.readFileSync( './src/nav.html' );
const footer = '' + fs.readFileSync( './src/footer.html' );

/**
 * Recursively find all HTML files in a directory
 * @param {string} dir The directory to search. Either absolute or relative path
 * @param {string} extension The file extension to look for
 * @returns {string[]} returns a list of html files with their full path
 */
const treeWalker = ( dir, extension ) => {
    const ls = fs.readdirSync( dir );
    const fileList = [];
    for ( let file in ls ) {
        if ( !ls[ file ].includes( '.' ) ) {
            const newFiles = treeWalker( dir + '/' + ls[ file ], extension );
            for ( let file in newFiles ) {
                fileList.push( newFiles[ file ] );
            }
        } else if ( ls[ file ].includes( extension ) ) {
            fileList.push( dir + '/' + ls[ file ] );
        }
    }

    return fileList;
}


const addNavAndFooterToFile = ( file ) => {
    const f = '' + fs.readFileSync( file );
    const navIndex = f.indexOf( '<nav>' ) + 5;
    const footerIndex = f.indexOf( '<footer>' ) + 8;
    return f.slice( 0, navIndex ) + navMenu + f.slice( navIndex, footerIndex ) + footer + f.substring( footerIndex );
}

/**
 * Save a file to a path. All occurrences of "src" will be replaced by "dist"
 * @param {string} filePath
 * @param {string} data
 * @returns {void}
 */
const saveFile = ( filePath, data ) => {
    const nPath = filePath.replace( 'src', 'dist' );
    const dirSplit = nPath.split( '/' );
    let currDir = nPath.slice( 0, nPath.indexOf( '/' ) + 1 );
    for ( let dir in dirSplit ) {
        if ( dirSplit[ dir ] !== '.' && !dirSplit[ dir ].includes( '.' ) ) {
            currDir += dirSplit[ dir ] + '/';
            try {
                fs.readdirSync( currDir );
            } catch ( e ) {
                fs.mkdirSync( currDir );
            }
        }
    }
    fs.writeFileSync( nPath, data );
}

const copyFiles = ( dir, extension ) => {
    const files = treeWalker( dir, extension );

    for ( let file in files ) {
        saveFile( files[ file ], '' + fs.readFileSync( files[ file ] ) );
    }
}

const filesToParse = treeWalker( './src', '.html' );

for ( let file in filesToParse ) {
    if ( !filesToParse[ file ].includes( 'footer.html' ) && !filesToParse[ file ].includes( 'nav.html' ) ) {
        saveFile( filesToParse[ file ], addNavAndFooterToFile( filesToParse[ file ] ) );
    }
}

// Copy all JS, CSS and jpg files
copyFiles( './src', '.js' );
copyFiles( './src', '.css' );

console.log( '\n==> DONE\n\n' );