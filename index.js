import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './AutoPlay.js';
import AutoPause from './AutoPause.js';


const video = document.querySelector('video');
const player = new MediaPlayer ({ 
    el: video,
    plugins: [new AutoPlay(), new AutoPause()],
 }) 


const button = document.querySelector('button');
button.onclick = () => player.togglePlay();

const btnMuted = document.querySelector('#muteButton');
btnMuted.onclick = () => player.toggleMute();