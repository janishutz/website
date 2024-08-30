let isPrep = false;


function YTEmbed ( elementBindID, videoID ) {
    if ( !isPrep ) {
        console.log( '[ YT-Embed ] Preparing...' );
        isPrep = true;
        const css = document.createElement( 'link' );
        css.rel = 'stylesheet';
        css.href = 'https://static.janishutz.com/css/yt-embed.css';
        // css.href = 'http://localhost:8081/yt-embed.css';
        document.head.appendChild( css );
    }
    const el = document.getElementById( elementBindID );
    el.innerHTML = `<div class="yt-embed"><p class="yt-embed-desc">YouTube Video was not loaded automatically to preserve your privacy. If you wish to load it here, click the button below!</p>
    <div><button class="yt-embed-button" onclick="activateYTEmbed( '${ elementBindID }', '${ videoID }' )">Load video</button><a href="https://youtube.com/watch?v=${ videoID }" class="yt-embed-button" target="_blank">View on YouTube</a></div></div>`;
}


function activateYTEmbed ( elementBindID, videoID ) {
    document.getElementById( elementBindID ).innerHTML = `<iframe width="420" height="315"src="https://www.youtube.com/embed/${ videoID }" class="yt-embed"></iframe>`;
}