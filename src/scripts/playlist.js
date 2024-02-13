import { base } from "./data";
import { toSec } from "./utils";
import { musicData, renderPlayer, startPlaySong } from "./template";
import { $player } from "./app";
import { $trackImage, $trackInfo } from "./template";


export function playlistAnim($playlistImg) {
    $playlistImg.addEventListener('mouseover', () => {
        $playlistImg.classList.remove('backToAnim'); 
        $playlistImg.classList.add('hoverAnim');
    });
    
    $playlistImg.addEventListener('mouseout', () => {
        $playlistImg.classList.remove('hoverAnim');
        $playlistImg.classList.add('backToAnim'); 
    });

}

export function clickToPlaylist($playlistImg ,$playlist, $trackImage, $trackInfo) {
    $playlistImg = $playlist.querySelector('img');
    $playlistImg.addEventListener('click', () => {
        $playlistImg.style.display = 'none';
        const $playerlistTracks = $playlist.querySelector('.playlist-tracks')
        for(let i = 0; i < base[2].values.length; i++) {
            $playerlistTracks.insertAdjacentHTML('beforeend',
                 `
                <div class="playlist-element" data-track="${base[2].values[i].listId}">
                    <img src="${base[2].values[i].trackImage}">
                    <div class="playlist-info">
                        <p class="playlist-artist">${base[2].values[i].artist}</p>
                        <p class="playlist-track">${base[2].values[i].trackName}</p>
                    </div>
                    <p class="playlist-duration">${toSec(base[2].values[i].duration)}</p>
                </div>
                `
            )
        }

        const playListTracksMas = $playlist.querySelectorAll('.playlist-element');
        playListTracksMas.forEach(track => {
            track.addEventListener('click', () => {
                musicData.track.pause();
                musicData.currentNumber = track.dataset.track;
                let $startTrack = $player.querySelector('#play-control');
                let $pauseTrack = $player.querySelector('#pause-control');
                $trackInfo = $player.querySelector('.audioplayer__song-info');
                $trackImage = $player.querySelector('#audioplayer-main-image');
                $trackImage.remove();
                $trackInfo.remove();
                renderPlayer();
                musicData.track.play()
                $startTrack.style.display = 'none'
                $pauseTrack.style.display = 'block'
            })
        });

        $playlist.insertAdjacentHTML('afterbegin', `
        <img src="./img/close.svg" class="playlist-close"> 
        `);
        const $closePlaylistButton = $playlist.querySelector('.playlist-close');
        $closePlaylistButton.addEventListener('click', () => {
            $playerlistTracks.innerHTML = '';
            $playlistImg.style.display = 'block';
            $closePlaylistButton.style.display = 'none'
        })
    })
}