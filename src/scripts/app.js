import { base } from "./data";
import { initeNote } from "./utils";
import { addClick, calculatorFunctionalOn, calculatorRender, delItem, pushItem, addTrackData, renderPlayer, $trackImage, $trackInfo } from "./template";
import { barDown, musicBar } from "./anime";
import { clickToPlaylist, playlistAnim } from "./playlist";

const $app = document.querySelector('#todo');
$app.innerHTML = initeNote(base[0], base[1]);
//Чеклист
let $checklist = $app.querySelector('#checklist > ul');
const $addCheckItemButton = document.querySelector('.add-check-button');
const $inputChecklist = document.querySelector('#check-input');
const $checkPlusButton = $checklist.querySelector('.plus-button');
//Лист заметок
const $noteslist = $app.querySelector('#noteslist > ul');
const $addNoteItemButton = document.querySelector('.add-notes-button');
const $inputNoteList = document.querySelector('#note-input');
const $notePlusButton = $noteslist.querySelector('.plus-button');
//калькулятор 
const $calculator = document.querySelector('#calculatorblock');
//плеер 
export const $player = document.querySelector('#audioplayer');
//плейлист 
const $playlist = document.querySelector('#playlist');
let $playlistImg = $playlist.querySelector('img');




export class App {
    constructor() {  
    }

    init() {
        this.checkListStart();
        this.noteslistStart();
        this.calculatorStart();
        this.trackBarStart();
        this.animations();
        this.startPlaylist();
    }

    checkListStart() {
        addClick($addCheckItemButton, $inputChecklist, $checkPlusButton);
        pushItem($checkPlusButton, $inputChecklist, $addCheckItemButton, $checklist, 0);
        delItem($checklist, 0);
    }

    noteslistStart() {
        addClick($addNoteItemButton, $inputNoteList, $notePlusButton);
        pushItem($notePlusButton, $inputNoteList, $addNoteItemButton, $noteslist, 1);
        delItem($noteslist, 1);
    }

    calculatorStart() {
        calculatorRender($calculator);
        calculatorFunctionalOn($calculator);
    }

    trackBarStart() {
        addTrackData();
    }

    animations() {
        musicBar($player)
    }

    startPlaylist() {
        playlistAnim($playlistImg, $playlist);
        clickToPlaylist($playlistImg, $playlist, $trackImage, $trackInfo)
    }
}
