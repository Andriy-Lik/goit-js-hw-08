import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const localStorageValue = localStorage.getItem(LOCALSTORAGE_KEY);

const onPlay = function(data) {
    const time = data.seconds;
    localStorage.setItem(LOCALSTORAGE_KEY, time);
};

player.on('timeupdate', throttle(onPlay, 1000));

player
    .setCurrentTime(localStorageValue)
    .then(function(seconds) {})
    .catch(function(error) {
    switch (error.name) {
        case 'RangeError':
        break;

        default:
        break;
    }
});

