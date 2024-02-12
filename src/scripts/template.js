
import { base } from "./data";
import { addItem, back, toCalcbase, calcBase, sqrt, pushTrack, getAudioControls, getAudioImage } from "./utils";
import { getProfile } from "./audio";
import { track_id } from "./audio";
import { $player } from "./app";


export const todoState = {
    checkId: 0,
    noteId: 0
}

export const musicData = {
    track: '',
    currentNumber: -1
}

export function addClick($addItemButton, $inputlist, $plusButton) {
    $addItemButton.addEventListener('click', () => {
        $inputlist.value = '';
        $addItemButton.style.display = 'none';
        $plusButton.style.display = 'block';
        $inputlist.style.display = 'block';
    });
}

export function pushItem($plusButton, $inputlist, $addItemButton, $list, listType) {
    $plusButton.addEventListener('click', () => {
        if ($inputlist.value != '') {
            let listid;
            if (listType === 0) {
                listid = todoState.checkId
            } else if (listType === 1) {
                listid = todoState.noteId
            }
            base[listType].values.push({ id: listid, value: $inputlist.value});
            $plusButton.style.display = 'none';
            $inputlist.style.display = 'none';
            $addItemButton.style.display = 'block';
            $list.insertAdjacentHTML('beforeend', addItem(base[listType].type ,base[listType].values[base[listType].values.length - 1].value));
        } else {
            alert('Пустое значение');
        }
    })
}

export function delItem($list, listType) {
    $list.addEventListener('click', (event) => {
        let buttonFlag;
        listType === 0 ? buttonFlag = 'check-button' : buttonFlag = 'note-button'
        if (event.target.classList.contains(buttonFlag)) {
            event.target.parentNode.remove(); 
            const $blockDataId = event.target.parentNode.dataset.id;
            base[listType].values.forEach((item, index) => {
                if(item.id == $blockDataId) {
                    base[listType].values.splice(index, 1) 
                    console.log(base[listType].values);
                }
            });
        }
    })
}

export function calculatorRender($calculator) {
        $calculator.innerHTML = `
        <form action="" id="calculator">
            <input type="text" name="" id="input" readonly>
                <div class="buttons">
                    <div>
                        <button>C</button>
                        <button>⮨</button>
                        <button>x²</button>
                    </div>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </div>
                    <div>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </div>
                    <div><button id="zero">0</button></div>
                    <div>
                        <button>÷</button>
                        <button>*</button>
                        <button>-</button>
                    </div>
                    <button id="bigplus">+</button>
                    <button id="result" type="submit">=</button>
                </div>
            </form>
    `
}

export function calculatorFunctionalOn($calculator) {
    const $calcbuttons = $calculator.querySelectorAll('button');
    const $calcInput = $calculator.querySelector('#input');

    const calcState = {
        firstNum: 0,
        mathOperation: null
    }

    $calcbuttons.forEach(($button) => {
        $button.addEventListener('click', (e) => {
            e.preventDefault();
            if ($button.textContent === 'C') {
                $calcInput.value = '';
            } else if ($button.textContent === '⮨') {
                back($calcInput);
            } else if ($button.textContent === 'x²') {
                sqrt($calcInput);
            } else if ($button.textContent === '÷' || $button.textContent === '*' || $button.textContent === '+' || $button.textContent === '-') {
                toCalcbase(calcState, $calcInput, $button)
            } else if ($button.textContent === '=') {
                calcBase(calcState, $calcInput)
            } else {
                $calcInput.value += $button.textContent;
            }
        });
    });
}

export async function addTrackData() {
    for (let i = 0; i < track_id.length; i++) {
        const audioData = await getProfile(i);
        // if (audioData.preview_url === null) {
        //     console.log('песни нет')
        //     break;
        // } 
        base[2].values[i] = {}
        base[2].values[i].listId = i
        base[2].values[i].id = audioData.id;
        base[2].values[i].trackName = audioData.name;
        base[2].values[i].artist = audioData.artists[0].name;
        base[2].values[i].duration = audioData.duration_ms;
        base[2].values[i].trackImage = audioData.album.images[0].url;
        base[2].values[i].url = `../tracks/${audioData.name}.mp3`;
    }

    musicData.currentNumber += 1;
    renderPlayer($player);
    $player.insertAdjacentHTML('afterbegin', getAudioControls())
    let $trackImage; 
    let $trackInfo;
    const $startTrack = $player.querySelector('#play-control');
    const $pauseTrack = $player.querySelector('#pause-control');
    const $nextButton = $player.querySelector('#right-control');
    const $previousButton = $player.querySelector('#left-control');
    nextTrack($nextButton, $trackImage, $trackInfo);
    previousTrack($previousButton, $trackImage, $trackInfo);
    startPlaySong($startTrack, $pauseTrack);
    pauseSong($startTrack, $pauseTrack);
}

function renderPlayer() {
    getNewTrack();
    $player.insertAdjacentHTML('beforeend', getAudioImage())
    $player.insertAdjacentHTML('beforeend', pushTrack())
}

function startPlaySong($startTrack, $pauseTrack) {
    $startTrack.addEventListener('click', () => {
        musicData.track.play();
        console.log(musicData)
        $startTrack.style.display = 'none'
        $pauseTrack.style.display = 'block'
    })
}

function pauseSong($startTrack ,$pauseTrack) {
    $pauseTrack.addEventListener('click', () => {
        $startTrack.style.display = 'block'
        $pauseTrack.style.display = 'none'
        musicData.track.pause();
    })
}

function nextTrack($nextButton, $trackImage, $trackInfo) {
    $nextButton.addEventListener('click', () => {
        musicData.currentNumber += 1
        $trackInfo = $player.querySelector('.audioplayer__song-info');
        $trackImage = $player.querySelector('#audioplayer-main-image');
        $trackImage.remove();
        $trackInfo.remove();
        renderPlayer();
    })
}

function previousTrack($previousButton, $trackImage, $trackInfo) {
    $previousButton.addEventListener('click', () => {
        musicData.currentNumber -= 1
        $trackInfo = $player.querySelector('.audioplayer__song-info');
        $trackImage = $player.querySelector('#audioplayer-main-image');
        $trackImage.remove();
        $trackInfo.remove();
        renderPlayer();
    })
}

function getNewTrack() {
    musicData.track = new Audio(base[2].values[musicData.currentNumber].url);
    return musicData;
}
