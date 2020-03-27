function MediaPlayer(config) {
    this.media = config.el;
}

MediaPlayer.prototype.play = function () {
    this.media.play();
    button.innerHTML = `<img class="prueba-pausa" src="icons8-pausa-64.png" alt="pausa">`      
}

MediaPlayer.prototype.pause = function () {
    this.media.pause();
    button.innerHTML = `<img class="prueba-pausa" src="icons8-play-64.png" alt="play">`  
}

MediaPlayer.prototype.togglePlay = function () {
    if (this.media.paused) {
        this.play();
    } else {
        this.pause();
    }
};

const video = document.querySelector('video');
const player = new MediaPlayer ({ el: video })

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();
