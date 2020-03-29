import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './assets/plugins/AutoPlay.js';


const video = document.querySelector('video');
const player = new MediaPlayer ({ el: video }) 
    // plugins: [new AutoPlay()] })

const button = document.querySelector('button');
button.onclick = () => player.togglePlay();

const btnMuted = document.querySelector('#muteButton');
btnMuted.onclick = () => player.toggleMute();