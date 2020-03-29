function MediaPlayer(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function () {
    this.plugins.forEach (plugin => {
        plugin.run(this);
    })
}

MediaPlayer.prototype.play = function () {
    this.media.play();
    const button = document.querySelector('button');
    button.innerHTML = `<img class="prueba-pausa" src="icons8-pausa-64.png" alt="pausa">`;      
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
    const button = document.querySelector('button');
    button.innerHTML = `<img class="prueba-pausa" src="icons8-play-64.png" alt="play">`;  
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

MediaPlayer.prototype.mute = function () {
    this.media.muted = true;
    const button = document.querySelector('#muteButton');
    button.innerHTML = `<img class="prueba-pausa" src="icons8-sound-48.png" alt="play">`;
}

MediaPlayer.prototype.unmute = function () {
    this.media.muted = false;
    const button = document.querySelector('#muteButton');
    button.innerHTML = `<img class="prueba-pausa" src="icons8-mute-64.png" alt="play">`;
}

MediaPlayer.prototype.toggleMute = function () {
    if (this.media.muted) {
        this.unmute();
    } else {
        this.mute();
    }
};

export default MediaPlayer;