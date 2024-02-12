import { todoState, musicData } from "./template"
import { base } from "./data";
import playSVG from '../img/play.svg';
import pauseSVG from '../img/pause.svg';
import leftSVG from '../img/left.svg';
import rightSVG from '../img/right.svg';

export function addItem(type, content) {
    if (type === 'checklist') {
        let checkstroke = toLi(`
        <button class="check-button"></button>
        <p>${content}</p>
        `, todoState.checkId)
        todoState.checkId += 1;
        return checkstroke;   
    } else if (type === 'notelist') {
        let notestroke = toLi(`
        <button class="note-button">✘</button>
        <p>${content}</p>
        `, todoState.noteId)
        todoState.noteId += 1;
        return notestroke;
    } else {
        return console.log('Ошибка')
    }
}

function addButton(type) {
    if(type === 'notelist') {
        return `<li>
        <input type="text" id="note-input">
        <button class="add-notes-button">добавить запись</button>
        <button class="plus-button">+</button> 
        </li>`
    } else if(type === 'checklist') {
        return `<li>
        <input type="text" id="check-input">
        <button class="add-check-button">добавить цель</button>
        <button class="plus-button">+</button> </li>`
    }
}

export function initeNote(checkObj, noteObj) {
    return `
        <div id="checklist">
            <ul>
                ${addButton(checkObj.type)}
            </ul>
        </div>
        <div id="noteslist">
            <ul>
                ${addButton(noteObj.type)}
            </ul>
        </div>
        `
}

function toLi(content, id) {
    return `<li data-id="${id}">${content}</li>`
}

export function back($input) {
    $input.value = $input.value.substring(0, $input.value.length - 1);
}

export function sqrt($input) {
    $input.value = Math.pow(Number($input.value), 2);
}

export function toCalcbase(state ,$input, $button) {
    state.firstNum = Number($input.value);
    state.mathOperation = $button.textContent;
    $input.value = '';
}

export function calcBase(state, $input) {
    const secondNum = Number($input.value);
            switch (state.mathOperation) {
                case '+': $input.value = state.firstNum + secondNum
                break;
                case '-': $input.value = state.firstNum - secondNum
                break;
                case '*': $input.value = state.firstNum * secondNum
                break;
                case '÷': $input.value = state.firstNum / secondNum
                break;
            }
            state.firstNum = 0;
}

export function pushTrack() {
    return `
    <div class="audioplayer__song-info">
        <p id="audioplayer__artist-name">${base[2].values[musicData.currentNumber].artist}</p>
        <p id="audioplayer__song-name">${base[2].values[musicData.currentNumber].trackName}</p>
    </div>
    `
}

export function getAudioControls() {
    return `
    <div class="audioplayer__controls">
        <img id="left-control" src="${leftSVG}" alt="">
        <img id="play-control" src="${playSVG}" alt="">
        <img id="pause-control" src="${pauseSVG}" alt="">
        <img id="right-control" src="${rightSVG}" alt="">
    </div>
    `
}

export function getAudioImage() {
    return `<img id="audioplayer-main-image" src="${base[2].values[musicData.currentNumber].trackImage}" alt="">`
}
